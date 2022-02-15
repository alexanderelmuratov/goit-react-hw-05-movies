import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b4f947b22bfa1d671304279be6575e1f';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data;
};

// ================================
// список самых популярных фильмов на сегодня для создания коллекции на главной странице
// https://api.themoviedb.org/3/trending/movie/week?api_key=b4f947b22bfa1d671304279be6575e1f

// поиск кинофильма по ключевому слову на странице фильмов
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=query&page=1

// запрос полной информации о фильме для страницы кинофильма
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>

// запрос информации о актёрском составе для страницы кинофильма
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>

// запрос обзоров для страницы кинофильма
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1