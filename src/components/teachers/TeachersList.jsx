import React from 'react';
import styles from './teachersList.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

import Img1 from '/src/assets/teachers/1.png';
import Img2 from '/src/assets/teachers/2.png';
import Img3 from '/src/assets/teachers/3.png';
import Img4 from '/src/assets/teachers/4.png';
import Img5 from '/src/assets/teachers/5.png';
import Img6 from '/src/assets/teachers/6.png';
import ToolT from '../tooltip/ToolT';
import Teacher from './Teacher';

const teacherData = [
  {
    name: 'OG Skeeter Rabbit',
    title: 'Super Powers',
    description:
      'Style and Grace - Attitude- Perfectionist, Stunts, Trix, Show stopping moves',
    image: Img1,
    id: 1,
  },
  {
    name: 'Willow Evann',
    title: 'Super Powers',
    description:
      'Pure Funk - Character - Grooves, Playfullness, Sooouuul brotha no.1',
    image: Img2,
    id: 2,
  },
  {
    name: 'Damon Frost',
    title: 'Super Powers',
    description: 'Style and Grace - Attitude - Maturity, Fierce, Powerful',
    image: Img3,
    id: 3,
  },
  {
    name: 'Funky Asparagus',
    title: 'Super Powers',
    description:
      'Pure Funk - Attitude - Unique, powerful, playfullness, perfectionism',
    image: Img4,
    id: 4,
  },
  {
    name: 'Prime',
    title: 'Super Powers',
    description:
      'Character - Style and Grace - Flawless technique, precision, stunts, fundamentals',
    image: Img5,
    id: 5,
  },
  {
    name: 'Arvidos',
    title: 'Super Powers',
    description:
      'Character - Style and Grace - Flawless technique, precision, stunts, fundamentals',
    image: Img6,
    id: 6,
  },
];

const TeachersList = () => {
  const desktop = useMediaQuery(768);
  return (
    <div className={styles.teachers_wrapper} id='teachers'>
      <motion.h1
        className={`${styles.teachers_title}`}
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          width: '100%',
        }}
        transition={{ duration: 0.8, delay: 1.6, ease: 'easeInOut' }}
      >
        TEACHERS 2025
      </motion.h1>
      <motion.p
        className={styles.desc}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1.2, delay: 2, ease: 'easeInOut' }}
      >
        We are proud to have this great line up, and 3/4 teachers from funkcamp
        2005
      </motion.p>
      <div className={styles.tooltip_wrapper}>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Style and Grace - Attitude- Perfectionist, Stunts, Trix, Show stopping moves'
          >
            <p>OG Skeeter Rabbit</p>
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Pure Funk - Character - Grooves, Playfullness, Sooouuul brotha no.1'
          >
            <p>Willow Evann</p>
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Attitude - Style and Grace - Maturity, Fierce, Powerful impact on the scene'
          >
            <p>Damon Frost</p>
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Pure Funk - Attitude - Unique, powerful, playfullness, perfectionism'
          >
            <p>Funky Asparagus</p>
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Character - Style and Grace - Flawless technique, precision, stunts, fundamentals'
          >
            <p>Prime</p>
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Character - Style and Grace - Flawless technique, precision, stunts, fundamentals'
          >
            <p>Arvidos</p>
          </ToolT>
        </div>
      </div>
      <motion.div className={styles.teachers_images}>
        {teacherData.map(({ id, image, name }) => (
          <Teacher key={id} id={id} name={name} image={image} />
        ))}
      </motion.div>
      {/*    <motion.div
        className={styles.img_1}
        initial={{
          opacity: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '30vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 2}></Link>
        <Image
          className={styles.img}
          src={Img1}
          alt='patrick'
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: '-1',
          }}
          priority
        />
      </motion.div>

      <motion.div
        className={styles.img_1}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '30vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2.2, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 4}></Link>
        <Image
          className={styles.img}
          src={Img3}
          alt='willow'
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: '-1',
          }}
          priority
        />
      </motion.div>
      <motion.div
        className={styles.img_1}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '25vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2.2, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 3}></Link>
        <Image
          className={styles.img}
          src={Img4}
          alt='charlie'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: '-1',
          }}
          priority
        />
      </motion.div>

      <motion.div
        className={styles.img_1}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '30vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2.2, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 5}></Link>
        <Image
          className={styles.img}
          src={Img5}
          alt='atrain'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: '1',
          }}
          priority
        />
      </motion.div>
      <motion.div
        className={styles.img_1}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '30vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2.4, ease: 'easeInOut' }}
      >
        {' '}
        <Link href={'/teacher/' + 1}></Link>
        <Image
          className={styles.img}
          src={Img2}
          alt='manny'
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: '1',
          }}
          priority
        />
      </motion.div> */}
    </div>
  );
};

export default TeachersList;
