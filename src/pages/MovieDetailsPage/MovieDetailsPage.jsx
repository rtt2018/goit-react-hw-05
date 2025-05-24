import styles from './MovieDetailsPage.module.css';
import { Outlet, useParams, NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, Suspense } from 'react';
import getFilm from '../../api';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { PuffLoader } from "react-spinners";


export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [filmDetail, setFilmDetail] = useState([]);
  const location = useLocation();
  const backNav = useRef(location.state);

  useEffect(() => {
    async function getFilmDetails(url, params) {
      let result;
      try {
        result = await getFilm(url, params);
      } catch {
        console.log('error')
      }
      setFilmDetail(result.data)
    }
    getFilmDetails(`/movie/${movieId}`, {})
  }, [movieId])


  return (
    <div >
      <div className={styles.container}>
        <Link to={backNav.current} className={styles.backLink}>
          <MdOutlineArrowBackIos className={styles.backLinkSvg} /><h2 className={styles.head}>Details</h2>
        </Link>
        <div className={styles.filmInfo}>
          <div className={styles.card}>
            <div className={styles.thumb}>
              <img src={(`https://image.tmdb.org/t/p/w500${filmDetail.poster_path}`)} alt="" />
            </div>
          </div>
          <div className={styles.filmDescription}>
            <h3 className={styles.filmTitle}>{filmDetail.title}</h3>
            <p className={styles.tagLine}>{filmDetail.tagline}</p>
            <p className={styles.overview}>{filmDetail.overview}</p>
            <hr />
            <p className={styles.tagLine}>Дата виходу: {new Date(filmDetail.release_date).toLocaleDateString('uk-UA', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}</p>
            <p className={styles.tagLine}>Жанр: {filmDetail.genres?.map(film => film.name).join(', ')}</p>
            <p className={styles.tagLine}>Рейтинг: <span >{Number(filmDetail.popularity).toFixed(1)}</span></p>
            <p className={styles.tagLine}>Тривалість: {Math.floor(filmDetail.runtime / 60)}:{String(filmDetail.runtime % 60).padStart(2, '0')}</p>
          </div>
        </div>
        <div>
          <hr />
          <div className={styles.linkContainer}>
            <NavLink to={`/movies/${movieId}/cast`} className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>Cast</NavLink>
            <NavLink to={`/movies/${movieId}/reviews`} className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>Reviews</NavLink>
          </div>
          <hr />
        </div>
      </div>
      <Suspense fallback={<PuffLoader
        color="#8c66c5"
        cssOverride={{}}
        className='loader' />
      }>
        <Outlet />
      </Suspense>
    </div >
  );
}
