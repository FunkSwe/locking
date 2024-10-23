import React, { useState } from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
  const [conLeft, setConLeft] = useState(false);
  const [conRight, setConRight] = useState(false);

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
         {/*  <img src='/FcLogo.png' alt='' className='w-full h-full z-10' /> */}
          <h1 className='landing-headline'>Funkcamp</h1>
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
         {/*  <img src='/locking.jpg' alt='' className='w-full h-full z-10' /> */}
          <h1 className='landing-headline'>Locking.se</h1>
          <Link to='/locking' className='btn'>
            Enter
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
