import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
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
import Picture1 from '@/assets/images/2005.png';
import Picture2 from '@/assets/images/2.jpg';
import Picture3 from '@/assets/images/3.jpg';
import Picture4 from '@/assets/images/4.jpg';
import Picture5 from '@/assets/images/5.jpg';
import Picture6 from '@/assets/images/6.jpg';
import Picture7 from '@/assets/images/7.jpg';
import { Img } from 'react-image';

// Random images from Pexels
const randomImages = [
  'https://images.pexels.com/photos/34950/pexels-photo.jpg',
  'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg',
  'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
];

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
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
  ...randomImages,
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
            {/*  <img
              src={image}
              alt={`Gallery ${index}`}
              className="w-full cursor-pointer rounded-xl"
              onClick={() => openLightbox(index)}
            /> */}
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

      {selectedIndex !== null && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
          onClick={closeLightbox}
        >
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

          <Img
            src={images[selectedIndex]}
            alt={`Gallery ${selectedIndex}`}
            className='max-w-[90%] max-h-[90%]'
            loader={<div>Loading...</div>}
            unloader={<div>Failed to load image</div>}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
