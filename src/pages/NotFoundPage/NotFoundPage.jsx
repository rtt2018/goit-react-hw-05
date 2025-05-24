import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from "react-icons/md";


export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <Link to={'/'} className={styles.backLink}>
        <MdOutlineArrowBackIos className={styles.backLinkSvg} /><p className={styles.desc}>404....  Йой! Тут нічого немає. Повернутись на головну </p>
      </Link>
    </div>
  );
}
