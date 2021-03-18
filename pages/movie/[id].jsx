import { getMovieDetail, getMovieRecommendations } from "../../api/movie";
import { getImage } from "../../api/common";
import Movie from "../../components/Movie";

const MovieDetail = ({ movieData, recommendationData }) => {
  return (
    <div
      className="bg-cover bg-center relative flex justify-center items-center"
      style={{
        height: "90vh",
        backgroundImage: `url(${getImage({ path: movieData.backdrop_path })})`,
      }}
    >
      <div className="bg-gray-400 absolute w-full h-full bg-opacity-70"></div>
      <div className="relative p-9 flex flex-col sm:flex-row">
        <div className="w-96">
          <img src={getImage({ path: movieData.poster_path })} />
        </div>
        <div className="w-1/2 p-5">
          <h1 className="font-bold text-3xl mb-6">{movieData.title}</h1>
          <p className="text-xl">{movieData.overview}</p>
          <p className="text-yellow-300 font-semibold my-3">
            Vote {movieData.vote_average} / 10
          </p>
          <p className="font-semibold">
            <span className="text-green-300">Genres:</span>
            {movieData.genres.reduce(
              (acc, currentVal, index) =>
                acc +
                `${
                  index === 0 ? ` ${currentVal.name}` : `, ${currentVal.name}`
                }`,
              ""
            )}
          </p>
          <div>
            <h2 className="my-3 font-semibold text-xl pt-2 border-black border-t-2">
              연관 추천작
            </h2>
            <div className="flex justify-around">
              {recommendationData.map((movie) => (
                <Movie info={movie} key={movie.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  try {
    const { status, data: movieData } = await getMovieDetail(id);
    const {
      status: recommendationStatus,
      data: recommendationData,
    } = await getMovieRecommendations(id);
    if (status === 200 && recommendationStatus === 200) {
      return {
        props: {
          movieData,
          recommendationData: recommendationData.results.slice(0, 4),
        },
      };
    }
    return {
      props: {
        ...(status === 200 && { movieData }),
        ...(recommendationStatus === 200 && {
          recommendationData: recommendationData.results.slice(0, 4),
        }),
      },
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};

export default MovieDetail;
