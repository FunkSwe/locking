import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Media from './pages/Media';
import Tribute from './pages/Tribute';
import Teacher from './pages/Teacher';
import Menu from './components/menu/Menu';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import WriteBlog from './pages/WriteBlog';
import Logout from './pages/Logout';
import Posts from './pages/Posts';
import SingleArticle from './pages/SingleArticle';
import Category from './pages/Category';
import EditArticle from './pages/EditArticle';
import SearchResults from './pages/SearchResults';
import MyBlogs from './pages/MyBlogs';
import { Toaster } from 'react-hot-toast';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/media' element={<Media />} />
        <Route path='/tribute' element={<Tribute />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/teacher/:id' element={<Teacher />} />

        <Route path='/posts' element={<Posts />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/sign-out' element={<Logout />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/blog/:articleId' element={<SingleArticle />} />
        <Route path='/search/:query' element={<SearchResults />} />
        <Route path='/edit/:articleId' element={<EditArticle />} />
        <Route path='*' element={<PageNotFound />} />

        <Route element={<PrivateRoute />}>
          <Route path='/myBlogs/:userId' element={<MyBlogs />} />
          <Route path='/write' element={<WriteBlog />} />
        </Route>
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
