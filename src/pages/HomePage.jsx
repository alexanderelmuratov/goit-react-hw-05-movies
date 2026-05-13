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

  input, select {
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

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchGenre, setSearchGenre] = useState('');
  const [searchYear, setSearchYear] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [moviesData, genresData] = await Promise.all([
          getTrendingMovies(),
          getMovieGenres()
        ]);
        setMovies(moviesData.results);
        setGenres(genresData.genres);
      } catch (error) {
        setError(error);
        toast.error('Oops!...Something went wrong');
      } finally {
        setLoading(false);
      }      
    };
    fetchData();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchTitle = searchTitle === '' || movie.title.toLowerCase().includes(searchTitle.toLowerCase());
      const matchGenre = searchGenre === '' || (movie.genre_ids && movie.genre_ids.includes(Number(searchGenre)));
      const matchYear = searchYear === '' || (movie.release_date && movie.release_date.startsWith(searchYear));
      return matchTitle && matchGenre && matchYear;
    });
  }, [movies, searchTitle, searchGenre, searchYear]);

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
      </FilterForm>

      {loading && <Loader />}
      {!error && filteredMovies.length !== 0 && <MoviesList movies={filteredMovies} />}
      {!error && !loading && filteredMovies.length === 0 && <p>No movies found.</p>}
    </>
  );
};
