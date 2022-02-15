import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Searchbar } from 'components/Searhbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/App/App.styled';
import { getSearchMovies } from 'services/moviesApi';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { results } = await getSearchMovies(query);
        if (results.length === 0) {
          return toast.error('Sorry, there are no movies. Please try again!');
        }
        setMovies(results);
        console.log(results);
      } catch (error) {
        setError(error);
        toast.error('Oops!...Something went wrong');
      } finally {
        setLoading(false);
      }      
    };
    fetchMovies();
  }, [query]);

  const handleSearch = searchQuery => {
    if (searchQuery === query) return;
    setSearchParams({query: searchQuery});
    setQuery(searchQuery);  
    setMovies([]);
    setError(null);
  };

  return (
    <>
      <PageTitle>Find you movie</PageTitle>      
      <Searchbar onSubmit={handleSearch} />
      {loading && <Loader />}
      {!error && movies.length !== 0 && <MoviesList movies={movies} />}
    </>
  );
};
