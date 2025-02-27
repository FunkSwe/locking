import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Media from './pages/Media';
import Tribute from './pages/Tribute';
import Teacher from './pages/Teacher';
import FunkCampMenu from './components/funkcampmenu';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ScrollToTop from './utils/ScrollToTop';
import Landing from './pages/Landing/Landing';
import LockingHome from './pages/locking/Home';
import HistoryPage from './pages/locking/history-page';
import LockingMenu from './components/LockingMenu';
import Item from './pages/item/Item';
import Schedule from './pages/Schedule';

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
        <Route path='/funkcamp/schedule' element={<Schedule />} />
        <Route path='/funkcamp/about' element={<About />} />
        <Route path='/funkcamp/media' element={<Media />} />
        <Route path='/funkcamp/tribute' element={<Tribute />} />
        <Route path='/funkcamp/contact' element={<Contact />} />
        <Route path='/funkcamp/teacher/:id' element={<Teacher />} />
        <Route path='/funkcamp/tribute/:id' element={<Item />} />
        <Route path='*' element={<PageNotFound />} />

        {/* Locking routes */}
        <Route path='/locking' element={<LockingHome />} />
        <Route path='/locking/historia' element={<HistoryPage />} />
      </Routes>
    </>
  );
};

export default App;
