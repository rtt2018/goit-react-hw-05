import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>Movies</NavLink>
      </div>
    </footer >

  );
}
