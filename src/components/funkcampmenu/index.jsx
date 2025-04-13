import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { RiFileCopyLine } from 'react-icons/ri';
import './menu.scss';

const menuLinks = [
  { path: '/funkcamp', label: 'Home' },
  { path: '/funkcamp/about', label: 'About' },
  { path: '/funkcamp/schedule', label: 'Schedule' },
  { path: '/funkcamp/checkgroup', label: 'CheckGroup' },
  { path: '/funkcamp/tribute', label: 'Tribute' },
  { path: '/funkcamp/media', label: 'Media' },
  { path: '/funkcamp/contact', label: 'Contact' },
];

const FunkCampMenu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  console.log(isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('funkcampswe@gmail.com').then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set('.menu-link-item-holder', { x: 100, opacity: 0 });

      tl.current = gsap
        .timeline({ paused: false })

        .to('.menu-overlay', {
          duration: 0.2,
          clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          ease: 'power2.inOut',
        })
        .to('.menu-overlay', {
          duration: 0.2,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          ease: 'power2.inOut',
        })

        .to('.menu-link-item-holder', {
          x: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.04,
          ease: 'power2.inOut',
          delay: 0.2,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  // Close the menu when route changes
  useEffect(() => {
    setIsMenuOpen(false); // Close the menu on route change
  }, [location.pathname]);

  return (
    <div className={`menu-container`} ref={container}>
      <div
        className={`menu-container-bg ${isScrolled ? 'scrolled' : ''}`}
      ></div>
      <div className='menu-bar'>
        <div className='menu-logo'>
          <Link to={'/funkcamp'}>
            <img src='/fclogosmall.png' alt='logo' />
          </Link>
        </div>

        <div className='menu-overlay'>
          <div className='menu-overlay-bar'>
            <div className='menu-logo'>
              <Link to={'/funkcamp'} className='font-alt'>
                <img src='/fclogosmall.png' alt='logo' />
              </Link>
            </div>
            <div className='menu-close' onClick={toggleMenu}>
              <p className='font-alt'>Close</p>
            </div>
          </div>

          <div className='menu-copy'>
            <div className='menu-links'>
              {menuLinks.map((link) => (
                <div className='menu-link-item' key={link.label}>
                  <div className='menu-link-item-holder'>
                    <Link to={link.path} className='menu-link'>
                      {link.label.split('').map((letter, index) => (
                        <span key={index} className='menu-letter font-alt'>
                          {letter}
                        </span>
                      ))}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className='menu-info'>
              <div className='menu-info-col'>
                <p>Contact Us: funkcampswe@gmail.com</p>
                <button className='copy-button' onClick={copyToClipboard}>
                  <RiFileCopyLine />
                </button>
                {copySuccess && <span className='copy-success'>Copied!</span>}
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-12'>
          <div className='menu-open' onClick={toggleMenu}>
            <p className='font-alt'>Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunkCampMenu;
