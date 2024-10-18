import { motion } from 'framer-motion';
import './page-loader.scss';

const calculateBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.05;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const PageTransition = (WrappedComponent) => {
  return (props) => (
    <div>
      {/* Pass props to WrappedComponent */}
      <WrappedComponent {...props} />

      {/* Page loader */}
      <div className='page-loader transition-in'>
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className='row' key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className='block'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scale: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateBlockDelay(rowIndex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Optional transition out */}
      <div className='page-loader transition-out'>
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className='row' key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className='block'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scale: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateBlockDelay(rowIndex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageTransition;
