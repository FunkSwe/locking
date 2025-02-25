import React from 'react';
import { Link } from 'react-router-dom';
import { Img } from 'react-image';
// styles
import styles from './Info.module.scss';
import { AnimatedText } from '../animations/AnimatedText';

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.adress}>
        <h3>Main Venues!</h3>

        <h2 className={styles.name}>
          SKH <span>Stockholms konstnärliga högskola</span>
        </h2>
        <p style={{ textAlign: 'left', marginTop: '2rem' }}>
          Adress to SKH:
          <br />
          <span className={styles.subway}>
            Subway station: Tekniska högskolan (10min walk)
          </span>
        </p>
        <p>
          Brinellvägen 58
          <br />
          <br />
          114 28 Stockholm, Sweden
        </p>
        <Link
          rel='stylesheet'
          to='https://www.google.com/search?q=skh+brinellv%C3%A4gen+58&sca_esv=fb875f67547db07d&rlz=1C1BYYL_svSE957SE957&tbm=lcl&sxsrf=AHTn8zpQI6e_faFHWzjoOGF8Qa_Ch_flpg%3A1740391216234&ei=MEO8Z-fzDfDEwPAPmsK1yAM&ved=0ahUKEwjny9rBhtyLAxVwIhAIHRphDTkQ4dUDCAo&uact=5&oq=skh+brinellv%C3%A4gen+58&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhRza2ggYnJpbmVsbHbDpGdlbiA1ODICECYyCBAAGIAEGKIEMgUQABjvBTIIEAAYgAQYogQyBRAAGO8FMgUQABjvBUi-C1DGAlibCXAAeACQAQCYAYQBoAH1AqoBAzMuMbgBA8gBAPgBAZgCBKACkAPCAgYQABgWGB6YAwCIBgGSBwMyLjKgB_gR&sclient=gws-wiz-local'
          target='_blank'
        >
          Adress link to SKH - Stockholms konstnärliga högskola
        </Link>

        <h2 className={styles.name}>
          Danscenter <span>Fryshuset</span>
        </h2>
        <p style={{ textAlign: 'left', marginTop: '2rem' }}>
          Adress to Danscenter:
          <br />
          <span className={styles.subway}>
            Subway station: Gullmarsplan (tram Mårtensdal)
          </span>
        </p>
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
        <li>Pre-schedule</li>
        <li>Registration - 15.30-16.00 </li>
        <li>16.00-17.15 Teacher: Arvidos / Not set / Studio 8 / 9</li>
        <li>17.30-18.45 Teacher: Arvidos / Not set / Studio 8 / 9</li>
        <li>19.00-20.30 Teacher: Tony GOGO! The BlackBox</li>
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
        <li>13.00-14.00 Teacher: Tony Gogo / Not set / Studio 8 / 9</li>
        <li>14.15-15.15 Teacher: Tony Gogo / Not set / Studio 8 / 9</li>
        <li>15.15 - 17.00 — Lunch break</li>
        <li>17.00-21.00 Jam/Battle</li>
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
