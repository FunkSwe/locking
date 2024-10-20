import { useScroll, useTransform, motion } from 'framer-motion';
import { Img } from 'react-image';
import React, { useRef } from 'react';

const Section = ({ image, title, desc, tag }) => {
  /*  console.log(image); */
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  return (
    <section
      className='relative md:h-screen overflow-hidden border-solid lg:border-[80px] border-transparent border-[16px]'
      ref={secRef}
    >
      <motion.div className='absolute h-[60%] md:h-[120%] w-full ' style={{ top: y }}>
        <div className='absolute inset-0 bg-transparent z-100'></div>
        <Img
          className='w-100 h-fit min-h-80 md:h-screen md:w-screen object-cover object-center'
          alt={title}
          src={image}
          loader={<div>Loading...</div>}
          unloader={<div>Failed to load image</div>}
        />
      </motion.div>
      <div className='flex flex-col gap-4 lg:p-24 p-12 mt-10 md:mt-20 max-w-fit text-white sm:p-8'>
        <span className='uppercase text-xs drop-shadow-xl text-white'>
          {tag}
        </span>
        <h2 className='font-branding text-4xl drop-shadow-md text-white bg-black/60 w-fit p-1 rounded-md'>
          {title}
        </h2>
        <p className='font-primary max-w-[50ch] drop-shadow-xl text-white'>
          {desc}
        </p>
      </div>
    </section>
  );
};

export default Section;
