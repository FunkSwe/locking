import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/btn/Button';
import video from '/videos/club.mp4';
import { HashLink } from 'react-router-hash-link';
import { AnimatedText } from '@/components/animations/AnimatedText';
import { cn } from '@/utils/classnames';
import styles from './Home.module.scss';

const Hero = () => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (isHovered) {
        videoElement.play();
      } else {
        videoElement.pause();
        videoElement.currentTime = 0; // Reset video when hover ends
      }
    }
  }, [isHovered]);

  return (
    <div className='relative w-full flex h-full mb-32 items-center justify-between gap-8 px-8 pt-[500px] md:pt-40 text-neutral-900 md:px-60 lg:pr-0'>
      <div>
        <h1 className={cn('text-[#B8A054]', styles.heroTitle)}>FUNKCAMP</h1>
        <AnimatedText
          text='20th anniversary'
          className={cn('text-[#eaeaea]')}
        />
        <p className='max-w-xl pt-8 text-lg leading-7 md:text-xl'>
          In 2025, we will celebrate the 20th anniversary of Funkcamp Sweden, a
          camp dedicated to the art form and culture of the street dance known
          as Locking, originally created by Don Campbell as Campbellock. This
          dance represents far more than just the moves that shape it. Locking
          is deeply rooted in an era that carried profound meaning, both in
          uniting people and confronting the divisions of the time. Over the
          years, this dance has touched many lives in countless ways, resonating
          with people on personal, cultural, and community levels.
        </p>
        <div className='flex flex-col items-start md:items-center justify-center md:justify-start gap-4 pt-12 md:flex-row md:gap-6'>
          <Button variant='secondary'>
            <HashLink to='/funkcamp/#info'>Info</HashLink>
          </Button>
          <Button variant='secondary'>
            <HashLink to='/funkcamp/#teachers'>Teachers</HashLink>
          </Button>
          <Button variant='outline'>
            <Link to='/funkcamp/contact'>Register</Link>
          </Button>
        </div>
      </div>

      <div
        className='absolute group overflow-hidden w-full h-60 sm:flex xl:max-w-xl md:w-full md:h-[420px]  drop-shadow-2xl md:rotate-12 pr-10 z-50 md:relative left-0 top-24 md:top-0 md:left-0 shadow-xl cursor-pointer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image shown by default */}
        <img
          className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0'
          src='/derbyhero.png'
          alt='Mavericks flats'
        />
        {/* Video controlled via useRef */}
        <video
          ref={videoRef}
          className='absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100'
          src={video}
          loop
          playsInline
          autoPlay
          controls
        />
      </div>
    </div>
  );
};

export default Hero;
