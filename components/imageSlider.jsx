import Link from "next/link";
import { useEffect, useState } from "react";
import { getImage } from "../api/common";

const ImageSlider = ({ list, isMovie = true }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index >= list.length - 1) {
        console.log("worked");
        setIndex(0);
      } else {
        setIndex((current) => current + 1);
      }
      // setCurrentMovie(list[index]);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [index]);
  // Next.js에서는 window를 잡으려고 하면 아래와 같이 처리해야함 아니면 서버 사이드 렌더링을 할 때 window not found가 됨
  if (global.window && typeof window !== undefined) {
    const [width, setWidth] = useState(window.innerWidth);
    const setWindowWidth = () => {
      setWidth(window.innerWidth);
      console.log(width);
      width < 780 ? setIsMobile(true) : setIsMobile(false);
    };

    useEffect(() => {
      window.addEventListener("resize", setWindowWidth);
      return () => {
        window.removeEventListener("resize", setWindowWidth);
      };
    }, [window.innerWidth]);
  }
  return list.length === 0
    ? null
    : list.map((movie, i) => (
        <div className={`${index === i ? "" : "hidden"}`} key={movie.id}>
          <Link href={isMovie ? `/movie/${movie.id}` : `/tv/${movie.id}`}>
            <a>
              <div
                className="bg-center bg-cover relative"
                style={{
                  backgroundImage: `url(${getImage({
                    path: movie.backdrop_path,
                  })})`,
                  height: isMobile ? "30vh" : "40vh",
                }}
              >
                <div className="bg-gray-400 w-full h-full bg-opacity-80 absolute z-0"></div>
                <div className="z-10 relative h-full">
                  <div className="h-full p-4 flex items-center">
                    <div className="h-full pr-7">
                      <img
                        className="h-full"
                        src={`${getImage({
                          isPoster: true,
                          path: movie.poster_path,
                        })}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-3xl">
                        {movie.original_title} 보러가기 &rarr;
                      </h3>
                      <h4 className="font-semibold text-xl mt-3">
                        {movie.release_date
                          ? `개봉일: ${movie.release_date}`
                          : `첫 방영일: ${movie.first_air_date}`}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ));
};

export default ImageSlider;
