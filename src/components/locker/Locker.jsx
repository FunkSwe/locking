import IMG from '/Locker_base.gif';
import styles from './Locker.module.scss';

export default function Locker() {
  return (
    <div className={styles.locker}>
      <img src={IMG} alt='gif locker' className='h-full w-full' />
    </div>
  );
}
