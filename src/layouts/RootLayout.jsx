import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/menu/Menu';
import ScrollToTop from '../utils/ScrollToTop';

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Header />
      <Menu />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
