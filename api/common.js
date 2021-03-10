export const getImage = ({ isPoster = false, path }) =>
  `https://image.tmdb.org/t/p/${isPoster ? `w500/${path}` : `w1280/${path}`}`;
