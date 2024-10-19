import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
('');
import Bio from '@/components/bio/Bio';
import PageLoader from '@/components/page-loader/PageLoader';
import ImageReveal from '@/components/image-reveal/ImageReveal';
import styles from './teacherPage.module.scss';
import ScrollIndicator from '@/components/scrolldown/ScrollIndicator';
import Btn from '@/components/btn/Btn';
import { motion } from 'framer-motion';
import { teacherData } from '@/assets/data/pageData';

const Teacher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate an asynchronous data fetch
    const fetchData = async () => {
      try {
        // Assuming teacherData is static or fetched from an API
        const fetchedData = await teacherData.slice(0, 6);
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
        <Btn title='Go Back'></Btn>
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
                  </div>
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
