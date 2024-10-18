import styles from './bio.module.scss';
import TextReveal from '@/components/PresentationCard/reveal/TextReveal';

const Bio = ({ title, subtitle, desc }) => {
  if (!title || !subtitle || !desc) {
    // If data is not available yet, return null or a loading indicator
    return null;
  }
  return (
    <div className={`${styles.bio}`}>
      <TextReveal>
        <h2 className={styles.title}>{title}</h2>
      </TextReveal>
      <TextReveal>
        <h2>{subtitle}</h2>
      </TextReveal>
      <TextReveal>
        <p>{desc}</p>
      </TextReveal>
    </div>
  );
};

export default Bio;
