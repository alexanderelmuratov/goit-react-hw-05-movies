import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/App/App.styled';
import { getTrendingMovies } from 'services/moviesApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
        toast.error('Oops!...Something went wrong');
      } finally {
        setLoading(false);
      }      
    };
    fetchMovies();
  }, []);

  return (
    <>
      <PageTitle>Trending today</PageTitle>
      {loading && <Loader />}
      {!error && movies.length !== 0 && <MoviesList movies={movies} />}
    </>
  );
};
