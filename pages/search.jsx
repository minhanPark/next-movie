import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { searchMovie } from "../api/movie";
import { searchTv } from "../api/tv";
import { getImage } from "../api/common";

const Search = ({ movies, tvShows }) => {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="py-5">
      <h1 className="text-2xl mt-5 p-4">영화 검색 결과</h1>
      <div className="flex justify-center">
        {movies.length === 0 ? (
          <div>
            <h2 className="text-xl mx-2 p-3">검색 결과가 없습니다.</h2>
          </div>
        ) : (
          <div className="mb-20 w-4/5">
            <Slider {...setting}>
              {movies.map((movie) => (
                <div key={movie.id} className="flex justify-center">
                  <img
                    src={getImage({ isPoster: true, path: movie.poster_path })}
                    style={{ margin: "auto" }}
                  />
                  <h3 className="text-center text-xl mb-2">{movie.title}</h3>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
      <h1 className="text-2xl mt-5 p-4">TV 검색 결과</h1>
      <div className="flex justify-center">
        {tvShows.length === 0 ? (
          <div>
            <h2 className="text-xl mx-2 p-3">검색 결과가 없습니다.</h2>
          </div>
        ) : (
          <div className="mb-20 w-4/5">
            <Slider {...setting}>
              {tvShows.map((tv) => (
                <div key={tv.id} className="flex justify-center">
                  <img
                    src={getImage({ isPoster: true, path: tv.poster_path })}
                    style={{ margin: "auto" }}
                  />
                  <h3 className="text-center text-xl mb-2">{tv.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const { name } = query;
    const {
      data: { results },
      status,
    } = await searchMovie(name);
    const {
      data: { results: tvResults },
      status: tvStatus,
    } = await searchTv(name);
    if (status === 200 && tvStatus === 200) {
      return {
        props: {
          movies: results,
          tvShows: tvResults,
        },
      };
    }
    return {
      props: {
        ...(status === 200 && { movies: results }),
        ...(tvStatus === 200 && { tvShows: tvResults }),
      },
    };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
};

export default Search;
