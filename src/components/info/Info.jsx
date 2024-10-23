import React from 'react';
import { Link } from 'react-router-dom';
import { Img } from 'react-image';
// styles
import styles from './Info.module.scss';
import { AnimatedText } from '../animations/AnimatedText';

const Info = () => {
  return (
    <div className={styles.info} id='info'>
      <h4>FUNKCAMP 2025</h4>
      <h2>
        <span>17th - 20th of april</span>
      </h2>
      <p>(Times are set, full schedule coming up later)</p>

      <br />
      {/*  <Image src={IMGBIO} alt='funkcamp' width={'100%'} height={'auto'} /> */}
      <div className={styles.adress}>
        <h4>Main Venue!</h4>
        <h2 className={styles.name}>
          Danscenter <span>Fryshuset</span>
        </h2>
        <p>DANCE STUDIO 1 & 2 (bottom floor)</p>
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
        <AnimatedText text='Thursday: At Danscenter' />
      </h3>
      {/* <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p className={styles.date} style={{ textDecoration: 'none' }}>
        17th of april
      </p>
      <ul style={{ textDecoration: 'none' }}>
        <li>15.30-18.40 Teachers: Not set</li>
        <li>15.30 Welcome and registration - Danscenter</li>
        <li>16.00-17.25 Teacher: Not set</li>
        <li>17.30-18.45 Teacher: Not set</li>
        <li>19.00 doors close</li>
        <li>Rest for friday - reload - stretch - Chill</li>
      </ul>

      <h3 style={{ textDecoration: 'none' }}>
        <AnimatedText text='Friday: At Danscenter' />
      </h3>
      {/* <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p className={styles.date} style={{ textDecoration: 'none' }}>
        18th of april
      </p>
      <ul style={{ textDecoration: 'none' }}>
        <li>11.00-16.30 Teachers: Not set</li>
        <li>13.30-14.25 Teacher: Not set</li>
        <li>15.30-16.55 Teacher: Not set</li>
        <li>17.00 doors close</li>
        <li>Rest for saturday or go out and party - choice is yours</li>
      </ul>

      <h3 style={{ textDecoration: 'none' }}>
        <AnimatedText text='Saturday: At Danscenter ' /> {/* + battle event */}
      </h3>
      {/* <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p className={styles.date} style={{ textDecoration: 'none' }}>
        19th of april
      </p>
      <ul style={{ textDecoration: 'none' }}>
        <li>11.00-16.30 Teachers: Not set</li>
        <li>12.30 - 14.00 Teachers: Not set</li>
        <li>14.00-15.00 Break</li>
        <li>15.00 - 16.30 Teacher: Not-set</li>
        <li>Might not be any rest - if the battles or party shows up...</li>
      </ul>
      <ul style={{ textDecoration: 'none' }}>
        <li>
          SOME SOME!!! There is other events in town, more info coming up! Venue
          to be announced
        </li>
        {/*  <li>Locking & Popping 1vs1</li>
        <li>DJ:s - Boondox, DJenius </li>
        <li>Judges - Willow & Inxi </li>
        <li>Host - Mr 1NE-ONE </li>
        <li>Doors open 17.00</li> */}
        {/* <li>
          <Link
            rel='stylesheet'
            href='https://www.fasching.se/club-yo/#2024-03-01T23-30'
            target='_blank'
          >
            Link to the event
          </Link>
        </li> */}
        {/*  <li>
          <Link
            rel='stylesheet'
            href='https://maps.app.goo.gl/XxsBN6ZDRc9SVSSz5'
            target='_blank'
          >
            Adress link to Fasching
          </Link>
        </li> */}
        {/*  <div style={{ marginBottom: '2rem' }}></div> */}
      </ul>
      <h3 /* style={{ textDecoration: 'none' }} */>
        <AnimatedText text='Sunday: At danscenter' />
      </h3>
      {/*  <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p className={styles.date}>20th of april</p>
      <ul>
        <li>11.00-16.30 Teachers: Not set</li>
        <li>11.00 - 12.00 Teacher: Not-set</li>
        <li>12.00 - 13.00 Teacher: Not-set</li>
        <li>13.00-14.00 Food Break</li>
        <li>15.15-16.15 Teacher: Not-set</li>
        16.15 - 17.00 til closing Q & A - Everybody + Thank you and good bye
        <li>THE END</li>
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
