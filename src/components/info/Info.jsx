import React from 'react';
import { Link } from 'react-router-dom';
import { Img } from 'react-image';
// styles
import styles from './Info.module.scss';
import { AnimatedText } from '../animations/AnimatedText';

const Info = () => {
  return (
    <div className={styles.info}>
      <h4>FUNKCAMP 2025</h4>
      <h2>
        <span>17th - 20th of april</span>
      </h2>
      <p>(Dates are set, full schedule coming up later)</p>
      <br />
      <h4>Price: 230&euro;</h4>
      <p style={{ color: '#B8A054' }}>
        ✨This includes all classes/workshops✨
      </p>
      <p style={{ color: '#FFD700' }}>
        "Please note: Accommodation, including meals and hotel stays, is not
        included."
      </p>
      {/*  <Image src={IMGBIO} alt='funkcamp' width={'100%'} height={'auto'} /> */}
      <div className={styles.adress}>
        <h4>Main Venues!</h4>
        <h2 className={styles.name}>
          Danscenter <span>Fryshuset</span>
        </h2>
        <p>
          We are right now looking in to an other studio thursday friday so it
          might change
        </p>
        <p>This is due to the time schedule and opening hours...</p>
        <p>But saturday and sunday is at Danscenter 100%</p>
        <p>DANCE STUDIO 1, 2 & 3</p>
        <h4 style={{ textAlign: 'left', marginTop: '2rem' }}>
          Adress for venue:
        </h4>
        <p>
          Mårtensdalsgatan 2-8
          <br />
          <br />
          120 30 Stockholm, Sweden
        </p>
        <Link
          rel='stylesheet'
          to='https://www.google.com/search?q=danscenter+fryshuset&rlz=1C1BYYL_svSE957SE957&tbm=lcl&sxsrf=AJOqlzVI_uc_6va0FmkQvNyRt5aJSPL4XQ%3A1677588052761&ei=VPb9Y5f6Leu_xc8P0OSzsAs&oq=dansce&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAEYADIECCMQJzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToICAAQgAQQsQM6BAgAEEM6CggAELEDEIMBEEM6BwgAELEDEEM6CAgAELEDEIMBOg4IABCABBCxAxCDARDJAzoICAAQgAQQkgM6BwgAEIAEEApQsQhYiBxg_iVoBHAAeACAATeIAcEDkgEBOZgBAKABAcABAQ&sclient=gws-wiz-local#rlfi=hd:;si:10175385335132986439;mv:[[59.30119397731902,18.089164231936785],[59.30083402268096,18.088459168063217]]'
          target='_blank'
        >
          Adress link to Danscenter Stockholm
        </Link>
      </div>
      <div className={styles.adress}>
        <p>Travel in Stockholm please follow the link</p>
        <a rel='stylesheet' href='https://sl.se/en/in-english' target='_blank'>
          SL - public transport in Stockholm.
        </a>
        <br />
        <br />
      </div>
      <br />
      <p className={styles.schedulestart}>
        Here is a pre- schedule, changes might happen so be on the look out
      </p>
      <h3 style={{ textDecoration: 'none' }}>
        <AnimatedText text='Thursday' style='title' />
      </h3>
      {/* <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p className={styles.date} style={{ textDecoration: 'none' }}>
        17th of april
      </p>
      <ul style={{ textDecoration: 'none' }}>
        <li>Time and schedule coming up soon... </li>
        <li>Registration - </li>
        {/*  <li>16.00-17.25 Teacher: Not set</li>
        <li>17.30-18.45 Teacher: Not set</li> */}
        <li> doors close</li>
        <li>Rest for friday - reload - stretch - Chill</li>
      </ul>
      <h3 style={{ textDecoration: 'none' }}>
        <AnimatedText text='Friday' />
      </h3>
      {/* <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p className={styles.date} style={{ textDecoration: 'none' }}>
        18th of april
      </p>
      <ul style={{ textDecoration: 'none' }}>
        <li>Schedule is coming up soon... </li>
        {/*  <li>13.30-14.25 Teacher: Not set</li>
        <li>15.30-16.55 Teacher: Not set</li> */}
        <li> doors close</li>
        <li>Some plans in the making for this day</li>
      </ul>
      <h3 style={{ textDecoration: 'none' }}>
        <AnimatedText text='Saturday' /> {/* + battle event */}
      </h3>
      {/* <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p className={styles.date} style={{ textDecoration: 'none' }}>
        19th of april
      </p>
      <ul style={{ textDecoration: 'none' }}>
        <li>
          11:15–12:30 — Session 1
          <ul>
            <li>Group 1: Teacher Willow (Studio 1)</li>
            <li>Group 2: Teacher Samantha (Studio 2)</li>
            <li>Group 3: Teacher Manne (Studio 3)</li>
          </ul>
        </li>
        <li>12:30–13:45 — Lunch Break</li>
        <li>
          13:45–15:00 — Session 2
          <ul>
            <li>Group 1: Teacher Samantha (Studio 3)</li>
            <li>Group 2: Teacher Manne (Studio 1)</li>
            <li>Group 3: Teacher Willow (Studio 2)</li>
          </ul>
        </li>
        <li>15:00–15:15 — Short Break</li>
        <li>
          15:15–16:30 — Session 3
          <ul>
            <li>Group 1: Teacher Manne (Studio 2)</li>
            <li>Group 2: Teacher Willow (Studio 3)</li>
            <li>Group 3: Teacher Samantha (Studio 1)</li>
          </ul>
        </li>
      </ul>
      <div className={styles.stf}>
        <h2>KLUBB STF - ALL STYLE BATTLE</h2>
        <br />
        <p>
          The STF All Style Battle is back!! And as always, ALL dance styles are
          welcome to join in. Come out and compete or just hang for a night with
          amazing dancers and crazy energy! 🔥🔥🔥
        </p>
        <p>MC - 𝗛𝗔𝗞𝗘𝗬 𝗭𝗘𝗥𝗘</p>
        <p>DJ - 𝗣𝗔𝗧𝗥𝗜𝗞 '𝗣𝗥𝗜𝗠𝗘' 𝗛𝗘𝗟𝗚𝗘</p>
        <p>Judges -</p>
        <p>
          𝗗𝗔𝗠𝗢𝗡 𝗙𝗥𝗢𝗦𝗧 - 𝗝𝗢𝗔𝗡𝗡𝗔 𝗦𝗞𝗬𝗪𝗔𝗟𝗞𝗘𝗥 - 𝗪𝗜𝗟𝗟𝗢𝗪 𝗘𝗩𝗔𝗡𝗡 - 𝗔𝗠𝗕𝗥𝗔 𝗦𝗨𝗖𝗖𝗜 - 𝗡𝗜𝗖𝗢
          𝗥𝗨𝗕𝗜𝗢
        </p>{' '}
        <Link
          rel='stylesheet'
          to='https://www.facebook.com/share/15q1Zmqbht/'
          target='_blank'
        >
          Link to the event
        </Link>
        <Link rel='stylesheet' to='https://g.co/kgs/34zyBep' target='_blank'>
          Adress to the event
        </Link>
      </div>
      <div style={{ marginBottom: '2rem' }}></div>
      <h3 /* style={{ textDecoration: 'none' }} */>
        <AnimatedText text='Sunday' />
      </h3>
      {/*  <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p className={styles.date}>20th of april</p>
      <ul>
        <li>
          11:15–12:30 — Session 1
          <ul>
            <li>Group 1: Teacher Samantha (Studio 1)</li>
            <li>Group 2: Teacher Manne (Studio 2)</li>
            <li>Group 3: Teacher Willow (Studio 3)</li>
          </ul>
        </li>
        <li>12:30–13:45 — Lunch Break</li>
        <li>
          13:45–15:00 — Session 2
          <ul>
            <li>Group 1: Teacher Manne (Studio 3)</li>
            <li>Group 2: Teacher Willow (Studio 1)</li>
            <li>Group 3: Teacher Samantha (Studio 2)</li>
          </ul>
        </li>
        <li>15:00–15:15 — Short Break</li>
        <li>
          15:15–16:30 — Session 3
          <ul>
            <li>Group 1: Teacher Willow (Studio 2)</li>
            <li>Group 2: Teacher Samantha (Studio 3)</li>
            <li>Group 3: Teacher Manne (Studio 1)</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Info;

/* 
<li>- A little re-scedule</li>
        <li>
          12.00 Workshop with Tony Gogo at Studion Kulturhuset + session <br />-
          At STUDION
        </li>
        <li>13.00 - 15.00 Session / Jam - At STUDION</li>
        <li>In association with Gatuverket</li>
        <li>and the DANCESPOT</li>
        <li>
          <Link
            rel='stylesheet'
            href='https://www.google.com/maps/place/Kulturhuset/@59.3320447,18.0627552,17z/data=!3m2!4b1!5s0x465f9d5e6495902d:0x64dca853c2bd10ec!4m6!3m5!1s0x465f9d5e7cf16e05:0x5068230272fbf543!8m2!3d59.332042!4d18.0649439!16s%2Fm%2F027_kvs'
            target='_blank'
          >
            Adress link to Studion
          </Link>
        </li>
        <li>Adress: Studion, Sergels Torg, 111 57 Stockholm</li>
        <li>15-16.30 BREAK - change of venue</li>
        <li>
          16.30-20.00 - Workshops continue for funkcamp <br />- At Danscenter
        </li>
        <li>Teacher schedule coming up on friday</li>

*/
