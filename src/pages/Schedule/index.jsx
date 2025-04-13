import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import PageTransition from '@/components/PageTransition';
import { AnimatedText } from '@/components/animations/AnimatedText';
import { SlideInLeft } from '@/components/animations/reveal/SlideInLeft';
import Info from '@/components/info/Info';
import '../../index.scss';

const firstText =
  "Next year marks the 20th anniversary of Funkcamp. The goal has always been to connect the pioneers of locking with the younger generation. When I started, it was about learning from those who lived the dance, the culture, all of it. At the same time, I wanted to give the youth in Sweden the chance to gain the same knowledge, to raise the level of dancers here by inviting pioneers to teach and build connections between generations. It's been an incredible experience, and next year will also be the last Funkcamp. What the future holds, no one knows, but the young generation needs to pick up the torch, respect the old, and push the scene forward.";

const secondText =
  "Funkcamp started in 2005, as the first camp in Sweden and Europe dedicated to locking. The journey began with my involvement in a kids' show where I wanted to introduce street styles, and from there, the idea of Funkcamp was born, with the help of OG Skeeter Rabbit and Greg Campbellock Jr. We set the plans in motion to create a space for the next generation to learn directly from the source.";

const fourtText =
  "Over the past 20 years, the camp has been a bridge for many younger dancers, igniting their passion. Without the support of OG Skeeter Rabbit, TONY GOGO, and Greg Campbellock Jr (R.I.P), Funkcamp would not have existed. I'm deeply honored by their continued support and the brotherhood we've built. Special thanks go to Manne Schutt, Amine Baraka, and Willow for their vital roles in making the camp a success";

const fifthText =
  "The past two decades have been remarkable, and we've been lucky to have teachers like Damon Frost, Patrik \"PRIME\" Helge, Loose Caboose, Lock Smith, and Anthony Edwards share their passion with us. The camp's legacy now lives on under the roof of Fryshuset, where we've hosted the past few camps. We look forward to celebrating the 20th anniversary in 2025, with more great guests and unforgettable moments.";

const Schedule = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className='w-screen h-full pt-60'>
      <section className='px-8 md:px-60 mb-10'>
        <AnimatedText text='Schedule!' className='' />
        <SlideInLeft>
          <p className='max-w-xl text-lg leading-7 md:text-xl'>
            Schedule is set - changes might happen be on the look out!
          </p>
          <p>
            The camp will be split in to 2 groups thursday and friday <br />3
            groups saturday and sunday
          </p>
          <p>
            You will get the info on your email (if a parent has registered you
            then thru them)
          </p>
          <p>Camp registration starts thursday 15.30 at venue: SKH</p>
        </SlideInLeft>
      </section>
      <div className='py-10' id='info'></div>
      <section className='px-4 md:px-60 mb-40'>
        <Info />
      </section>
    </main>
  );
};

export default PageTransition(Schedule);
