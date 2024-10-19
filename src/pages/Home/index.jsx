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
      <div id='teachers'>
        <TeachersList />
      </div>
      {/*   <img src={IMG} alt="" /> */}
      {/* Teacher presentation goes here */}
      <Section
        image={'/src/assets/images/asa2022.jpeg'}
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
