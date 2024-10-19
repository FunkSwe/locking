import { Link } from 'react-router-dom';
import Button from '@/components/btn/Button';
import heroImg from '@/assets/derbyhero.png';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <div className='relative w-full flex h-screen mb-32 items-center justify-between gap-8 px-28 pt-40 text-neutral-900 md:px-60 lg:pr-0'>
      <div>
        <h1 className='font-heading text-3xl font-bold md:text-5xl text-white'>
          OFFICIAL FUNKCAMP WEBSITE
        </h1>
        <p className='max-w-xl pt-8 text-lg leading-7 md:text-xl'>
          In 2025 we will celebrate the 20th anniversary of Funkcamp Sweden.
          This camp has been dedicated to the art-form & culture of a the street
          dance named Locking, orginally Campbellocking create by Don Campbell.
          It much more then moves that create the dances itself. The original
          dance style called locking has a deep roots within an era, which ment
          so much to the unity and the segregation of people
        </p>
        <div className='flex flex-col items-start md:items-center justify-center md:justify-start gap-4 pt-12 md:flex-row md:gap-6'>
          <Button variant='secondary'>
            <HashLink to='/#teachers'>Read more</HashLink>
          </Button>
          <Button variant='primary'>
            <Link to='/contact'>Register</Link>
          </Button>
        </div>
      </div>
      <img
        className='hidden xl:max-w-xl object-contain xl:block drop-shadow-2xl rotate-12 pr-10'
        src={heroImg}
        alt='Mavericks flats'
      />
    </div>
  );
};

export default Hero;
