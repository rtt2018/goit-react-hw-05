import styles from './MovieList.module.css';
import MoviesItem from '../MoviesItem/MoviesItem';

export default function MovieList({ movies }) {

  return (
    <>
      {movies && (
        <div className={styles.container}>
          <ul className={styles.moviesList}>
            {movies.map(movie => <MoviesItem key={movie.id} info={movie} />)}
          </ul>
        </div>
      )
      }
    </>
  );
}
