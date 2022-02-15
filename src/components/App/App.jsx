import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Navigation } from 'components/Navigation/Navigation';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('../../pages/HomePage').then(module => ({ default: module.HomePage }))
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage').then(module => ({ default: module.MoviesPage }))
);
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage').then(module => ({ default: module.MovieDetailsPage }))
);
const Cast = lazy(() =>
  import('../Cast/Cast').then(module => ({ default: module.Cast }))
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews').then(module => ({ default: module.Reviews }))
);

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />

      <Container>
        <Suspense fallback="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Container>
      
      <ToastContainer />
    </>
  );
};
