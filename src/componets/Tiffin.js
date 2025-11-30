import React from "react";
import {
  GIT_ICON,
  LIVE_DEMO_ICON,
  Tiffin_Github,
  Tiffin_URL,
} from "../utilis/constant";
import { Link } from "react-router-dom";
import YT_IMG from "../utilis/xyz.png";

const Tiffin = () => {
  return (
    <div className="mb-32 mt-20 mx-auto md:w-[1000px] w-11/12 hover:border-4 border-white hover:scale-110 duration-500 ">
        <div className="md:flex">
      <div className="md:m-4 md:p-4 p-2 m-2 md:w-1/2">
          <p className="font-extrabold text-3xl font-serif mx-16">
          Tiffin
          </p>
                    <p className="font-thin italic mb-2 mx-16">Make your food cravings effortless!</p>

          <p className="h-auto font-bold">
            <p>Real-Time Restaurant Data!</p>
            <p>
              This app uses Swiggy’s Live API to fetch restaurant details instantly and
              offers a smooth, responsive UI.
            </p>
            <ul>
              <li>
                Redux Toolkit for managing the shopping cart.
              </li>
              <li>
               Conditional rendering for clean and dynamic UI updates.
              </li>
            </ul>
            <p>
             React top-loader and shimmer UI for better user experience.Fast, simple, and efficient — your food search made smarter!
            </p>
          </p>
          <ul className="flex">
            <li className="border rounded-lg shadow-sm px-2 shadow-gray-400 mx-12 my-2 font-bold h-7">
              React
            </li>
            <li className="border rounded-lg shadow-sm px-2 shadow-gray-400  my-2 font-bold h-7">
              Redux
            </li>
          </ul>
          <div className="mt-4 flex ">
          <Link to={Tiffin_Github} target="_blank">
            <p className="mx-2 font-bold text-lg">Code</p>
            </Link>
            <Link to={Tiffin_Github} target="_blank">
              <img
                className="h-6 mr-6  dark:bg-white dark:rounded-full"
                alt="github"
                title="repo"
                src={GIT_ICON}
              />
            </Link>
            <Link to={Tiffin_URL} target="_blank">
            <p className="mx-2 font-bold text-lg">Live Demo</p>
            </Link>
            <Link to={Tiffin_URL} target="_blank">
              <img
                className="h-6  dark:bg-white dark:rounded-full"
                alt="github"
                title="website"
                src={LIVE_DEMO_ICON}
              />
            </Link>
          </div>
        </div>
        <div className="md:m-4 md:p-4 p-2 m-2">
          <img
            alt="YT-Clone"
            src={YT_IMG}
            className="md:h-80 rounded-lg "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Tiffin;
