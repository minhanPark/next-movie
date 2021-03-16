import { getMovieDetail, getMovieRecommendations } from "../../api/movie";
import { getImage } from "../../api/common";

const MovieDetail = ({ movieData, recommendationData }) => {
  console.log(movieData);
  console.log(recommendationData);
  return (
    <div
      className="bg-cover bg-center relative"
      style={{
        height: "90vh",
        backgroundImage: `url(${getImage({ path: movieData.backdrop_path })})`,
      }}
    >
      <div className="bg-gray-400 absolute w-full h-full bg-opacity-70"></div>
      <div className="relative">
        <div className="w-96">
          <img src={getImage({ path: movieData.poster_path })} />
        </div>
        <h1>{movieData.title}</h1>
        <p>{movieData.overview}</p>
        <p>{movieData.vote_average}</p>
        <p>
          {movieData.genres.reduce(
            (acc, currentVal, index) =>
              acc + `${index === 0 ? currentVal.name : `, ${currentVal.name}`}`,
            ""
          )}
        </p>
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
