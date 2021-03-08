import { instance, instancs } from "./index";

export const getTvDetail = (tvId) => instance.get(`/tv/${tvId}`);

export const getTvRecommendations = (tvId) =>
  instance.get(`/tv/${tvId}/recommendations`);

export const getOnTheAir = () => instance.get("/tv/on_the_air");

export const getPopularTv = () => instance.get("/tv/popular");

export const searchTv = (searchValue) =>
  instance.get("/search/tv", {
    params: { query: searchValue },
  });
