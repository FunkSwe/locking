import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './AnimatedText.module.scss';

const animation = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

// adding wrapper as a way to be able to add any element for text p - h1 etc
export const AnimatedText = ({ text, className, once }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  const splitTextToChars = (text) => {
    const chars = [];
    for (let i = 0; i < text.length; i++) {
      chars.push(text[i]);
    }
    return chars;
  };
  
  return (
    <div className={className}>
      <span className={styles['sr-only']}>{text}</span>
      <motion.span
        className={styles.text}
        ref={ref}
        aria-hidden
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1 }}
      >
        {splitTextToChars(text).map((char, i) => (
          <motion.span key={i} variants={animation} className={styles.span}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};
