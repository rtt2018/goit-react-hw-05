import styles from './HomePage.module.css';
import Navigation from '../../components/Navigation/Navigation';
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
      <Navigation />
      {trendMovies.length > 0 && <MovieList movies={trendMovies} />}

    </>
  );
}
