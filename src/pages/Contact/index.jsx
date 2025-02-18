import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast'; // Added Toaster import
import { motion } from 'framer-motion';
import { FcCheckmark } from 'react-icons/fc';
import PageTransition from '@/components/PageTransition';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Question', // Fixed subject
    message: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const navigate = useNavigate();
  const form = useRef();
  const recaptchaRef = useRef();

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Question',
      message: '',
    });
    form.current.reset();
    setRecaptchaToken(null);
  };

  const validateFields = () => {
    const { name, email, message } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
      toast.error('Name must be at least 3 characters long.');
      return false;
    }

    if (!emailPattern.test(email)) {
      toast.error(
        'Please enter a valid email address (e.g., example@example.com).'
      );
      return false;
    }

    if (message.length < 20) {
      toast.error('Message must be at least 20 characters long.');
      return false;
    }

    if (!recaptchaToken) {
      toast.error('Please complete the reCAPTCHA.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      setIsButtonDisabled(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_SENDER_ID,
          import.meta.env.VITE_TEMP_ID,
          form.current,
          import.meta.env.VITE_KEY
        )
        .then(
          (result) => {
            resetForm();
            toast.success(
              'Thank you for reaching out to Funkcamp! We will get back to you soon.'
            );
            recaptchaRef.current.reset();

            setTimeout(() => {
              navigate('/funkcamp');
            }, 5000);
          },
          (error) => {
            console.error(error.text);
            toast.error('Failed to send message, please try again.');
          }
        )
        .finally(() => setIsButtonDisabled(false));
    }
  };

  const onReCAPTCHAChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div className={styles.contact}>
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
      >
        Contact
      </motion.h2>
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
      >
        Funkcamp
      </motion.h2>
      <section className='px-12 md:px-20 mb-40'>
        <p className='max-w-xl pt-8 text-lg leading-7 md:text-xl'>
          Have a question about Funkcamp? Feel free to send us your inquiry.
        </p>
      </section>
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
            value={formData.name}
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
            value={formData.email}
            onChange={onChangeHandler}
            required
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        <label>Message</label>
        <div className={styles.input_field}>
          <textarea
            name='message'
            value={formData.message}
            onChange={onChangeHandler}
            minLength={20}
            maxLength={200}
            required
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        {/* Hidden subject field */}
        <input type='hidden' name='subject' value={formData.subject} />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
          className={styles.recaptcha}
        />
        <input
          className={styles.submit_btn}
          type='submit'
          value='Submit'
          disabled={isButtonDisabled}
          style={{
            pointerEvents: isButtonDisabled ? 'none' : 'auto',
            backgroundColor: isButtonDisabled ? 'orange' : '',
          }}
        />
      </motion.form>
      {/* Toaster for displaying toast notifications */}
      <Toaster />
    </div>
  );
};

export default PageTransition(Contact);
