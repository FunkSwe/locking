import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import {
  RiLoginCircleLine,
  RiLogoutCircleLine,
  RiPencilLine,
  RiArchive2Line,
  RiFileCopyLine,
} from 'react-icons/ri';
import Avatar from '../avatar/Avatar';
import Magnetic from '../magnetic/magnetic';
import './menu.scss';
import useAuthStatus from '../../hooks/useAuthStatus';

const menuLinks = [
  { path: '/funkcamp', label: 'Home' },
  { path: '/funkcamp/about', label: 'About' },
  { path: '/funkcamp/tribute', label: 'Tribute' },
  { path: '/funkcamp/media', label: 'Media' },
  { path: '/funkcamp/posts', label: 'Posts' },
  { path: '/funkcamp/contact', label: 'Contact' },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const { authenticated, isAdmin } = useAuthStatus();
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('funkcampswe@gmail.com').then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset message after 2 seconds
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

  // Check user authentication status
  useEffect(() => {
    const checkAuthStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    };
    checkAuthStatus();
  }, [auth]);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#e3f68c',
      cancelButtonColor: '#ef7575',
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        navigate('/');
        toast.success('Logged out successfully!');
      } catch (error) {
        toast.error('An error occurred while logging out. Please try again.');
      }
    }
  };

  return (
    <div className='menu-container' ref={container}>
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
              <div className='icons-menu'>
                {authenticated && isAdmin && (
                  <>
                    <Magnetic>
                      <Link
                        to={`/funkcamp/myblogs/${user.uid}`}
                        className='menu-link-icon'
                      >
                        <RiArchive2Line />
                      </Link>
                    </Magnetic>
                    <Magnetic>
                      <Link to='/funkcamp/write' className='menu-link-icon'>
                        <RiPencilLine />
                      </Link>
                    </Magnetic>
                  </>
                )}
              </div>
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
          <div className='auth-controls'>
            {/* Show sign-in/sign-out buttons based on authentication */}
            {!authenticated ? (
              <Link to='/funkcamp/sign-in' className='menu-link'>
                <RiLoginCircleLine size={32} />
              </Link>
            ) : (
              <>
                <button onClick={handleLogout} className='menu-link'>
                  <RiLogoutCircleLine size={32} />
                </button>
                <Avatar
                  src={
                    user.photoURL || '../../assets/images/default-avatar.png'
                  }
                />
                <p>: {user.displayName || 'Anonymous'}</p>
              </>
            )}
          </div>
          <div className='menu-open' onClick={toggleMenu}>
            <p className='font-alt'>Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
