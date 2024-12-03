import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Media from './pages/Media';
import Tribute from './pages/Tribute';
import Teacher from './pages/Teacher';
import FunkCampMenu from './components/funkcampmenu';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import WriteBlog from './pages/WriteBlog';
import Logout from './pages/Logout';
import Posts from './pages/Posts';
import SinglePost from './pages/SinglePost';
import Category from './pages/Category';
import EditArticle from './pages/EditArticle';
import SearchResults from './pages/SearchResults';
import MyBlogs from './pages/MyBlogs';
import { Toaster } from 'react-hot-toast';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ScrollToTop from './utils/ScrollToTop';
import Landing from './pages/Landing/Landing';
import LockingHome from './pages/locking/Home';
import HistoryPage from './pages/locking/history-page';
import LockingMenu from './components/LockingMenu';
import Item from './pages/item/Item';

const App = () => {
  const location = useLocation();
  const isFunkcamp = location.pathname.startsWith('/funkcamp');
  const isLocking = location.pathname.startsWith('/locking');
  return (
    <>
      <ScrollToTop />
      {isFunkcamp && <FunkCampMenu />}
      {isLocking && <LockingMenu />}
      {/*  <FunkCampMenu /> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/funkcamp' element={<Home />} />
        <Route path='/funkcamp/about' element={<About />} />
        <Route path='/funkcamp/media' element={<Media />} />
        <Route path='/funkcamp/tribute' element={<Tribute />} />
        <Route path='/funkcamp/contact' element={<Contact />} />
        <Route path='/funkcamp/teacher/:id' element={<Teacher />} />
        <Route path='/funkcamp/tribute/:id' element={<Item />} />
        <Route path='/funkcamp/posts' element={<Posts />} />
        <Route path='/funkcamp/sign-in' element={<SignIn />} />
        <Route path='/funkcamp/sign-up' element={<Register />} />
        <Route path='/funkcamp/forgot-password' element={<ForgotPassword />} />
        <Route path='/funkcamp/sign-out' element={<Logout />} />
        <Route path='/funkcamp/category/:categoryName' element={<Category />} />
        <Route path='/funkcamp/blog/:articleId' element={<SinglePost />} />
        <Route path='/funkcamp/search/:query' element={<SearchResults />} />
        <Route path='/funkcamp/edit/:articleId' element={<EditArticle />} />
        <Route path='*' element={<PageNotFound />} />

        <Route element={<PrivateRoute />}>
          <Route path='/funkcamp/myBlogs/:userId' element={<MyBlogs />} />
          <Route path='/funkcamp/write' element={<WriteBlog />} />
        </Route>

        {/* Locking routes */}
        <Route path='/locking' element={<LockingHome />} />
        <Route path='/locking/historia' element={<HistoryPage />} />
      </Routes>
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
            marginTop: '50px',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
            iconTheme: {
              primary: 'green',
              secondary: '#333',
            },
          },
        }}
      />
    </>
  );
};

export default App;
