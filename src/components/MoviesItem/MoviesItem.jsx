import styles from './MoviesItem.module.css';
import { Link } from 'react-router-dom';

export default function MoviesItem({ info }) {
  return (
    <li className={styles.container} key={info.id}>
      <Link to={`/movies/${info.id}`}>
        <div className={styles.card}>
          <div className={styles.thumb}>
            <div className={styles.owerlay}>
              <p>{info.title}</p>
              <p>{new Date(info.release_date).getFullYear()}</p>
              <p>Rating: {Number(info.vote_average).toFixed(2)}</p>
            </div>
            <img src={(`https://image.tmdb.org/t/p/w500${info.poster_path}`)} alt="" />

          </div>
        </div>
      </Link>
    </li>
  );
}
