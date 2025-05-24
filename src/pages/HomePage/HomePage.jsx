import styles from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import getFilm from '../../api';
import { useEffect, useState } from 'react';

export default function HomePage() {

  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function getTrendFilm() {
      let result;
      try {
        result = await getFilm();
        console.log("🚀 ~ getTrendFilm ~ result:", result)
      } catch {
        console.log('error')
      }
      setTrendMovies(result.data.results);
    }

    getTrendFilm();

  }, []
  );
  return (
    <>
      <h2 className={styles.head}>Trending today</h2>
      {trendMovies.length > 0 && <MovieList movies={trendMovies} />}

    </>
  );
}
