import { useEffect } from 'react';
import Hero from './Hero';
import Section from '@/components/Section';
import IMG from '@/assets/images/asa2022.jpeg';
import IMG2 from '@/assets/images/2009.jpeg';
import IMG3 from '@/assets/images/2005.png';
import IMG4 from '@/assets/images/2018_panel.jpg';
import Lenis from '@studio-freight/lenis';
import PageTransition from '@/components/PageTransition';
import TeachersList from '@/components/teachers/TeachersList';
import { AnimatedText } from '@/components/animations/AnimatedText';

const firstText =
  "Next year marks the 20th anniversary of Funkcamp. The goal has always been to connect the pioneers of locking with the younger generation. When I started, it was about learning from those who lived the dance, the culture, all of it. At the same time, I wanted to give the youth in Sweden the chance to gain the same knowledge, to raise the level of dancers here by inviting pioneers to teach and build connections between generations. It's been an incredible experience, and next year will also be the last Funkcamp. What the future holds, no one knows, but the young generation needs to pick up the torch, respect the old, and push the scene forward.";

const secondText =
  "Funkcamp started in 2005, as the first camp in Sweden and Europe dedicated to locking. The journey began with my involvement in a kids' show where I wanted to introduce street styles, and from there, the idea of Funkcamp was born, with the help of OG Skeeter Rabbit and Greg Campbellock Jr. We set the plans in motion to create a space for the next generation to learn directly from the source.";

const fourtText =
  "Over the past 20 years, the camp has been a bridge for many younger dancers, igniting their passion. Without the support of OG Skeeter Rabbit, TONY GOGO, and Greg Campbellock Jr (R.I.P), Funkcamp would not have existed. I'm deeply honored by their continued support and the brotherhood we've built. Special thanks go to Manne Schutt, Amine Baraka, and Willow for their vital roles in making the camp a success";

const fifthText =
  "The past two decades have been remarkable, and we've been lucky to have teachers like Damon Frost, Patrik \"PRIME\" Helge, Loose Caboose, Lock Smith, and Anthony Edwards share their passion with us. The camp's legacy now lives on under the roof of Fryshuset, where we've hosted the past few camps. We look forward to celebrating the 20th anniversary in 2025, with more great guests and unforgettable moments.";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className='w-screen h-full p-10'>
      {/*  <Hero /> */}
      <Hero />
      <section className='section'>
        <AnimatedText text='Welcome!' className='title' />
      </section>
      <div id='teachers'>
        <TeachersList />
      </div>
      {/* Teacher presentation goes here */}
      <Section
        image={IMG}
        title='Funkcamp at Åsafolkhögkola'
        desc='Tony Gogo visiting åsa folkhögskola 2022. In 2022 we decided to go visit the school in the woods and give the studens a chance to learn from a pioneer. '
        tag='Camp'
      />
      <Section
        image={IMG2}
        title='Funkcamp 2009'
        desc='O.G Skeeter Rabbit and the Soul Sweat crew'
        tag='Camp'
      />
      <Section
        image={IMG3}
        title='Funkcamp 2005'
        desc='The first funkcamp in 2005, first time the pioneers from the US came and shared their history and the foundations, artform of locking. Greg "Campellock Jr" Pope and O.G Skeeter Rabbit'
        tag='camp'
      />
      <Section
        image={IMG4}
        title='Funkcamp 2018'
        desc='O.G Skeeter Rabbit, Damon Frost and Anthony Edwards, Q & A`s at the Funkcamp, sharing their knowledge, differences and similarities. Deep talks about the culture, the dance and how to preserve the history and move forwards'
        tag='camp'
      />
    </main>
  );
};

export default PageTransition(Home);
