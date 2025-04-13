// InstagramEmbed.jsx
import React, { useEffect } from 'react';

export default function InstagramEmbed() {
  useEffect(() => {
    // 1. Create a <script> element to load Instagram's embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';

    // 2. Once the script loads, we manually trigger the embed re-processing
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    // 3. Append the script to the document body (or head)
    document.body.appendChild(script);

    // Optional cleanup if you want to remove the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className='instagram-media'
      data-instgrm-captioned
      data-instgrm-permalink='https://www.instagram.com/reel/DH4DM5mOr2D/?utm_source=ig_embed&amp;utm_campaign=loading'
      data-instgrm-version='14'
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '540px',
        minWidth: '326px',
        padding: 0,
        width: '99.375%',
      }}
    >
      {/* Your full Instagram embed HTML content can go here. 
          This example just shows the main structure. */}
      <div style={{ padding: '16px' }}>
        <p
          style={{
            color: '#c9c8cd',
            fontFamily: 'Arial,sans-serif',
            fontSize: '14px',
            lineHeight: '17px',
            marginBottom: 0,
            marginTop: '8px',
            overflow: 'hidden',
            padding: '8px 0 7px',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <a
            href='https://www.instagram.com/reel/DH4DM5mOr2D/?utm_source=ig_embed&amp;utm_campaign=loading'
            style={{
              color: '#c9c8cd',
              fontFamily: 'Arial,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              lineHeight: '17px',
              textDecoration: 'none',
            }}
            target='_blank'
            rel='noreferrer'
          >
            Ett inlägg delat av F.U.N.K (@f.u.n.k.ig)
          </a>
        </p>
      </div>
    </blockquote>
  );
}
