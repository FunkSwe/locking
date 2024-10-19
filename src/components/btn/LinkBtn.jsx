import Link from "next/link";
import styles from './button.module.scss'

const LinkBtn = ({title, link}) => {
  return (
      <Link href={link} className={styles.btn}>{title}</Link>
  )
}

export default LinkBtn