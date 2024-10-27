import { Link } from 'react-router-dom';
import Button from '@/components/btn/Button';
import heroImg from '/derbyhero.png';
import { HashLink } from 'react-router-hash-link';
import { AnimatedText } from '@/components/animations/AnimatedText';
import { cn } from '@/utils/classnames';
import styles from './Home.module.scss';

const Hero = () => {
  return (
    <div className='relative w-full flex h-screen mb-32 items-center justify-between gap-8 px-4 pt-40 text-neutral-900 md:px-60 lg:pr-0'>
      <div>
        {/*  <h1 className='font-heading text-3xl font-bold md:text-5xl text-white'> */}
        <h1 className={cn('text-[#B8A054]', styles.heroTitle)}>FUNKCAMP</h1>
        <AnimatedText
          text='20th anniversary'
          className={cn('text-[#eaeaea]')}
        />
        {/* </h1> */}
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
      <img
        className='hidden xl:max-w-xl object-contain md:block drop-shadow-2xl rotate-12 pr-10 z-50'
        src='/derbyhero.png'
        alt='Mavericks flats'
      />
    </div>
  );
};

export default Hero;
