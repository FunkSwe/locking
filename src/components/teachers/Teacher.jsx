import React from 'react';
import { motion } from 'framer-motion';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import styles from './teacher.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Teacher = ({ id, name, image }) => {
  const desktop = useMediaQuery(768);
  return (
    <motion.div
      // plock 2
      className={styles.teacher}
      initial={{
        x: 0,
        opacity: 0,
        /* width: desktop ? '100vw' : '20vw',
        height: desktop ? '50vh' : '50vh', */
      }}
      animate={{
        x: 0,
        opacity: 1,
        /*  width: desktop ? '100vw' : '20vw',
        height: desktop ? '50vh' : '50vh', */
      }}
      transition={{ duration: 0.4, delay: 2, ease: 'easeInOut' }}
    >
      <Link to={'/funkcamp/teacher/' + id}></Link>
      <Img
        className={styles.img}
        alt={name}
        src={image}
        loader={<div>Loading...</div>}
        unloader={<div>Failed to load image</div>}
      />
      <p>{name}</p>
    </motion.div>
  );
};

export default Teacher;
