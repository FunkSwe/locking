/* eslint-disable react/prop-types */
import { HashLink } from 'react-router-hash-link';

// styles
import styles from './link.module.scss';

const HashLinkBtn = ({ href, title }) => {
  return (
    <HashLink to={`${href}`} className={styles.link}>
      {title}
    </HashLink>
  );
};

export default HashLinkBtn;
