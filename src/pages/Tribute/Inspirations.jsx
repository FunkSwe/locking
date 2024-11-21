import React from 'react';
import styles from './tribute.module.scss';
import { cn } from '@/utils/classnames';
import { AnimatedText } from '@/components/animations/AnimatedText';
import Carousel from '@/components/carousel/Carousel';

const Inspirations = () => {
  return (
    <div>
      <section>
        <h2 className='relative py-5 md:text-5xl text-2xl'>
          Thanks for inpiring me thru the years!
        </h2>
        <p className='max-w-3xl pt-4 text-lg leading-7 md:text-xl'>
          This one is for all my inspirations thru the years in all my dancing{' '}
          <br />
          <br /> First and foremost my big sister{' '}
          <span className='text-[#B8A054]'>Yasmina "Yazu" Tanttu</span> my big
          brother <span className='text-[#B8A054]'>Samir Tanttu</span> <br />
          They got me started with dancing and was teaching me my first moves.
          <br />
          Later 4 brothers that inspired me and we started going out to clubs +
          My big bro! <br />
          <span className='text-[#B8A054]'>Aziz Rhassane</span> probably would
          have been the best hiphop dances in Sweden if he continued
          <br />
          <span className='text-[#B8A054]'>Kambiz Jabbari</span> the club head
          number one, always on the positive side!
          <br />
          <span className='text-[#B8A054]'>Alvaro Aguilera</span> who was driven
          by his passion for technique in dance and yes Tech
          <br />
          <span className='text-[#B8A054]'>Carlos Cubillan</span> The bboy with
          more flava then any other! My Brother!
          <br />
          <br />
          <h2>Some of them visually presented! ↓↓↓</h2>
          <Carousel />
          Later the hole 9 Degrees family from Rinkeby! But two special ones
          <br />
          <span className='text-[#B8A054]'>Gabriel Moraga </span>- Who was the
          teachers and choreographer
          <br />
          <span className='text-[#B8A054]'>Volkan Akyuz </span>- Who became my
          partner and duo for some years
          <br />
          And there is many who been inspiring my dancing thru the years...
          Danne Grunden, Jasper Felder, Patrik Helge, Damon Frost, Be-bop, Mark
          Allyn, Brian Green, Which-way Sha, All Locking pioneers
        </p>
      </section>
    </div>
  );
};

export default Inspirations;
