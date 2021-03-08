import { getNowPlayingMovie } from "../api/movie";

const Movie = ({ nowPlayingList }) => {
  console.log(nowPlayingList);
  return <div>Movie Page</div>;
};

export const getServerSideProps = async () => {
  try {
    const {
      status,
      data: { results },
    } = await getNowPlayingMovie();
    if (status === 200) {
      return { props: { nowPlayingList: results } };
    }
    return { props: {} };
  } catch (error) {
    return {
      props: { error },
    };
  }
};

export default Movie;
