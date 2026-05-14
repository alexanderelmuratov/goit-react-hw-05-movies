import { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/App/App.styled';
import { getTrendingMovies, getMovieGenres } from 'services/moviesApi';

const FilterForm = styled.form`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  align-items: center;

  input[type="text"], input[type="number"], select {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: #ff6b01;
    }
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #ff6b01;
  }
`;

const LoadMoreBtn = styled.button`
  display: block;
  margin: 30px auto;
  padding: 12px 24px;
  background-color: #ff6b01;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e56000;
  }
`;

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchGenre, setSearchGenre] = useState('');
  const [searchYear, setSearchYear] = useState('');
  const [showWatchLaterOnly, setShowWatchLaterOnly] = useState(false);
  
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setUpdateTrigger(prev => prev + 1);
    window.addEventListener('moviesListUpdated', handleUpdate);
    return () => window.removeEventListener('moviesListUpdated', handleUpdate);
  }, []);

  // Fetch genres once on mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await getMovieGenres();
        setGenres(genresData.genres);
      } catch (error) {
        console.error("Failed to load genres", error);
      }
    };
    fetchGenres();
  }, []);

  // Fetch movies when page changes
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const moviesData = await getTrendingMovies(page);
        setMovies(prev => [...prev, ...moviesData.results]);
        setTotalPages(moviesData.total_pages);
      } catch (error) {
        setError(error);
        toast.error('Oops!...Something went wrong');
      } finally {
        setLoading(false);
      }      
    };
    fetchMovies();
  }, [page]);

  const filteredMovies = useMemo(() => {
    const watchLater = JSON.parse(localStorage.getItem('watchLater')) || [];
    
    return movies.filter(movie => {
      if (showWatchLaterOnly && !watchLater.includes(movie.id)) return false;
      
      const matchTitle = searchTitle === '' || movie.title.toLowerCase().includes(searchTitle.toLowerCase());
      const matchGenre = searchGenre === '' || (movie.genre_ids && movie.genre_ids.includes(Number(searchGenre)));
      const matchYear = searchYear === '' || (movie.release_date && movie.release_date.startsWith(searchYear));
      return matchTitle && matchGenre && matchYear;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, searchTitle, searchGenre, searchYear, showWatchLaterOnly, updateTrigger]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <PageTitle>Trending today</PageTitle>
      
      <FilterForm onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Search by title..." 
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <select 
          value={searchGenre} 
          onChange={(e) => setSearchGenre(e.target.value)}
        >
          <option value="">Any Genre</option>
          {genres.map(g => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>
        <input 
          type="number" 
          placeholder="Year" 
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
        />
        <CheckboxLabel>
          <input 
            type="checkbox" 
            checked={showWatchLaterOnly}
            onChange={(e) => setShowWatchLaterOnly(e.target.checked)}
          />
          Watch Later Only
        </CheckboxLabel>
      </FilterForm>

      {movies.length !== 0 && <MoviesList movies={filteredMovies} />}
      {loading && <Loader />}
      {!error && !loading && filteredMovies.length === 0 && <p>No movies found.</p>}
      
      {!loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
      )}
    </>
  );
};
