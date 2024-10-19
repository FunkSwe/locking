import styles from './parallaxzoom.module.scss';
import Picture1 from '@/assets/images/4.jpg';
import Picture2 from '@/assets/images/2005.png';
import Picture3 from '@/assets/images/2009.jpeg';
import Picture4 from '@/assets/images/greg_amine.jpg';
import Picture5 from '@/assets/images/orebro2022.jpeg';
import Picture6 from '@/assets/images/skeet2009.jpeg';
import Picture7 from '@/assets/images/2018_youngins.jpeg';
import { Img } from 'react-image';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef, useState } from 'react';

// Import the Lightbox components and styles
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ParallaxZoom2 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale5 },
    { src: Picture6, scale: scale8 },
    { src: Picture7, scale: scale9 },
  ];

  // Prepare slides for the lightbox
  const slides = pictures.map((picture) => ({
    src: picture.src.src,
    width: picture.src.width,
    height: picture.src.height,
  }));

  // State for lightbox functionality
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{
              scale,
              zIndex: pictures.length - index,
              pointerEvents: 'none',
            }}
            className={styles.el}
          >
            <div
              className={styles.imageContainer}
              onClick={() => openLightbox(index)}
              style={{ pointerEvents: 'auto' }}
            >
              <Img
                src={src}
                alt='image'
                loader={<div>Loading...</div>}
                unloader={<div>Failed to load image</div>}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Component */}
      {lightboxOpen && (
        <Lightbox
          slides={slides}
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentImageIndex}
          controller={{ closeOnBackdropClick: true }}
        />
      )}
    </div>
  );
};

export default ParallaxZoom2;
