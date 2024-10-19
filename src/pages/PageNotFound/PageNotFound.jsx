import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.scss';
import Locker from '@/components/locker/Locker';
import SideScroll from '@/components/sidescrollanimation/SideScroll';

const PageNotFound = () => {
  return (
    <div className={styles.pagenotfound}>
      <h1>404 PAGE NOT FOUND</h1>
      <Locker />
      <SideScroll />
      <Link to='/' className='mt-6 text-blue-500 underline'>
        Go back to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
