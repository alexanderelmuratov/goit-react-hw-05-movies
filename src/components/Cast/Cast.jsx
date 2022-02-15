import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { CastList, CastItem, CastImage, ActorText, CharacterText } from './Cast.styled';
import { getMovieCast } from 'services/moviesApi';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const { cast } = await getMovieCast(movieId);
        if (cast.length === 0) {
          return toast.info('We have no cast for this movie!');
        }
        setCast(cast);
      } catch (error) {
        setError(error);
        toast.error('Oops!...Something went wrong');
      } finally {
        setLoading(false);
      }      
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!error && cast && (
        <CastList>
          {cast.map(item => (
            item.profile_path && (
              <CastItem key={item.id}>
                <CastImage
                  src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                  alt={item.name}
                />
                <ActorText>{item.name}</ActorText>
                <CharacterText>Character: {item.character}</CharacterText>
              </CastItem>
            )
          ))}
        </CastList>
      )}  
    </>
  );
};
