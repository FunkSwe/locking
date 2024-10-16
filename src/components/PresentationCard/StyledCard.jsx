import { motion, AnimatePresence } from 'framer-motion';
import styles from './StyledCard.module.scss';

const StyledCard = ({ title, mainTitle, narrator, itemPng }) => {
  return (
    <div className={styles.styledCard}>
      <h3>{title}</h3>
      <h1>{mainTitle}</h1>
      <div className={styles.buttons}>
        <button id='downloadBtn'>Download</button>
        <button>Play</button>
      </div>
      <p>
        narrated by <br />
        {narrator}
      </p>
      <AnimatePresence>
        <motion.div
          className={styles.pngImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image src={itemPng} alt='Chameleon Image' layout='fill' />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StyledCard;
