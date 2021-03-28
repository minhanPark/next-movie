import Link from "next/link";

const HomeLink = ({ name }) => {
  return (
    <Link href={name === "영화" ? "/movie" : "/tv"}>
      <a>
        <div className="hover:bg-gray-800 group h-96 flex justify-center items-center">
          <h2 className="font-semibold text-3xl group-hover:text-white">
            {name} 리스트 보러가기
          </h2>
        </div>
      </a>
    </Link>
  );
};

const Home = () => {
  return (
    <div>
      <HomeLink name="영화" />
      <div className="bg-gray-800 h-1" />
      <HomeLink name="TV" />
    </div>
  );
};

export default Home;
