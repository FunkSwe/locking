import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './tribute.module.scss';
/* import Carousel from '@/components/carousel/Carousel';
import { cn } from '@/utils/classnames';
import { AnimatedText } from '@/components/animations/AnimatedText'; */
import { guestsData } from '@/assets/data/guestsList';

const easing = [0.5, -0.06, 0.03, 0.97];

const fadeInUp = {
  initial: {
    y: 70,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  exit: {
    y: -600,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Guests = () => {
  return (
    <div>
      <section className='px-8 md:px-60 mb-40'>
        <h2 className='relative py-5 md:text-5xl text-2xl'>
          We give props and appriciate you sharing your knowledge and skills
          with us 🙏
        </h2>
        <p className='max-w-4xl pt-8 text-lg leading-7 md:text-xl'>
          Thank you to everyone who has come to share with the community and
          been a part of funkcamp. I will forever be greatful for all knowledge
          as will many others. You all have contributed with flavors with in the
          artform of Locking and the few Campbellockers who has kept Dons
          foundation close to their heart. Thank you!
        </p>
        <motion.div variants={stagger} className={styles.row}>
          {guestsData.map(({ name, image, steps, id }) => (
            <Link key={id} to={`${id}`}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.card}
              >
                <span className={styles.row_headline}>{name}</span>
                <motion.img
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  key={image}
                  src={image}
                  width={250}
                />
                <div className={styles.info}>
                  <span>{steps}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        <p className='max-w-4xl pt-8 text-lg leading-7 md:text-xl'>
          more coming soon...
        </p>
      </section>
    </div>
  );
};

export default Guests;
