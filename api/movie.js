import { instance } from "./index";

export const getMovieDetail = (movieId) => instance.get(`/movie/${movieId}`);

export const getMovieRecommendations = (movieId) =>
  instance.get(`/movie/${movieId}/recommendations`);

export const getLatestMovie = () => instance.get("/movie/latest");

export const getPopularMovie = () => instance.get("/movie/popular");

export const searchMovie = (searchValue) =>
  instance.get("/search/movie", {
    params: { query: searchValue },
  });
