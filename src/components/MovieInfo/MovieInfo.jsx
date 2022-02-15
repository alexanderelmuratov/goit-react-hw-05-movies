import PropTypes from 'prop-types';
import { PageTitle } from "components/App/App.styled";
import { MovieCard, MovieImage, MovieText } from "./MovieInfo.styled";

export const MovieInfo = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } = movie;
  return (    
    <div>
      
      <MovieCard>
        <MovieImage src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
        <div>  
          <PageTitle>{`${title} (${release_date.slice(0, 4)})`}</PageTitle>
          <MovieText>{`User score: ${vote_average * 10}%`}</MovieText>
          <h2>Overview</h2>
          <MovieText>{overview}</MovieText>
          <h3>Genres</h3>
          <MovieText>{genres.map(genre => genre.name).join(', ')}</MovieText>
        </div>
      </MovieCard>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.node.isRequired,
};
