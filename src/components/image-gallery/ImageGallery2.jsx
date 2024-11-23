import React, { useState, Suspense } from 'react';
import {
  RiCloseFill,
  RiArrowRightCircleLine,
  RiArrowLeftCircleLine,
} from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { Img } from 'react-image';
import LazyLoad from 'react-lazyload';

const images = [
  '/fc16/1.jpg',
  '/fc16/2.jpg',
  '/fc16/3.jpg',
  '/fc16/4.jpg',
  '/fc16/5.jpg',
  '/fc16/6.jpg',
  '/fc18/1.jpg',
  '/fc18/2.jpg',
  '/fc18/3.jpg',
  '/fc18/6.jpg',
  '/fc18/7.jpg',
  '/fc18/8.jpg',
  '/fc18/9.jpg',
  '/fc18/10.jpg',
  '/fc18/11.jpg',
  '/fc18/12.jpg',
  '/fc18/13.jpg',
  '/fc18/14.jpg',
  '/fc23/1.jpg',
  '/fc23/2.jpg',
  '/fc23/4.jpg',
  '/fc24/1.jpg',
  '/fc24/2.jpg',
  '/fc24/3.jpg',
  '/fc24/4.jpg',
  '/fc24/5.jpg',
  '/fc24/6.jpg',
  '/fc24/7.jpg',
];

const ImageGallery2 = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = async (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='p-8 md:p-40'>
      <h2 className='mb-16'>2016 and up -</h2>
      <div className='columns-2 sm:columns-2 md:columns-3 md:gap-8'>
        {images.map((image, index) => (
          <div key={index} className='mb-8 break-inside-avoid'>
            <LazyLoad height={200} offset={100}>
              <Img
                className='w-full cursor-pointer rounded-sm'
                alt={`Gallery ${index}`}
                src={image}
                loader={<div>Loading...</div>}
                unloader={<div>Failed to load image</div>}
                onClick={() => openLightbox(index)}
              />
            </LazyLoad>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className='fixed inset-0 bg-black flex items-center justify-center z-50'
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='fixed inset-0 z-0'
              style={{
                backgroundImage: `url(${images[selectedIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2,
                zIndex: -1,
              }}
            />

            {/* Close Button */}
            <button
              className='absolute bottom-4 right-8 text-white text-xl'
              onClick={closeLightbox}
            >
              <RiCloseFill />
            </button>

            {/* Previous Button */}
            <button
              className='absolute left-4 text-white text-3xl'
              onClick={showPrev}
            >
              <RiArrowLeftCircleLine />
            </button>

            {/* Next Button */}
            <button
              className='absolute right-4 text-white text-3xl'
              onClick={showNext}
            >
              <RiArrowRightCircleLine />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Img
                  src={images[selectedIndex]}
                  alt={`Gallery ${selectedIndex}`}
                  className='max-w-[80%] md:max-w-[60%] max-h-auto shadow-lg z-10 mx-auto'
                  loader={<div>Loading...</div>}
                  unloader={<div>Failed to load image</div>}
                />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery2;
