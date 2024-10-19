import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const LinkBtn = ({ title, link }) => {
  return (
    <Link to={link} className={styles.btn}>
      {title}
    </Link>
  );
};

export default LinkBtn;
