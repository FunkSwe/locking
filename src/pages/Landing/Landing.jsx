import React, { useState } from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';

const Landing = () => {
  const [conLeft, setConLeft] = useState(false);
  const [conRight, setConRight] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleLeftMouseEnter = () => {
    setConLeft(true);
  };
  const handleLeftMouseLeave = () => {
    setConLeft(false);
  };
  const handleRightMouseEnter = () => {
    setConRight(true);
  };
  const handleRightMouseLeave = () => {
    setConRight(false);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <motion.div
      className='landing'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scaleX: 0, scaleY: 0 }}
      transition={{ duration: 1, staggerChildren: 2 }}
    >
      <div
        className={`container ${conLeft ? 'hover-left' : null} ${
          conRight ? 'hover-right' : null
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='split left'
          onMouseEnter={handleLeftMouseEnter}
          onMouseLeave={handleLeftMouseLeave}
        >
           <Logo />
          <h1 className='landing-headline'>20th anniversary</h1>
          <Link to='/funkcamp' className='btn'>
            Enter
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='split right'
          onMouseEnter={handleRightMouseEnter}
          onMouseLeave={handleRightMouseLeave}
        >
          <h1 className='landing-headline'>Locking.se</h1>
          <button
            /* href='/locking' */ className='btn'
            onClick={handleRightClick}
          >
            Enter
          </button>
        </motion.div>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Under Construction</h2>
            <p>The Locking.se page is currently under construction.</p>
            <button onClick={closePopup} className='close-btn'>
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Landing;
