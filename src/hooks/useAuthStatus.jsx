import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase'; // Make sure you import the correct Firestore config

const useAuthStatus = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // New state to track if the user is admin

  useEffect(() => {
    const auth = getAuth();
    const checkUserRole = async (uid) => {
      try {
        const userDocRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.role === 'admin') {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAuthenticated(true);
        await checkUserRole(user.uid); // Check the user's role after authentication
      } else {
        setAuthenticated(false);
        setIsAdmin(false); // Reset admin status if no user
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  return { authenticated, isAdmin, loading, setAuthenticated };
};

export default useAuthStatus;
