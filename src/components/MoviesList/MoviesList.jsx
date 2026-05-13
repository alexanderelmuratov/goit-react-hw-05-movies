import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { GiFilmSpool } from 'react-icons/gi';
import { getMovieGenres } from 'services/moviesApi';
import { 
  StyledList, 
  StyledListItem, 
  StyledLink, 
  MoviePoster, 
  MovieInfo, 
  MovieTitle, 
  BadgesContainer, 
  Badge 
} from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const [genresMap, setGenresMap] = useState({});

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

  return (
    <StyledList>
      {movies.map(movie => (
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
              {movie.genre_ids && movie.genre_ids.length > 0 && (
                <BadgesContainer>
                  {movie.genre_ids.map(id => genresMap[id] && (
                    <Badge key={id}>{genresMap[id]}</Badge>
                  ))}
                </BadgesContainer>
              )}
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
