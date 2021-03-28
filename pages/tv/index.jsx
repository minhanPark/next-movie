import Link from "next/link";
import { getOnTheAir, getPopularTv } from "../../api/tv";
import { getImage } from "../../api/common";
import ImageSlider from "../../components/imageSlider";

const TvPage = ({ onTheAirList, popularList }) => {
  return (
    <div>
      <ImageSlider list={onTheAirList} isMovie={false} />
      <h2 className="text-3xl my-8 px-3 font-bold">Tv Show</h2>
      <div className="grid grid-cols-3 gap-2">
        {popularList.map((tv) => (
          <Link href={`/tv/${tv.id}`} key={tv.id}>
            <a>
              <div className="w-full relative group">
                <div className="bg-gray-400 bg-opacity-60 py-3 w-full text-center absolute bottom-2 group-hover:bg-opacity-100">
                  <h3 className="group-hover:text-white group-hover:font-bold text-2xl">
                    {tv.name}
                  </h3>
                </div>
                <div>
                  <img src={`${getImage({ path: tv.poster_path })}`} />
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
    } = await getOnTheAir();

    const {
      status: popularStatus,
      data: { results: popularResults },
    } = await getPopularTv();

    if (status === 200 && popularStatus === 200) {
      return { props: { onTheAirList: results, popularList: popularResults } };
    }
    return {
      props: {
        ...(status === 200 && { onTheAirList: results }),
        ...(popularStatus === 200 && { popularList: popularResults }),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
};

export default TvPage;
