import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/animations/Animations';
import CTA from './CTA';
import WordSpinner from '../WordSpinner';
import IMG from '/locking.jpg';
import { Img } from 'react-image';
import { cn } from '@/utils/classnames';
import { Link } from 'react-router-dom';

const Spinner = () => {
  const words = ['Foundation', 'Culture', 'History', 'Purpose'];
  return (
    <div className='lg:mt-40 mt-10 text-3xl xl:text-7xl md:text-5xl p-4 rounded-md transition-all duration-500 ease-in-out'>
      <div className='w-full flex flex-col justify-center items-center'>
        <h2
          className={cn(
            'text-aubergine-500 drop-shadow-md text-white whitespace-nowrap text-center'
          )}
        >
          The artform of locking
        </h2>
        <div className='pl-3 sticky drop-shadow-md'>
          <WordSpinner words={words} />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [contentVisible, setContentVisible] = useState(true);
  const videoRef = useRef < HTMLVideoElement > null;

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handlePlay = () => {
        setContentVisible(false);
      };

      const handlePause = () => {
        setContentVisible(true);
      };

      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);

      return () => {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      };
    }
  }, [videoRef]);

  return (
    <motion.section
      className='relative h-[100vh] w-full flex flex-col justify-center'
      variants={fadeIn}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <div className='absolute inset-0 -z-10 pointer-events-auto'>
        <div className='absolute inset-0 bg-black/30 z-10 pointer-events-none object-cover'></div>
        {/*  <video
          className='h-screen w-full pointer-events-auto cursor-pointer'
          ref={videoRef}
          autoPlay
          loop
          controls
          src='/videos/club.mp4'
        ></video> */}
        <Img
          style={{ width: '100%', height: '100%', opacity: 0.4 }}
          src={IMG}
          alt='image'
          loader={<div>Loading...</div>}
          unloader={<div>Failed to load image</div>}
        />
      </div>
      {/* when pushing play this part under should be opacity 0 fix */}
      {contentVisible && (
        <div
          className={`w-screen h-screen z-50 grid place-content-center py-20 transition-opacity duration-500 pointer-events-none relative`}
        >
          <div className='absolute inset-0 bg-black/80 z-10 pointer-events-none object-cover'></div>
          <motion.h1
            variants={fadeIn}
            initial='initial'
            animate='enter'
            exit='exit'
            className={cn(
              `text-center pt-20 lg:top-20 lg:w-full text-2xl md:text-5xl lg:text-7xl text-white lg:mt-20 mt-6 mb-4 p-4 rounded-md duration-500 pointer-events-none text-shadow-lg font-alt`
            )}
          >
            From Campbellocking to Locking
          </motion.h1>
          <h2 className='text-center text-2xl md:text-6xl z-10'>
            Coming soon... Under construction
          </h2>
          <Spinner />
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='w-full max-h-fit text-sm md:text-xl text-center leading-loose text-slate-200 drop-shadow-l z-10 relative font-primary rounded-md transition-opacity duration-500 pointer-events-none p-4 font-base'
          >
            Swedens first website dedicated to the artform of locking
          </motion.p>
          <Link
            to='/funkcamp'
            className='z-50 text-4xl border-gray-100 border-4 w-fit py-4 px-6 place-self-center rounded-md bg-black cursor-pointer pointer-events-auto hover:bg-orange-700'
          >
            Go to Funkcamp
          </Link>
          <motion.div
            className='pointer-events-auto'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <CTA />
          </motion.div>
        </div>
      )}
      {!contentVisible && (
        <>
          <div className='absolute top-32 left-8 text-xl font-branding  drop-shadow-xl transition-opacity duration-500 pointer-events-none text-gray-500'>
            <h2>Royal Nelson Orchesta at Fasching</h2>
          </div>
          <div className='absolute bottom-20 right-8 text-2xl font-semibold font-branding  drop-shadow-xl transition-opacity duration-500 pointer-events-none text-gray-400'>
            <h2>The Gogo Brothers & Willow</h2>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Hero;
