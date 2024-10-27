import React, { useState } from 'react';
import {
  RiCloseFill,
  RiArrowRightCircleLine,
  RiArrowLeftCircleLine,
} from 'react-icons/ri';
import Img1 from '/fc05/1.jpg';
import Img2 from '/fc05/2.jpg';
import Img3 from '/fc05/3.jpg';
import Img4 from '/fc05/4.jpg';
import Img5 from '/fc05/5.jpg';
import Img6 from '/fc05/6.jpg';
import Img7 from '/fc05/7.jpg';
import Img8 from '/fc05/8.jpg';
import Img_61 from '/fc06/1.jpg';
import Img_62 from '/fc06/2.jpg';
import Img_63 from '/fc06/3.jpg';
import Img_151 from '/fc15/1.jpg';
import Img_152 from '/fc15/2.jpg';
import Img_153 from '/fc15/3.jpg';
import Img_181 from '/fc18/1.jpg';
import Img_182 from '/fc18/2.jpg';
import Img_183 from '/fc18/3.jpg';
import Img_231 from '/fc23/1.jpg';
import Img_232 from '/fc23/2.jpg';
import Img_233 from '/fc23/4.jpg';
import Img_241 from '/fc24/1.jpg';
import Img_242 from '/fc24/6.jpg';
import Img_243 from '/fc24/7.jpg';
import { Img } from 'react-image';
import { motion, AnimatePresence } from 'framer-motion';

// Random images from Pexels
/* const randomImages = [
  'https://images.pexels.com/photos/34950/pexels-photo.jpg',
  'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg',
  'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
]; */

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img_61,
  Img_62,
  Img_63,
  Img_151,
  Img_152,
  Img_153,
  Img_181,
  Img_182,
  Img_183,
  Img_231,
  Img_232,
  Img_233,
  Img_241,
  Img_242,
  Img_243,
  /*  ...randomImages, */
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
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
      <div className='columns-2 sm:columns-2 md:columns-3 md:gap-8'>
        {images.map((image, index) => (
          <div key={index} className='mb-8 break-inside-avoid'>
            <Img
              className='w-full cursor-pointer rounded-sm'
              alt={`Gallery ${index}`}
              src={image}
              loader={<div>Loading...</div>}
              unloader={<div>Failed to load image</div>}
              onClick={() => openLightbox(index)}
            />
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
              <Img
                src={images[selectedIndex]}
                alt={`Gallery ${selectedIndex}`}
                className='max-w-[80%] md:max-w-[60%] max-h-auto shadow-lg z-10 mx-auto'
                loader={<div>Loading...</div>}
                unloader={<div>Failed to load image</div>}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
