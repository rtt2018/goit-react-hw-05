import styles from './MoviesItem.module.css';
import { Link, useLocation } from 'react-router-dom';
import { MdLocalMovies } from "react-icons/md";

export default function MoviesItem({ info }) {
  const location = useLocation();
  return (
    <li className={styles.container} key={info.id}>
      <Link to={`/movies/${info.id}`} state={location}>
        <div className={styles.card}>
          <div className={styles.thumb}>
            <div className={styles.owerlay}>
              <p>{info.title}</p>
              <p>{
                info.release_date === ''
                  ? ("Рік невідомий")
                  : (new Date(info.release_date).getFullYear())
              }</p>
              <p>Rating: {Number(info.vote_average).toFixed(2)}</p>
            </div>
            {info.poster_path === null
              ? <MdLocalMovies className={styles.movieIcon} />
              : <img src={(`https://image.tmdb.org/t/p/w500${info.poster_path}`)} alt="" />}



          </div>
        </div>
      </Link>
    </li>
  );
}
