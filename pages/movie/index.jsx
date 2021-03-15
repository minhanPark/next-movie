import { getImage } from "../../api/common";
import { getNowPlayingMovie } from "../../api/movie";
import ImageSlider from "../../components/imageSlider";

const Movie = ({ nowPlayingList }) => {
  return (
    <div>
      <ImageSlider list={nowPlayingList} />
      <h2>Movie</h2>
      {nowPlayingList.map((movie) => (
        <div>
          <img src={getImage({ path: movie.poster_path, isPoster: true })} />
        </div>
      ))}
    </div>
  );
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
