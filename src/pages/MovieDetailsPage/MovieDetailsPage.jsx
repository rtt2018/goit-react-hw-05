import styles from './MovieDetailsPage.module.css';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';


export default function MovieDetailsPage() {


  return (
    <div className={styles.container}>
      <Navigation />

      <Outlet />
    </div>
  );
}
