import { useEffect, useState } from "react";

const ImageSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
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
  // useEffect(() => {
  //   const [width, setWidth] = useState(window.innerWidth);

  //   console.log(window.innerWidth);
  // }, []);

  console.log(isMobile);
  return (
    <div className="bg-gray-500 flex" style={{ height: "50vh" }}>
      이미지 슬라이드
    </div>
  );
};

export default ImageSlider;
