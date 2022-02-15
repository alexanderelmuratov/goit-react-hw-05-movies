import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { GiFilmSpool } from 'react-icons/gi';
import { StyledList, StyledListItem, StyledLink } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(movie => (
        <StyledListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <GiFilmSpool style={{ width: 15, height: 15, marginRight: '10px'}} />
            {movie.title}
          </StyledLink>
        </StyledListItem>
      ))}
    </StyledList>    
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
