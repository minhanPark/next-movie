import { getImage } from "../api/common";

const Movie = ({ info }) => {
  return (
    <div className="w-1/5 relative group">
      <div className="bg-gray-400 bg-opacity-60 py-3 w-full text-center absolute bottom-2 group-hover:bg-opacity-100">
        <h3 className="group-hover:text-white group-hover:font-bold">
          {info.title || info.name}
        </h3>
      </div>
      <div>
        <img src={`${getImage({ path: info.poster_path })}`} />
      </div>
    </div>
  );
};

export default Movie;
