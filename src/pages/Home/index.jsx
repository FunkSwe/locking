import { useEffect } from 'react';
import Hero from './Hero';
import Section from '@/components/Section';
import IMG from '/fc05/1.jpg';
import IMG2 from '/vitan01.jpg';
import IMG3 from '/fc07.jpg';
import IMG4 from '/fc09.jpg';
import IMG5 from '/fc15/1.jpg';
import IMG6 from '/doch.jpg';
import IMG7 from '/fc16.jpg';
import IMG8 from '/fc18.jpg';
import Lenis from '@studio-freight/lenis';
import PageTransition from '@/components/PageTransition';
import TeachersList from '@/components/teachers/TeachersList';
import { AnimatedText } from '@/components/animations/AnimatedText';
import { SlideInLeft } from '@/components/animations/reveal/SlideInLeft';
import Info from '@/components/info/Info';
import '../../index.scss';
import Button from '@/components/btn/Button';
import { HashLink } from 'react-router-hash-link';

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
    <main className='w-screen h-full'>
      {/*  <Hero /> */}
      <Hero />
      <section className='px-4 md:px-60 mb-40'>
        <AnimatedText text='Welcome!' className='' />
        <SlideInLeft>
          <p className='max-w-xl pt-8 text-lg leading-7 md:text-xl'>
            We are looking forward to meet all who will come and join the 2025
            camp.
            <br />
            Proud to say that we have 3/4 from the line up of funkcamp 2005. Og
            Skeeter Rabbit, Prime (Dj) & Damon Frost... only one missing is Dave
            Gregory "Campbellock Jr" Pope 🕊️ We also have Manne Schutt, Willow
            Evann who both have been a part of the camp since 2015.
            <br />
            We also have Manne Schutt, Willow Evann who both have been a part of
            the camp since 2015.
            <br />
            And one of Swedens finest - <br />
            The Funk super hero 🔥 Arvid Håkansson.
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
      <div className='py-10' id='teachers'></div>
      <section>
        <TeachersList />
      </section>
      {/* Teacher presentation goes here */}
      <section className='px-4 md:px-60 mb-40'>
        <div className='py-10 px-4 md:px-20'>
          <AnimatedText text='Blast from the past!' className='title' />
        </div>
        <Section
          image={IMG}
          title='2005'
          desc='Funkcamp 2005, first ever dance camp dedicated to Locking in Europe & Sweden. Not only first but first time Sweden had the honor to learn from two pioneers'
          tag='Danscenter Stockholm (Åsögatan)'
        />
        <Section
          image={IMG2}
          title='Super Jam'
          desc='Not a funkcamp but a collab with superjam bringing Campbellock Jr to teach and perform in Stockholm Sweden'
          tag='Vitabergsparken'
        />
        <Section
          image={IMG3}
          title='Funkcamp 2007'
          desc='Tony Gogo & Og Skeeter Rabbit sharing the GoGo brothers legacy. Connection between the party steps and locking.'
          tag='Bluehill'
        />
        <Section
          image={IMG4}
          title='Funkcamp 2009'
          desc='O.G Skeeter Rabbit at Danscenter Stockholm, and also visited Gothenburg and Borås'
          tag='Danscenter Stockholm (Åsögatan)'
        />
        <Section
          image={IMG5}
          title='Funkcamp 2015'
          desc='10th Anniversary, OG Skeeter Rabbit, Tony Gogo & Loose Caboose... The biggest camp til today'
          tag='Dansklotet'
        />
        <Section
          image={IMG6}
          title='Funkcamp 2015'
          desc='O.G Skeeter Rabbit, Tony Gogo & Loose Caboose teaching at the University of dance in Stockholm, DOCH.'
          tag='DOCH'
        />
        <Section
          image={IMG7}
          title='Funkcamp 2016'
          desc='Anthony Edwards, Damon Frost, LockSmith, Manne & Willow teaching at funkcamp 2016'
          tag='House of shapes'
        />
        <Section
          image={IMG8}
          title='Funkcamp 2018'
          desc='OG Skeeter Rabbit, Willow, Manne & Anthony teaching at funkcamp 2018'
          tag='Danscenter Fryshuset'
        />
      </section>
      <section className='px-4 md:px-60 mb-40 flex place-content-center items-center'>
        <SlideInLeft>
          <h3 className='max-w-xl pt-8 text-xl leading-7 md:text-xxl text-center'>
            You can check more images on the media page... enjoy
          </h3>
          <Button variant='primary'>
            <HashLink to='/funkcamp/media'>Media page</HashLink>
          </Button>
        </SlideInLeft>
      </section>
    </main>
  );
};

export default PageTransition(Home);
