import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { guestsData } from '@/assets/data/guestsList';
import styles from './Item.module.scss';

const easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { delay: 0.4, duration: 0.3, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

async function getGuest(id) {
  const foundGuest = guestsData.find((g) => id === g.id);

  if (foundGuest) {
    return foundGuest;
  } else {
    throw new Error('Shoe not found'); // You can customize the error message as needed
  }
}

// Usage example:
const idToFind = ''; // Replace with the ID you want to search for
getGuest(idToFind)
  .then((guest) => {
    console.log('Found Shoe:', guest);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

const Item = () => {
  const { id } = useParams();
  const safeId = id ?? 'defaultId';
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const guestData = await getGuest(safeId); // Pass safeId to getShoe
        setGuest(guestData);
      } catch (error) {
        console.error('Error fetching shoe data:', error);
      }
    };

    fetchData();
  }, [safeId]);

  if (!guest) {
    // returning a loading component fi not data
    return <div>Loading...</div>;
  }

  const { name, details, steps, image } = guest;

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <div className={styles.wrapper}>
        <Link to='/funkcamp/tribute'>
          <motion.span
            initial={{ x: -1000, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a className={styles.go_back}>Go Back</a>
          </motion.span>
        </Link>

        <div className={styles.card}>
          <motion.div
            className={styles.img}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <motion.img
              key={id}
              src={`../../${image}`}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -400, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
          <div className={styles.details}>
            <motion.div variants={stagger} className={styles.inner}>
              <motion.div variants={fadeInUp}>
                <span className={styles.title}>Teacher: {name}</span>
              </motion.div>
              <motion.h1 variants={fadeInUp}>{name}</motion.h1>
              <motion.p variants={fadeInUp}>{details}</motion.p>
              <motion.div variants={fadeInUp} className={styles.additionals}>
                <span>Short description: </span>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <span className={styles.steps}>{steps}</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
