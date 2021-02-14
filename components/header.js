import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  return (
    <div className="bg-black px-4 flex flex-col sm:flex-row">
      <div className="flex align-center items-center flex-auto py-3">
        <span className="text-gray-300 font-bold text-sm sm:text-lg mr-4">
          <Link href="/">
            <a>NexTMoviE</a>
          </Link>
        </span>
        <form className="flex-auto">
          <input
            type="text"
            name="searchValue"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className=" w-full rounded-full py-2 px-3 text-sm sm:text-lg focus:outline-none bg-gray-300"
          />
        </form>
      </div>
      <div className="pb-3 sm:py-3 flex justify-center items-center">
        <ul className="text-gray-300 flex justify-center items-center">
          <li
            className={`mx-4 cursor-pointer ${
              router.pathname === "/movie"
                ? "border-white border-solid border-b text-white"
                : ""
            }`}
          >
            <Link href="/movie">
              <a>movie</a>
            </Link>
          </li>
          <li
            className={` ${
              router.pathname === "/tv"
                ? "border-white border-solid border-b text-white"
                : ""
            }`}
          >
            <Link href="/tv">
              <a>Tv Show</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
