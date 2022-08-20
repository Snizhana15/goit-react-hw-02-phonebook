import axios from 'axios';
import {
  normalizeMovies,
  normalizeMoviesDetails,
} from '../utils/normalization';

const API_KEY = 'fadee9dfff8cb6b1bff36771479589d6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  include_adult: false,
  language: 'en-US',
};

export const getPopularMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?`);
  const response = normalizeMovies(data.results);
  return response;
};

export const getMoviesById = async id => {
  const { data } = await axios.get(`/movie/${id}?`);
  const response = normalizeMoviesDetails(data);
  return response;
};

export const getMoviesBySearch = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}&page=1`);
  const response = normalizeMovies(data.results);
  return response;
};

export const getMoviesCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?`);
  return data.cast;
};

export const getMoviesReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?`);
  return data.results;
};
