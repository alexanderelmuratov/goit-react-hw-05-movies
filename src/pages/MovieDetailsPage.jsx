import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { MovieAddInfo } from 'components/MovieAddInfo/MovieAddInfo';
import { getMovieDetails } from 'services/moviesApi';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        setError(error);
        toast.error('Oops!...Something went wrong');
      } finally {
        setLoading(false);
      }      
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!error && movie && (
        <>
          <GoBackLink />
          <MovieInfo movie={movie} />          
          <MovieAddInfo />
        </>
      )}
    </>
  );
};
