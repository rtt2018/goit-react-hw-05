import styles from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import getFilm from '../../api';
import { useParams } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { PuffLoader } from "react-spinners";


export default function MovieCast() {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getFilmDetails(url, params) {
      let result;
      try {
        result = await getFilm(url, params);
      } catch {
        console.log('Error in MovieCast')
      } finally {
        setIsLoading(false);
      }
      setFilmCast(result.data)
    }
    getFilmDetails(`/movie/${movieId}/credits`, {})
  }, [movieId])

  return (
    <div className={styles.container}>
      {isLoading ?
        <PuffLoader
          color="#8c66c5"
          cssOverride={{}}
          className={styles.loader} /> : (
          filmCast.cast.length > 0 ? (
            <div className={styles.container}>
              <ul className={styles.moviesList}>
                {filmCast.cast?.map(actor => (
                  <li key={actor.id}>
                    <div className={styles.card}>
                      <div className={styles.thumb}>
                        {actor.profile_path === null ? <FaUser className={styles.svdIcon} /> : <img src={(`https://image.tmdb.org/t/p/w500${actor.profile_path}`)} alt="" />}
                      </div>
                    </div>
                    <p className={styles.actorName}>{actor.name}</p>
                    <p className={styles.role}>"{actor.character}"</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (<p className={styles.noCast}>No casts</p>)
        )
      }
    </div>
  );
}
