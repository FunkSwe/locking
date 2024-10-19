import { motion } from 'framer-motion';
import styles from './About.module.scss';
/* import { teamMembersData } from '../../assets/teamMembersData';
import TeamMember from '../../components/TeamMember'; */
import PageTransition from '@/components/PageTransition';

const About = () => {
  return (
    <div className={styles.about}>
      <section>
        <motion.h1
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            easings: 'ease-in-out',
            delay: 0,
          }}
        >
          The Funkcamp Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            easings: 'ease-in-out',
            delay: 0.3,
          }}
        >
          Special thanks to:
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            easings: 'ease-in-out',
            delay: 0.3,
          }}
        >
          James 'OG Skeeter Rabbit' Higgins & Dave Gregory 'Campbellock Jr' Pope{' '}
          <br />
          (Since Funkcamp 2005)
        </motion.p>
      </section>
      <section>
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Funkcamp 2025 20th Anniversary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.6 }}
        >
          Next year it will be 20 years ago since the first camp
          <br />
          The goal has always been to connect the pioneers with the younger
          generation, I started it with this in mind, I wanted to learn from the
          people who lived it, the dance, the culture... all of it. And at the
          same time I wanted to give the youth here in Sweden to be able to get
          the same knowledge, I wanted to raise the level of the dancers and the
          knowledge here. Thru inviting the pioneers to teach us and also to
          build connections and bridges between generations.
          <br />
          <br />
          Im happy to say it has been a very good experience and next year will
          also be the last funkcamp. What the future will bring nobody knows,
          but one thing is for shure that the young generation needs to pich up
          the tourch and move this hole scene on. Build up new, keep the respect
          for the old and move forwards.
          <br />
          <br />
        </motion.p>
      </section>
      <section>
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          How it all began ⚡️ & continues
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.6 }}
        >
          Funkcamp 2005 ✨ First ever dance camp dedicated to locking in Sweden
          and Europe.
          <br />
          From there the rest is history, we are now coming in to our 19th year
          in 2024. But actaully not 19th edition... due to some years falling
          off, most of us know why.
          <br />
          <br />
          Original idea to camp was from me working on a kids show for UR
          utbildnings radion in Sweden, I was the producer of that show and was
          asked to have my students teach different "street styles", me asking
          the organisation to get hold of Don Campbell (who sadly never
          responded), OG Skeeter Rabbit, Greg Campbellock Jr for me.
          <br />
          We (me and Skeeter) had a few emails sent back and forth, I asked him
          to come and teach the foundation and history in Sweden, he said shure
          I can help out and said he connect me with Greg. Then Greg also became
          a part of the process
          <br />
          <br />
          Also during this period Skeeter and Greg planned a camp in LA, a
          locking camp. It was moved to Vegas and the narrative was changed
          (Skeeter got sick) and people decided to go and do it with out Skeeter
          who was the original person behind the camp both idea & concept. I was
          invited ot US, but could not go to the camp in Vegas, so a friend from
          Sweden went and met with the OGs.
          <br />
          <br />
          The same year we decided to do the funkcamp in Sweden. Bringing the
          OG's so that our kids could learn directly from the source. With the
          help of OG Skeeter Rabbit & Greg Campbellock Jr, we put the ideas
          together and set the plans in motion for what was to become FUNKCAMP
          (sweden) This lighted a spark amongst many younger lockers and a
          groups like funky 4 brothers was formed from this spark! And supported
          by many of the OG's.
          <br />
        </motion.p>
        <p>
          The past "soon" 20 years has been remarkable, learning from the
          pioneers, connecting the youth and future lockers to the pioneers and
          to be able to learn from some of the sources directly has been an
          honor, to see some lockers grow from beeing kids at the first camps to
          being some of the top dancers in the world.
          <br />
          The camp has always had 3 pioneers with roots to the Locking
          community, the clubs, soul train and yes{' '}
          <span style={{ color: '#ea781a' }}>GOGO Brothers</span>. <br /> Many
          have been supporting the camp for years now, but without these 3
          pillars,{' '}
          <span style={{ color: '#ea781a' }}>
            {' '}
            OG Skeeter Rabbit, TONY GOGO and Campbellock JR (R.I.P)
          </span>
          , This camp would have not existed. <br /> So Im deeply honered and
          humbled by the help, continued support and the brother hood you have
          shown us.
          <br />
          <br />
          Other people who helped me from the start has been{' '}
          <span style={{ color: '#ea781a' }}>
            {' '}
            Manne Schutt and Amine Baraka
          </span>
          , they where always helping out and fixing around the camp. <br />
          Our brother <span style={{ color: '#ea781a' }}> Willow</span> has been
          playing a mayor part of the camp the past years.
          <span style={{ color: '#ea781a' }}>Funky 4 brothers</span> was always
          supportive and helped alot ... <br />
          Also some other pioneers has been involved in several camps, such as
          <span style={{ color: '#ea781a' }}>
            {' '}
            Damon Frost, Patrik "PRIME" Helge
          </span>{' '}
          .
          <br />
          We had the honor to have{' '}
          <span style={{ color: '#ea781a' }}>
            {' '}
            Loose Caboose, Lock Smith, Anthony Edwards
          </span>{' '}
          come teach at the camp too.
          <br />
          <br />
          And we have had the honor to keep having the assosiasion and
          collaboration with{' '}
          <span style={{ color: '#ea781a' }}> Danscenter stockholm</span> and
          now under the roof of{' '}
          <span style={{ color: '#ea781a' }}> Fryshuset </span>
          were the school continues to live its legacy. This was also the venue
          for past 3-4 camps.
          <br />
          <br />
          We wanna thank all of you who has come to the camps. Connecting with
          lockers from around the world and have direct conversations and
          teachings from our finest lockers and pioneers of locking. Our guest
          teachers who is a pillar holding high level at the camp and teaching
          their passion with us.
          <br />
          <br />
          We hope to see you at the 2025 camp & we looking forwards to meeting
          you all at the 20year anniversary! with some great guests 🎉
          <br />
          <br />
          2025... LETS GO!
        </p>
      </section>
    </div>
  );
};

export default PageTransition(About);
