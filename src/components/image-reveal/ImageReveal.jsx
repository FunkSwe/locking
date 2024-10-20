import React, { useRef, useEffect, useState } from 'react';
import { gsap, Power2 } from 'gsap';
import styles from './imagereveal.module.scss';

const ImageReveal = ({ name, country, img }) => {
  console.log('ImageReveal props:', name, country, img);
  
  const image = useRef(null);
  const container = useRef(null);
  const overlayRef = useRef(null);
  const text = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false); // New state to track image loading

  useEffect(() => {
    if (imageLoaded && container.current && overlayRef.current && text.current) {
      const imageReveal = overlayRef.current;
      const tl = gsap.timeline();
      tl.to(container.current, { opacity: 1 });
      tl.to(imageReveal, {
        duration: 2,
        width: '0%',
        ease: Power2.easeInOut,
        delay: 1.8,
      });
      tl.from(image.current, {
        duration: 0.6,
        scale: 1.4,
        ease: Power2.easeInOut,
        delay: 0,
      });

      tl.fromTo(
        text.current,
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
          ease: Power2.easeInOut,
          delay: -1,
        }
      );

      // Clean up
      return () => {
        tl.kill();
      };
    } else {
      console.warn('One or more GSAP targets not found');
    }
  }, [imageLoaded, name, country, img]); // Only animate after image is loaded

  // Handler when the image is loaded
  const handleImageLoad = () => {
    setImageLoaded(true); // Set image loaded state to true
  };

  if (!name || !country || !img) {
    // If data is not available yet, return null or a loading indicator
    return <div>Loading... </div>;
  }

  const imagePath = `/teachers/${img}`;

  return (
    <div className={`${styles['image-reveal']}`}>
      <h2 ref={text}>{name}</h2>
      <div className={`${styles['container']}`} ref={container}>
        <div className={`${styles['overlay']}`} ref={overlayRef}>
          <p>{country}</p>
        </div>
        <div className={`${styles['image-container']}`}>
          {img && (
            <img
              ref={image}
              className='w-full h-full md:h-screen md:w-screen object-cover object-center'
              alt={name}
              src={imagePath}
              onLoad={handleImageLoad} // Ensure GSAP starts only after image loads
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageReveal;
