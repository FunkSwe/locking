import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import styles from './pageloader.module.scss';

const containerVariants = {
  initial: {
    clipPath: `inset(0% 0 0% 0)`,
  },
  hide: {
    clipPath: `inset(0% 0 100% 0)`,
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.1 },
  },
  none: {
    display: 'none',
  },
};

const charVariants = {
  initial: (index) => ({
    x: index % 2 === 0 ? '80%' : '-80%',
    opacity: 0,
  }),
  step1: (delay) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: delay * 0.05,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  }),
  step2: (delay) => ({
    y: -300,
    opacity: 0,
    transition: {
      delay: delay * 0.05,
      duration: 0.55,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  }),
};

const PageLoader = ({ setLoading, title }) => {
  const chars = title ? title.split('') : [];
  const textControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    if (!title) {
      return; // Early return if title is not available
    }

    async function sequence() {
      await textControls.start('step1');
      await textControls.start('step2');
      setLoading(false);
      await containerControls.start('hide');
      await containerControls.start('none');
    }

    sequence();
  }, [textControls, containerControls, setLoading, title]);

  return (
    <motion.div
      className={`${styles['home-loader-wrapper']}`}
      variants={containerVariants}
      initial={'initial'}
      animate={containerControls}
    >
      <div className={`${styles['home-loader-text']}`}>
        {chars.map((char, index) => (
          <motion.div
            className='font-alt'
            key={index}
            custom={index}
            animate={textControls}
            variants={charVariants}
            initial={'initial'}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PageLoader;
