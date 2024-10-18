import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Media from './pages/Media';
import Tribute from './pages/Tribute';
import Teacher from './pages/butcher';
import Menu from './components/menu/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/media' element={<Media />} />
        <Route path='/tribute' element={<Tribute />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/teacher/:id' element={<Teacher />} />
      </Routes>
    </div>
  );
};

export default App;
