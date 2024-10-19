import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

import { motion } from 'framer-motion';
import Avatar from '../avatar/Avatar';
import styles from './Header.module.scss';
import useAuthStatus from '../../hooks/useAuthStatus'; // Assuming you have this hook

const Header = () => {
  const [active, setActive] = useState(false);
  const { authenticated, isAdmin } = useAuthStatus(); // Use auth status including admin check
  const [user, setUser] = useState(null); // Store user details
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  // Handle authentication status changes
  useEffect(() => {
    const checkAuthStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user); // Store user details when authenticated
        } else {
          setUser(null); // Clear user details when not authenticated
        }
      });
    };
    checkAuthStatus();
  }, [auth]);

  // Close the menu when the route changes
  useEffect(() => {
    setActive(false);
  }, [location]);

  // Logout functionality
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        navigate('/');
        toast.success('Logged out successfully!');
      } catch (error) {
        toast.error('An error occurred while logging out. Please try again.');
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>Logo</div>
        <motion.li className={styles.nav_item}>
          <Link className={styles['nav_link']} to='/articles'>
            Articles
          </Link>
        </motion.li>
        {authenticated && user && (
          <>
            {/* Only show the "Write" option to admins */}
            {isAdmin && (
              <>
                <motion.li className={styles.nav_item}>
                  <Link
                    className={styles['nav_link']}
                    to={`/myblogs/${user.uid}`}
                  >
                    My Blogs
                  </Link>
                </motion.li>
                <motion.li className={styles.nav_item}>
                  <Link className={styles['nav_link']} to='/write'>
                    Write
                  </Link>
                </motion.li>
              </>
            )}
            <button
              onClick={handleLogout}
              className={`${styles.nav_item} ${styles.logout_btn}`}
            >
              <span className={styles['nav_link']}>Logout</span>
            </button>
            <div className={styles.user}>
              <p>
                Logged in as: <span>{user.displayName || 'Anonymous'}</span>
              </p>
              <Avatar
                src={user.photoURL || '../../assets/images/default-avatar.png'}
              />
            </div>
          </>
        )}
        {!authenticated && (
          <motion.li className={styles.nav_item}>
            <Link className={styles['nav_link']} to='/sign-in'>
              Sign In
            </Link>
          </motion.li>
        )}
    </header>
  );
};

export default Header;
