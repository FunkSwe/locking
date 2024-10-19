import styles from './btn.module.scss';

const Btn = ({ title }) => {
  return <button className={styles.btn}>{title}</button>;
};

export default Btn;
