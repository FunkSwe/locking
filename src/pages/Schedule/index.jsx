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
    <main className='w-screen h-full'>
      <section className='px-8 md:px-60 mb-40'>
        <AnimatedText text='Welcome!' className='' />
        <SlideInLeft>
          <p className='max-w-xl md:max-w-4xl pt-8 text-lg leading-7 md:text-xl'>
            We are excited to welcome everyone who will join us for Funkcamp
            Sweden 2025!
            <br />
            We’re proud to have the legendary Tony Gogo, OG Skeeter Rabbit (will
            have a lecture online during the camp), Prime, and Damon Frost.
            Sadly, the only one missing will be Dave Gregory "Campbellock Jr"
            Pope 🕊️.
            <br />
            In addition, we’re thrilled to have Manne Schütt who's been part of
            the camps since 2005 and Willow Evann from France, both key
            contributors to the camp.
            <br />
            Sammi-Jo from UK who's been dedicated to Locking for a long time,
            teaching and performing.
            <br />
            And last but not least one of Sweden’s finest, the Funk superhero 🔥
            Arvid Håkansson.
            <br />
            <br />
            While the schedule is still being finalized, the dates are set!
            Funkcamp 2025 will take place from April 17th to 20th in Stockholm,
            Sweden. Participants from around the world have already signed up,
            so don’t miss out! Join the experience by registering via email at
            funkcampswe@gmail.com or through the contact form on our website.
          </p>
        </SlideInLeft>
        <SlideInLeft>
          <p className='max-w-xl pt-8 text-lg leading-7 md:text-xl'>
            Schedule is not set, but dates are and time are! The camp will take
            place on 17th - 20th of April 2025, in Stockholm Sweden.
            <br />
            We already have participants from around the world. So if you wanna
            be part of the experience, <br />
            sign up at funkcampswe@gmail.com or thru the form on the contact
            page.
          </p>
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
