import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { ReviewItem, ReviewAuthor, ReviewPublished, ReviewText } from './Rewiews.styled';
import { getMovieReviews } from 'services/moviesApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const { results } = await getMovieReviews(movieId);
        if (results.length === 0) {
          return toast.info('We have no rewievs for this movie!');
        }
        setReviews(results);
      } catch (error) {
        setError(error);
        toast.error('Oops!...Something went wrong');
      } finally {
        setLoading(false);
      }      
    };
    fetchReviews();
  }, [movieId]);  

  return (
    <>
      {loading && <Loader />}
      {!error && reviews && (
        <ul>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewAuthor>Author: {review.author}</ReviewAuthor>
              <ReviewPublished>Published: {new Date(review.created_at).toDateString()}</ReviewPublished>
              <ReviewText>{review.content}</ReviewText>              
            </ReviewItem>
          ))}
        </ul>
      )}  
    </>
  );
};
