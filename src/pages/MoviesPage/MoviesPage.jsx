import styles from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import Navigation from '../../components/Navigation/Navigation';

export default function MoviesPage() {
  return (
    <>
      <Navigation />
      <MovieList />

    </>
  );
}
