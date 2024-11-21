import React from 'react';
import styles from './tribute.module.scss';
import { cn } from '@/utils/classnames';
import { AnimatedText } from '@/components/animations/AnimatedText';
import PresentationCard from '@/components/PresentationCard';

const InHeaven = () => {
  return (
    <div>
      <section>
        <h2 className='relative py-5 md:text-5xl text-2xl'>
          We&apos;ll meet at the Lockers Lake 🕊️
        </h2>
        <p className='max-w-3xl pt-4 text-lg leading-7 md:text-xl'>
          Giving props to the lockers who passed and brought joy to our lives
          with their moves, steps, character. <br />
          <br /> Your contributions will live on for ever in our hearts and
          bodies. From the first steps and moves of{' '}
          <span className='text-[#B8A054]'>Don Campbellock Campbell,</span> to
          the structure build by many others and passed on by{' '}
          <span className='text-[#B8A054]'>
            Dave Gregory "Campbellock Jr" Pope
          </span>{' '}
          & and all other legends that has contributed. WE give thanks
        </p>
      </section>
      <section className='relative w-full h-full flex justify-center items-center mb-20'>
        <PresentationCard />
      </section>
    </div>
  );
};

export default InHeaven;
