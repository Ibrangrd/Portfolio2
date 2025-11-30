import React from "react";
import { Link } from "react-router-dom";
import {
  GIT_ICON,
  LIVE_DEMO_ICON,
  QrWeds_Github,
  QrWeds_URL,
} from "../utilis/constant";
import QrWedsPic from "../utilis/QrWedsPic.png";

const QrWeds = () => {
  return (
    <div className="mb-32 mt-20 mx-auto md:w-[1000px] w-11/12 hover:border-4 border-white hover:scale-110 duration-500 ">
      <div className="md:flex">
        <div className="md:m-4 md:p-4 p-2 m-2">
          <img
            alt="NetflixGPT"
            src={QrWedsPic}
            className="md:h-80  rounded-lg "
          ></img>
        </div>
        <div className="md:m-4 md:p-4 p-2 m-2 md:w-1/2">
          <p className="font-extrabold text-3xl font-serif mx-16">QR WEDS</p>
          <p className="font-thin italic mb-2 mx-16">Make your wedding journey effortless! </p>
          <p className="h-auto font-medium">
            QrWeds makes wedding planning simple and stress-free. It turns your
            event details into a smart digital invite while also reducing your
            effort by managing essentials like cards, photography, vehicles, and
            more—all in one platform. Share your QR invite instantly and let
            guests access everything with a quick scan, making your celebration
            smooth and effortless.
          </p>
          <ul className="flex">
            <li className="border rounded-lg shadow-sm px-2 shadow-gray-400 mx-12 my-2 font-bold h-7">
              React
            </li>
            <li className="border rounded-lg shadow-sm px-2 shadow-gray-400  my-2 font-bold h-7">
              Tailwind
            </li>
          </ul>
          <div className="mt-4 flex ">
          <Link to={QrWeds_Github} target="_blank">
            <p className="mx-2 font-bold text-lg">Code</p>
            </Link>
            <Link to={QrWeds_Github} target="_blank">
              <img
                className="h-6 mr-6 dark:bg-white dark:rounded-full"
                alt="github"
                title="repo"
                src={GIT_ICON}
              />
            </Link>
            <Link to={QrWeds_URL} target="_blank">
            <p className="mx-2 font-bold text-lg">Live Demo</p>
            </Link>
            <Link to={QrWeds_URL} target="_blank">
              <img
                className="h-6  dark:bg-white dark:rounded-full"
                alt="github"
                title="website"
                src={LIVE_DEMO_ICON}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrWeds;
