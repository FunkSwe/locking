import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { db } from '../config/firebase';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { v4 as uuidv4 } from 'uuid';
import Dropdown from '../components/Dropdown';
import useAuthStatus from '../hooks/useAuthStatus'; // Assuming this hook is available

const WriteBlog = () => {
  const { authenticated, isAdmin, loading } = useAuthStatus(); // Use admin status
  const auth = getAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loadingState, setLoadingState] = useState(false); // Changed to avoid conflict with 'loading' from hook

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    category: '',
    image: null,
  });
  const [category, setCategory] = useState('');

  // Redirect if the user is not an admin
  useEffect(() => {
    if (!loading && (!authenticated || !isAdmin)) {
      navigate('/'); // Redirect to homepage if not an admin
      toast.error('Access denied');
    }
  }, [authenticated, isAdmin, loading, navigate]);

  // To get category
  const selectCategory = (option) => {
    setCategory(option);
    setBlogData({
      ...blogData,
      category: option,
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onBlogChangeHandler = (e) => {
    if (e.target.files) {
      setBlogData({ ...blogData, image: e.target.files[0] });
    } else {
      setBlogData({ ...blogData, [e.target.id]: e.target.value });
    }
  };

  const onBlogSubmitHandler = async (e) => {
    e.preventDefault();
    setLoadingState(true);

    const { title, content, category, image } = blogData;

    if (title && content && category) {
      try {
        let imageUrl = null;

        if (image) {
          const storage = getStorage();
          const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
          const storageRef = ref(storage, 'images/' + filename);

          const uploadTask = uploadBytesResumable(storageRef, image);

          await new Promise((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              () => {},
              (error) => {
                console.error(error);
                toast.error('Unable to upload image');
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  imageUrl = downloadURL;
                  resolve();
                });
              }
            );
          });
        }

        await addDoc(collection(db, 'blogs'), {
          blogData: {
            title,
            content,
            category,
            imageUrl: imageUrl || null,
          },
          timestamp: serverTimestamp(),
          author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid,
          },
        });

        navigate(`/myBlogs/${auth.currentUser.uid}`);
        toast.success('Blog post published');
      } catch (error) {
        console.error(error);
        toast.error('Unable to publish blog post');
      } finally {
        setLoadingState(false);
      }
    } else {
      toast.error('Please fill in all blog fields');
      setLoadingState(false);
    }
  };

  return (
    <div className='h-full bg-gray-200 pb-20'>
      {loadingState && <Loader />}
      <h1 className='mt-20 bg-gradient-to-r from-black to-[#888] bg-clip-text py-4 pt-14 text-center font-raleway text-4xl font-extrabold text-transparent md:text-5xl'>
        Create a new Blog Post
      </h1>

      <div className='mx-auto mt-[60px] w-[90%] max-w-3xl md:w-full lg:max-w-4xl'>
        {/* Blog Form */}
        <form onSubmit={onBlogSubmitHandler} className='mt-6'>
          {/* Categories */}
          <Dropdown
            toggleMenu={toggleMenu}
            category={category}
            selectCategory={selectCategory}
            isOpen={isOpen}
          />

          <input
            onChange={onBlogChangeHandler}
            type='text'
            className='mt-5 h-12 w-full rounded-md border-zinc-800 pl-3 text-black font-normal'
            value={blogData.title}
            id='title'
            placeholder='Enter title here...'
          />

          <textarea
            onChange={onBlogChangeHandler}
            id='content'
            className='mt-5 h-48 w-full rounded-md border-zinc-800 pl-3 text-black'
            placeholder='Enter blog content'
            value={blogData.content}
          ></textarea>

          {/* Image Upload */}
          <input
            onChange={onBlogChangeHandler}
            type='file'
            id='image'
            accept='image/*'
            className='mt-5 w-full rounded-md border-zinc-800 pl-3 text-black'
          />

          <button
            type='submit'
            className='mt-6 w-full bg-gradient-to-r from-black to-[#888] py-3 text-white'
          >
            Publish Blog Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;
