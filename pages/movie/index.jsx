import { getImage } from "../../api/common";
import { getNowPlayingMovie, getPopularMovie } from "../../api/movie";
import ImageSlider from "../../components/imageSlider";
import Link from "next/link";

const MoviePage = ({ nowPlayingList, popularList }) => {
  return (
    <div>
      <ImageSlider list={nowPlayingList} />
      <h2 className="text-3xl my-8 px-3 font-bold">Movie</h2>
      <div className="grid grid-cols-3 gap-2">
        {popularList.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <a>
              <div className="w-full relative group">
                <div className="bg-gray-400 bg-opacity-60 py-3 w-full text-center absolute bottom-2 group-hover:bg-opacity-100">
                  <h3 className="group-hover:text-white group-hover:font-bold text-2xl">
                    {movie.title}
                  </h3>
                </div>
                <div>
                  <img src={`${getImage({ path: movie.poster_path })}`} />
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const {
      status,
      data: { results },
    } = await getNowPlayingMovie();

    const {
      status: popularStatus,
      data: { results: popularResult },
    } = await getPopularMovie();

    if (status === 200 && popularStatus === 200) {
      return { props: { nowPlayingList: results, popularList: popularResult } };
    }
    return {
      props: {
        ...(status === 200 && { nowPlayingList: results }),
        ...(popularStatus === 200 && { popularList: popularResult }),
      },
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
};

export default MoviePage;
