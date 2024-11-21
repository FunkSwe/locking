import React from 'react';
import styles from './tribute.module.scss';
import Carousel from '@/components/carousel/Carousel';
import { cn } from '@/utils/classnames';
import { AnimatedText } from '@/components/animations/AnimatedText';

const Guests = () => {
  return (
    <div>
      <section>
        <h2 className='relative py-5 md:text-5xl text-2xl'>
          We give props and appriciate you sharing your knowledge and skills
          with us 🙏
        </h2>
        <p className='max-w-4xl pt-8 text-lg leading-7 md:text-xl'>
          Thank you to everyone who has come to share with the community and
          been a part of funkcamp. I will forever be greatful for all knowledge
          as will many others. You all have contributed with flavors with in the
          artform of Locking and the few Campbellockers who has kept Dons
          foundation close to their heart. Thank you!
              </p>
            
      </section>
    </div>
  );
};

export default Guests;
