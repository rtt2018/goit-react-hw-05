import styles from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import getFilm from '../../api';
import { IoSearchOutline } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import { PuffLoader } from "react-spinners";
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [filmSearched, setFilmSearched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreIsVisible, setLoadMoreIsVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchparams, setSearchParams] = useSearchParams()

  const requestPhrase = searchparams.get('query') ?? '';

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchphrase = event.target.elements.searchField.value.trim();
    const newSearchparams = new URLSearchParams(searchparams);
    setPageNumber(1);
    setFilmSearched([])

    if (searchphrase === '') {
      toast.error("Please, enter something!", { duration: 2000 })
      newSearchparams.delete('query');
    } else {
      newSearchparams.set('query', searchphrase);
    }

    setSearchParams(newSearchparams)
    event.target.reset();
  }

  const loadMore = () => {
    setPageNumber(prevPageNum => prevPageNum + 1)
  }

  useEffect(() => {
    async function getSearchFilm(url, paramsObj) {
      let result;
      setIsLoading(true);
      try {
        result = await getFilm(url, paramsObj);
      } catch {
        console.log('Error in MovieCast')
      } finally {
        setIsLoading(false);
      }
      setFilmSearched((prevFilms) => [...prevFilms, ...result.data.results])

      if (result.data.total_pages > pageNumber) {
        setLoadMoreIsVisible(true);
      } else if (result.data.total_pages === pageNumber) {
        setLoadMoreIsVisible(false);
      }
    }
    getSearchFilm('/search/movie', {
      params: {
        query: requestPhrase,
        page: pageNumber,
      }
    })
  }, [requestPhrase, pageNumber])


  return (
    <>
      <Toaster
        toastOptions={{
          error: {
            duration: 2000,
          }
        }}
        position="top-right"
      />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            className={styles.searchField}
            name='searchField'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search film... "
          />
          <button type="submit" className={styles.searchButton}><IoSearchOutline className={styles.findIcon} /></button>
        </form>
      </div>
      <div className={styles.filmWrapper}>
        {isLoading ?? <PuffLoader
          color="#8c66c5"
          cssOverride={{}}
          className={styles.loader} />
        }
        {filmSearched.length > 0 && <MovieList movies={filmSearched} />}
      </div>
      {loadMoreIsVisible && <button type="button" onClick={loadMore} className={styles.LoadMoreBtn}>Load more</button>}

    </>
  );
}
