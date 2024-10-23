import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import PageTransition from '@/components/PageTransition';
import ImageGallery from '@/components/image-gallery/ImageGallery';

const Media = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className='mt-20'>
      <h2 className='text-white text-7xl py-12 md:px-10 w-full text-center'>
        Media from the past
      </h2>
      <ImageGallery />
    </div>
  );
};

export default PageTransition(Media);
