import PresentationCard from '@/components/PresentationCard';
import React from 'react';
import styles from './respect.module.scss';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/utils/classnames';

const Tribute = () => {
  return (
    <div className={cn(styles.respect, 'mt-40 md:mt-60 mb-20 min-h-screen')}>
      <section>
        <p>
          Thank you for everything you given us, to inspire us and bring joy to
          our lives, the dances, steps and moves you created will live on for
          ever in our hearts. From the first steps and moves of Don Campbellock
          Campbell, to the structure build by many others and passed on by
          Gregory Pope "Campbellock Jr" Pope & and all other legends that has
          contributed. WE give thanks
        </p>
        <h2 className='relative md:py-10 py-5 md:text-7xl text-2xl'>
          We&apos;ll meet at the Lockers Lake 🕊️
        </h2>
      </section>
      <section className='relative w-full h-full flex justify-center items-center mb-20'>
        <PresentationCard />
      </section>
      <section>
        <p>
          Also thank you to everyone who has come to share with the community
          and been a part of funkcamp. I will forever be greatful for all
          knowledge as will many others. You all have contributed with flavors
          with in the artform of Locking and the few Campbellockers who has kept
          Dons foundation close to their heart. Thank you!
        </p>
      </section>
      <section></section>
    </div>
  );
};

export default PageTransition(Tribute);
