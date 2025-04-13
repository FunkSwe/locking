'use client';
import React from 'react';
import Script from 'next/script';

export default function InstagramReel() {
  return (
    <div style={{ maxWidth: '540px', margin: '0 auto' }}>
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
          widthCalc: 'calc(100% - 2px)',
        }}
      >
        {/* The rest of your Instagram embed HTML content here */}
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

      {/* 
        Load Instagram's embed script so it can process the blockquote.
        'async' is automatically added for you by the Next.js <Script> component,
        or you can add strategy="lazyOnload". 
      */}
      <Script src='//www.instagram.com/embed.js' strategy='lazyOnload' />
    </div>
  );
}
