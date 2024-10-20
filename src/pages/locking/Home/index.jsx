import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Lenis from '@studio-freight/lenis';
import PageTransition from '@/components/PageTransition';

const LockingHome = () => {
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
      <Hero />
    </main>
  );
};

export default PageTransition(LockingHome);
