import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { GiFilmSpool } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import { MdWatchLater, MdOutlineWatchLater, MdNotInterested, MdOutlineNotInterested } from 'react-icons/md';
import { getMovieGenres } from 'services/moviesApi';
import { 
  StyledList, 
  StyledListItem, 
  StyledLink, 
  MoviePoster, 
  MovieInfo, 
  MovieTitle, 
  MovieMeta,
  BadgesContainer, 
  Badge,
  ButtonsContainer,
  ActionBtn
} from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const [genresMap, setGenresMap] = useState({});
  const [watchLater, setWatchLater] = useState(() => JSON.parse(localStorage.getItem('watchLater')) || []);
  const [notInterested, setNotInterested] = useState(() => JSON.parse(localStorage.getItem('notInterested')) || []);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { genres } = await getMovieGenres();
        const map = genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});
        setGenresMap(map);
      } catch (error) {
        console.error("Failed to fetch genres", error);
      }
    };
    fetchGenres();
  }, []);

  const toggleWatchLater = (e, id) => {
    e.preventDefault();
    let next = watchLater.includes(id) ? watchLater.filter(i => i !== id) : [...watchLater, id];
    setWatchLater(next);
    localStorage.setItem('watchLater', JSON.stringify(next));
    window.dispatchEvent(new Event('moviesListUpdated'));
  };

  const toggleNotInterested = (e, id) => {
    e.preventDefault();
    let next = notInterested.includes(id) ? notInterested.filter(i => i !== id) : [...notInterested, id];
    setNotInterested(next);
    localStorage.setItem('notInterested', JSON.stringify(next));
    window.dispatchEvent(new Event('moviesListUpdated'));
  };

  const visibleMovies = movies.filter(movie => !notInterested.includes(movie.id));

  return (
    <StyledList>
      {visibleMovies.map(movie => (
        <StyledListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MoviePoster 
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/100x150?text=No+Poster'} 
              alt={movie.title} 
            />
            <MovieInfo>
              <MovieTitle>
                <GiFilmSpool style={{ width: 15, height: 15, marginRight: '10px'}} />
                {movie.title}
              </MovieTitle>
              <MovieMeta>
                <span>
                  <AiFillStar style={{ color: '#ffb400', marginRight: '4px' }} />
                  {movie.popularity ? movie.popularity.toFixed(1) : 'N/A'}
                </span>
                <span>Year: {movie.release_date ? movie.release_date.substring(0,4) : 'N/A'}</span>
              </MovieMeta>
              {movie.genre_ids && movie.genre_ids.length > 0 && (
                <BadgesContainer>
                  {movie.genre_ids.map(id => genresMap[id] && (
                    <Badge key={id}>{genresMap[id]}</Badge>
                  ))}
                </BadgesContainer>
              )}
              <ButtonsContainer>
                <ActionBtn 
                  active={watchLater.includes(movie.id)} 
                  onClick={(e) => toggleWatchLater(e, movie.id)}
                >
                  {watchLater.includes(movie.id) ? <MdWatchLater size={16} /> : <MdOutlineWatchLater size={16} />}
                  {watchLater.includes(movie.id) ? 'In Watch Later' : 'Watch Later'}
                </ActionBtn>
                <ActionBtn 
                  danger 
                  active={notInterested.includes(movie.id)}
                  onClick={(e) => toggleNotInterested(e, movie.id)}
                >
                  {notInterested.includes(movie.id) ? <MdNotInterested size={16} /> : <MdOutlineNotInterested size={16} />}
                  Not Interested
                </ActionBtn>
              </ButtonsContainer>
            </MovieInfo>
          </StyledLink>
        </StyledListItem>
      ))}
    </StyledList>    
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
