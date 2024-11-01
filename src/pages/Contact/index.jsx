import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FcCheckmark } from 'react-icons/fc';
import PageTransition from '@/components/PageTransition';
import ReCAPTCHA from 'react-google-recaptcha';

// styles
import styles from './Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [validationMessage, setValidationMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const navigate = useNavigate();
  const form = useRef();
  const recaptchaRef = useRef();

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    console.log(e.target.value);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    form.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = form.current.checkValidity();

    if (isValid && recaptchaToken) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SENDER_ID,
          import.meta.env.VITE_TEMP_ID,
          form.current,
          import.meta.env.VITE_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            resetForm();
            setValidationMessage(
              'Thank you for getting in touch with funkcamp, we will answer your email shortly!'
            );
            recaptchaRef.current.reset(); // Reset reCAPTCHA
            setTimeout(() => {
              navigate('/funkcamp');
            }, 5000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setValidationMessage(
        'Oops! My funky friend, It looks like you missed something. Please check and fill in all required fields.'
      );
    }
  };

  const onReCAPTCHAChange = (token) => {
    setRecaptchaToken(token);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValidationMessage('');
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, [validationMessage]);

  return (
    <div className={styles.contact}>
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
      >
        Contact &
      </motion.h2>
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
      >
        Registration
      </motion.h2>

      {/* FORM === FORM */}

      <motion.form
        className={styles.contact_form}
        noValidate
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
      >
        <label>Name</label>
        <div className={styles.input_field}>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={onChangeHandler}
            required
            minLength={3}
            maxLength={15}
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        <label>Email</label>
        <div className={styles.input_field}>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={onChangeHandler}
            required
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        <label>Subject</label>
        <div className={styles.input_field}>
          <select
            name='subject'
            value={form.subject}
            onChange={onChangeHandler}
            required
          >
            <option value='Registration'>Register</option>
            <option value='Question'>Question</option>
          </select>
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        <label>Message</label>
        <div className={styles.input_field}>
          <textarea
            type='textarea'
            name='message'
            value={form.message}
            onChange={onChangeHandler}
            minLength={20}
            maxLength={200}
            required
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
          className={styles.recapthcha}
        />
        <input
          className={styles.submit_btn}
          type='submit'
          name='submit'
          value='Submit'
          disabled={isButtonDisabled}
          style={{
            pointerEvents: isButtonDisabled ? 'none' : 'auto',
            backgroundColor: isButtonDisabled ? 'orange' : '',
          }}
        />
        <div className={styles.message}>{validationMessage}</div>
      </motion.form>
    </div>
  );
};

export default PageTransition(Contact);
