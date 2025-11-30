import React from "react";
import {
  DevTinder_Github,
  DevTinder_URL,
  GIT_ICON,
  LIVE_DEMO_ICON,
} from "../utilis/constant";
import { Link } from "react-router-dom";
import DevTinderPic from "../utilis/Screenshot.png";

const DevTinder = () => {
  return (
    <div className="mb-32 mt-20 mx-auto md:w-[1000px] w-11/12 hover:border-4 border-white hover:scale-110 duration-500 ">
      <div className="md:flex">
        <div className="md:m-4 md:p-4 p-2 m-2">
          <img
            alt="Amazon-IMG"
            src={DevTinderPic}
            className="md:h-80  rounded-lg "
          ></img>
        </div>
        <div className="md:m-4 md:p-4 p-2 m-2 md:w-1/2">
          <p className="font-extrabold text-3xl font-serif mx-16">DevTinder</p>
          <p className="font-thin italic mb-2 mx-16">Where developers discover, connect, and collaborate.</p>
          <p className="h-auto font-medium">
            DevTinder helps developers find, match, and connect with other tech
            enthusiasts. Browse profiles, explore shared interests, and start
            building your dev network with an easy-to-use and streamlined
            interface. Perfect for collaboration, learning, or simply meeting
            fellow coders.
          </p>
          <ul className="flex">
            <li className="border rounded-lg shadow-sm px-2 shadow-gray-400 mx-auto my-2 font-bold h-7">
              MERN
            </li>
          </ul>
          <div className="mt-4 flex ">
            <Link to={DevTinder_Github} target="_blank">
              <p className="mx-2 font-bold text-lg">Code</p>
            </Link>
            <Link to={DevTinder_Github} target="_blank">
              <img
                className="h-6 mr-6  dark:bg-white dark:rounded-full"
                alt="github"
                title="repo"
                src={GIT_ICON}
              />
            </Link>
            <Link to={DevTinder_URL} target="_blank">
              <p className="mx-2 font-bold text-lg">Live Demo</p>
            </Link>
            <Link to={DevTinder_URL} target="_blank">
              <img
                className="h-6 dark:bg-white dark:rounded-full"
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

export default DevTinder;
