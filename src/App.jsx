import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import './App.css'
import { lazy, Suspense } from "react";
import { PuffLoader } from "react-spinners";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))


function App() {

  return (
    <>
      <Navigation />
      <Suspense fallback={<PuffLoader
        color="#8c66c5"
        cssOverride={{}}
        className='loader' />
      } >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
