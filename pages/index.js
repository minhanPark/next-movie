import { instance } from "../api";

const Home = () => {
  return <h1 className="text-red-600 text-center">Hello Running Water!!!</h1>;
};

export const getServerSideProps = async () => {
  try {
    const {
      data: { results },
    } = await instance.get("/movie/top_rated", {
      params: { language: "en-US", page: 1 },
    });
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

export default Home;
