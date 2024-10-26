import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preview.scss';

const Preview = ({ preview, variant, isActive, activeIndex }) => {
  const previewRef = useRef(null);

  useEffect(() => {
    console.log('isActive:', isActive, activeIndex, variant);
    if (isActive && previewRef.current) {
      const elementsToAnimate = ['title', 'tags', 'desc'];
      elementsToAnimate.forEach((el) => {
        const element = previewRef.current.querySelector(`.preview-${el}`);
        if (element) {
          gsap.to(element, { x: 0, y: 0, opacity: 1, duration: 0.5 });
        }
      });

      const previewImg = previewRef.current.querySelector('.preview-img');
      if (previewImg) {
        gsap.to(previewImg, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1,
          ease: 'power3.out',
        });
      }
    } else if (previewRef.current) {
      const previewImg = previewRef.current.querySelector('.preview-img');
      if (previewImg) {
        gsap.to(previewImg, {
          clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
          duration: 1,
          ease: 'power3.out',
        });
      }
    }
  }, [isActive, activeIndex]);

  return (
    <div
      ref={previewRef}
      className={`preview ${variant} ${isActive ? 'active' : ''}`}
    >
      <div className='preview-img'>
        <img src={preview.img} alt={preview.title} className='img' />
      </div>
      <div className='preview-title'>
        <h1>{preview.title}</h1>
      </div>
      <div className='preview-tags'>
        <p>{preview.tags}</p>
      </div>
      <div className='preview-desc'>
        <p>{preview.desc}</p>
      </div>
    </div>
  );
};

export default Preview;
