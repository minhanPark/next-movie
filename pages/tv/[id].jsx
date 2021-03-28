import { getImage } from "../../api/common";
import { getTvDetail, getTvRecommendations } from "../../api/tv";
import Movie from "../../components/Movie";

const TvDetail = ({ tvData, recommendataionData }) => {
  console.log(tvData);
  return (
    <div
      className="bg-cover bg-center relative flex justify-center items-center"
      style={{
        height: "90vh",
        backgroundImage: `url(${getImage({ path: tvData.backdrop_path })})`,
      }}
    >
      <div className="bg-gray-400 absolute w-full h-full bg-opacity-70"></div>
      <div className="relative p-9 flex flex-col sm:flex-row">
        <div className="w-96">
          <img src={getImage({ path: tvData.poster_path })} />
        </div>
        <div className="w-1/2 p-5">
          <h1 className="font-bold text-3xl mb-6">{tvData.name}</h1>
          <p className="text-xl">{tvData.overview}</p>
          <p className="text-yellow-300 font-semibold my-3">
            Vote {tvData.vote_average} / 10
          </p>
          <p className="font-semibold">
            <span className="text-green-300">Genres:</span>
            {tvData.genres.reduce(
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
              {recommendataionData.map((movie) => (
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
    const { status, data: tvData } = await getTvDetail(id);
    const {
      status: recommendationStatus,
      data: recommendataionData,
    } = await getTvRecommendations(id);
    if (status === 200 && recommendationStatus === 200) {
      return {
        props: {
          tvData,
          recommendataionData: recommendataionData.results.slice(0, 4),
        },
      };
    }
    return {
      props: {
        ...(status === 200 && { tvData }),
        ...(recommendationStatus === 200 && {
          recommendataionData: recommendataionData.results.slice(0, 4),
        }),
      },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};

export default TvDetail;
