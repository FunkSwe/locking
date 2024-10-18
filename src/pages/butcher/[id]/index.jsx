import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Replacing usePathname and useRouter from Next.js
import { teacherData } from '@/assets/data/pageData';
import Bio from '@/components/bio/Bio';
import PageLoader from '@/components/page-loader/PageLoader';
import ImageReveal from '@/components/image-reveal/ImageReveal';
import styles from './teacherPage.module.scss';
import ScrollIndicator from '@/components/scrolldown/ScrollIndicator';
import Button from '@/components/button/Button';
import { motion } from 'framer-motion';

const Teacher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); // Replacing usePathname with useParams to get the teacher ID from the URL
  const navigate = useNavigate(); // Replacing useRouter with useNavigate for navigation

  useEffect(() => {
    // Simulate an asynchronous data fetch
    const fetchData = async () => {
      try {
        // Assuming teacherData is static or fetched from an API
        const fetchedData = await teacherData.slice(0, 5);
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div className={styles.teacher}>
      <motion.div
        className={styles.btn_container}
        onClick={() => navigate('/')} // Using navigate for routing back
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 3 }}
      >
        <Button title='Go Back'></Button>
      </motion.div>
      {!loading && (
        <>
          {data &&
            data.map((item) => {
              if (Number(id) === item.id) {
                // Matching the id from useParams
                return (
                  <div key={item.id}>
                    <PageLoader title={item.title} setLoading={setLoading} />
                    <ImageReveal
                      name={item.name}
                      country={item.country}
                      img={item.img}
                    />
                    <Bio
                      title={item.title}
                      subtitle={item.subtitle}
                      desc={item.desc}
                    />
                  </div>y
                
                );
              }
              return null;
            })}
        </>
      )}
      <div className={styles.scroll_wrapper}>
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Teacher;
