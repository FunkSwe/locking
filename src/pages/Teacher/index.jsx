import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

  // Load data (fetch if it would be api)
  useEffect(() => {
    setData(teacherData.slice(0, 6));
    setLoading(false);
  }, []);

  if (loading) {
    return <PageLoader title='Loading...' setLoading={setLoading} />;
  }

  // Find the teacher by id using data in a js file
  const teacher = data.find((item) => Number(id) === item.id);

  // Handle if no teacher is found
  if (!teacher) {
    return <div>No teacher found</div>;
  }

  return (
    <div className={styles.teacher}>
      <motion.div
        className={styles.btn_container}
        onClick={() => navigate('/funkcamp')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 3 }}
      >
        <Btn title='Go Back' />
      </motion.div>

      <PageLoader title={teacher.title} setLoading={setLoading} />
      <ImageReveal
        name={teacher.name}
        country={teacher.country}
        img={teacher.img}
      />
      <Bio
        title={teacher.title}
        subtitle={teacher.subtitle}
        desc={teacher.desc}
      />

      <div className={styles.scroll_wrapper}>
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Teacher;
