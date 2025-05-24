import styles from './MovieReviews.module.css';
import { useEffect, useState } from 'react';
import getFilm from '../../api';
import { useParams } from 'react-router-dom';
import { PuffLoader } from "react-spinners";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [filmReview, setFilmReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getFilmDetails(url, params) {
      let result;
      try {
        result = await getFilm(url, params);
      } catch {
        console.log('Error in MovieReview')
      } finally {
        setIsLoading(false);
      }
      setFilmReview(result.data)
    }
    getFilmDetails(`/movie/${movieId}/reviews`, {})
  }, [movieId])

  return (
    <div className={styles.container}>
      {isLoading ?
        <PuffLoader
          color="#8c66c5"
          cssOverride={{}}
          className={styles.loader} /> : (
          filmReview.results.length > 0 ? (
            <ul className={styles.reviewList}>
              {filmReview.results?.map(review => (
                <li key={review.id}>
                  <p className={styles.reviewAuthor}>Author: {review.author}</p>
                  <p className={styles.reviewContent}>"{review.content}"</p>
                </li>
              ))}
            </ul>
          ) : (<p className={styles.noReview}>No reviews</p>)
        )
      }
    </div >
  );
}
