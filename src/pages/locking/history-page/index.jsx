import { useEffect } from 'react';
import './history.scss';
import Lenis from '@studio-freight/lenis';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/utils/classnames';

const History = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={cn('w-screen h-full py-20 px-6 md:px-60', 'history')}>
      <p>Kommer ändra allt sen, lägger bara in text nu</p>
      <h1>LOCKINGENS HISTORIA</h1>
      <section>
        <h2>
          DETTA ÄR EN HISTORIA OM DEN URSPRUNGLIGA GRUNDEN TILL EN GATU-DANSEN
          KALLAD "LOCKING"
        </h2>
        <p>
          {' '}
          OBS: Historia är en sammanställning av historiska händelser, de flesta
          historier är legendarisk information som förts vidare, sett ur olika
          perspektiv, vissa är dokumenterade uppgifter överlämnade genom
          skrifter eller förstahandsögonvittnen. Denna information har kommit
          från förstahandsögonvittnen och ursprungliga skapare och bidragsgivare
          från den URSPRUNGLIGA locking-eran. Det finns olika historiska
          berättelser om olika händelser under de fyra decennierna av Lockingens
          existens. Men det finns bara EN ursprunglig era, som sågs genom många
          ögon som upplevde den, och alla kom samman för att skapa dess grund.
        </p>
        <p>
          Locking eller Campbellocking är en danskonstform med ett improviserat
          drag kallat "lock". Dessa skapades av Don Campbell och sattes till en
          specifik rytm och stil på nattklubbar i Los Angeles i början av
          1970-talet.
        </p>
        <p>
          Denna dans och subkultur spreds snabbt och blev snart en sensation på
          det nya TV-dansprogrammet Soul Train. Enskilda dansare visade snabba
          locking- och pekrörelser tillsammans med handklappningar och splittar.
        </p>
        <h2>
          Don "Campbellock" Campbell tidiga Soul Train-klipp med Damito Jo
          Freeman
        </h2>
        <p>
          ...och FLERA andra gamla skolans original skulle mötas på nattklubbar
          som "The Citadel" i Hollywood, The Summit on the Hill eller Mavericks
          Flats och dela steg och rörelser. Efter de första åren när locking
          började växa, anslöt sig dansare som Adolfo "Shabba Doo" Quinones,
          Hayword "Tito" Collins, Mike "Peek a boo" Frenke och Freddie Maxie
          till den ursprungliga klubbscenen.
        </p>

        <p>
          Under den eran och tiden skapade Greg Campbell Jr. Pope "Scooby Doo"
          Foster tillsammans med GoGo, YoYo, CoCo-familjen från Tony och Buddy
          Go-Go och Skeeter Rabbit, Arnetta Johnson, Kevin "YoYo" Lombard ibland
          nya steg på fester, skolor, picknickar och sociala evenemang och
          skapade steg som utfördes i enhet. En rörelse mot gruppdans ägde rum i
          Watts, Compton och South Central, Los Angeles, och fortsatte sedan med
          interaktion med andra gatudansare som Greg "Captain Crunch" Dandridge
          och Steve "Sinbad Crane". Detta var utvecklingen av GATURÖRELSEN INOM
          LOCKING.
        </p>

        <p>
          Don och hans partner, Damita Jo Freeman, turnerade med Soul
          Train-gänget. Strax därefter bildade Don en grupp improviserade
          solodansare (Varje dansare skulle kliva fram, göra sitt solo och sedan
          kliva tillbaka i linjen) där det enda synkroniserade dansandet denna
          grupp gjorde var att hålla takten i bakgrunden. Gruppen bestod av Don
          Campbell, Fred "Mr. Penguin" Berry, Charles Robot, Slim Robot och
          Sambo Lock. De kallades "The Campbellock Dancers".
        </p>
        <p>
          Don Campbell tillsammans med dansare som Greg "Campbell Jr" Pope,
          Jimmy "Scooby Doo" Foster, Fred "Mr. Penguin" Berry (alias Rerun),
          Damita Jo Freeman, Go-Go-bröderna (Tony Lewis och Edwin "Buddy"
          Lombard), Kevin "YoYo" Lombard, James "Skeeter Rabbit" Higgins, Leo
          "Fluky Luke" Williamson, Johnny "Sambo Lock" McCloud, Charles "Robot"
          Washington, Bill "Slim Robot" Williams, Alpha Anderson, Fredie Maxie,
          Guy "Shocklock" Evans, Tito Collins, Jeffery Daniels och Arnetta
          "Netta Bug" Johnson.
        </p>
      </section>
    </main>
  );
};

export default PageTransition(History);
