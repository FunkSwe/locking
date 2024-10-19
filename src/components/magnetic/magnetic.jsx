import React, { useState } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const Magnetic = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = React.useRef(null);

  const mouseMove = (e) => {
    if (ref.current) {
      const cRef = ref.current;
      const { clientX, clientY } = e;
      const rect = cRef.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      setMousePos({ x, y });
    } else return;
  };

  const mouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const { x, y } = mousePos;

  return (
    <motion.span
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {children}
    </motion.span>
  );
};

export default Magnetic;
