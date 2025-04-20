import React from 'react';
import { Link } from 'react-router-dom';
import { Img } from 'react-image';
// styles
import styles from './Info.module.scss';
import { AnimatedText } from '../animations/AnimatedText';
import InstagramReel from './Instaevent';

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.adress}>
        <h3>Main Venue Sunday!</h3>
        {/* 
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
 */}
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
      {/* <h3 style={{ textDecoration: 'none' }}>
        <AnimatedText text='Thursday' style='title' />
      </h3>
      <h2 className={styles.name}>
        <span>Venue:</span>
        <br />
        &nbsp;&nbsp;SKH
      </h2>
      <p className={styles.date} style={{ textDecoration: 'none' }}>
        17th of april
      </p>
      <ul style={{ textDecoration: 'none' }}>
        <li>Registration - 15.30-16.00 </li>
        <li>
          16.00-17.15 — Session 1
          <ul>
            <li>Group 2: Teacher Arvidos (Studio 8)</li>
            <li>Group 1: Teacher Damon (Studio 9)</li>
          </ul>
        </li>
        <li>
          17.30-18.45 — Session 2
          <ul>
            <li>Group 1: Teacher Arvidos (Studio 8)</li>
            <li>Group 2: Teacher Damon (Studio 9)</li>
          </ul>
        </li>
        <li>19.00-20.30 Teacher: Tony GOGO! The BlackBox (Group 1+2)</li>
        <li>21.00 Doors close</li>
        <li>Rest for friday - Reload - Eat - Sleep</li>
      </ul>
      <h3 style={{ textDecoration: 'none' }}>
        <AnimatedText text='Friday' />
      </h3>
      <h2 className={styles.name}>
        <span>Venue:</span>
        <br />
        &nbsp;&nbsp;SKH
      </h2>
     
      <p className={styles.date} style={{ textDecoration: 'none' }}>
        18th of april
      </p>
      <ul style={{ textDecoration: 'none' }}>
        <li>
          13.00-14.00 — Session 1
          <ul>
            <li>Group 1: Teacher Tony Gogo (Studio 8)</li>
            <li>Group 2: Teacher Prime (Studio 9)</li>
          </ul>
        </li>
        <li>
          14.15-15.15 — Session 2
          <ul>
            <li>Group 2: Teacher Tony Gogo (Studio 8)</li>
            <li>Group 1: Teacher Prime (Studio 9)</li>
          </ul>
        </li>
        <li>15.15 - 17.00 — Food break</li>
        <li>17.00-21.00 Jam/Battle 7-to-smoke</li>
        <li>Organized by FOWKUS & (f.u.n.k.ig)</li>
        <InstagramReel />
      </ul> */}
      {/*  <h3 style={{ textDecoration: 'none' }}>
        <AnimatedText text='Saturday' /> 
      </h3>
      <h2 className={styles.name}>
        <span>Venue:</span>
        <br />
        &nbsp;&nbsp;Danscenter
      </h2>
     
      <p className={styles.date} style={{ textDecoration: 'none' }}>
        19th of april
      </p>
      <ul style={{ textDecoration: 'none' }}>
        <li>
          11:30–12:45 — Session 1
          <ul>
            <li>Group 1: Teacher Willow (Studio 1)</li>
            <li>Group 2: Teacher Samantha (Studio 2)</li>
            <li>Group 3: Open Session DJ BoonDox (Studio 3)</li>
          </ul>
        </li>
        <li>12:45–14:15 — Lunch Break</li>
        <li>
          14:15–15:30 — Session 2
          <ul>
            <li>Group 1: Open Session DJ BoonDox (Studio 3)</li>
            <li>Group 2: Teacher Willow (Studio 1)</li>
            <li>Group 3: Teacher Samantha (Studio 2)</li>
          </ul>
        </li>
        <li>15:30–15:45 — 15min Break</li>
        <li>
          15:45–17:00 — Session 3
          <ul>
            <li>Group 1: Teacher Samantha (Studio 2)</li>
            <li>Group 2: Open Session DJ BoonDox (Studio 3)</li>
            <li>Group 3: Teacher Willow (Studio 1)</li>
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
        <p>
          Sign up will be done at the event (starts 19:00) so be in time if you wanna battle
        </p>
        <Link
          rel='stylesheet'
          to=' https://stockholmtapfestival.se/evening-events/#All-Style-Battle-and-Cinema'
          target='_blank'
        >
          More info!
        </Link>
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
      <div style={{ marginBottom: '2rem' }}></div> */}
      <h3 /* style={{ textDecoration: 'none' }} */>
        <AnimatedText text='Sunday' />
      </h3>
      <h2 className={styles.name}>
        <span>Venue:</span>
        <br />
        &nbsp;&nbsp;Danscenter
      </h2>
      {/*  <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p className={styles.date}>20th of april</p>
      <ul>
        <li>
          11:30–12:45 — Session&nbsp;1
          <ul>
            <li>Group&nbsp;1: Teacher Manne (Studio 2)</li>
            <li>Group&nbsp;2: Teacher Willow (Studio 3)</li>
            <li>Group&nbsp;3: Teacher Samantha (Studio 1)</li>
          </ul>
        </li>

        <li>12:45–14:15 — Lunch Break</li>

        <li>
          14:15–15:30 — Session&nbsp;2
          <ul>
            <li>Group&nbsp;1: Teacher Willow (Studio 1)</li>
            <li>Group&nbsp;2: Teacher Samantha (Studio 2)</li>
            <li>Group&nbsp;3: Teacher Manne (Studio 3)</li>
          </ul>
        </li>

        <li>15:30–15:45 — Short Break</li>

        <li>
          15:45–17:00 — Session&nbsp;3
          <ul>
            <li>Group&nbsp;1: Teacher Samantha (Studio 3)</li>
            <li>Group&nbsp;2: Teacher Manne (Studio 1)</li>
            <li>Group&nbsp;3: Teacher Willow (Studio 2)</li>
          </ul>
        </li>

        <li>
          Doors close at 18:00, so everyone has to be out of the building.
        </li>
      </ul>
      <h3 /* style={{ textDecoration: 'none' }} */>
        <AnimatedText text='Sunday 27th' />
      </h3>
      <h3 className={styles.name}>Venue: Online Sunday 27th of april</h3>
      <h4>
        WITH - <br />
        OG SKEETER RABBIT
      </h4>
      <p style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>
        Lecture / Q&A - Closure for funkcamp
      </p>
      <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
        If you have specific questions you wanna ask, please send it to
        funkcampswe@gmail.com and we will choose a few to bring up during the
        Q&A
      </p>
    </div>
  );
};

export default Info;
