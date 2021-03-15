import { getMovieDetail, getMovieRecommendations } from "../../api/movie";

const MovieDetail = ({ movieData, recommendationData }) => {
  console.log(movieData);
  console.log(recommendationData);
  return (
    <div>
      <h1>무비 디테일</h1>
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
