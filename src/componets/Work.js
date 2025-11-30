import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dark from "../utilis/Dark";

const Work = () => {
  const mode = useContext(Dark);
  const dark = mode.darkMode;

  return (
    <div className={`${dark && "dark"}`}>
      <div className="flex flex-col md:flex-row items-start md:items-center md:p-10 p-4 dark:bg-slate-900">

        {/* Text */}
        <p className="dark:text-white font-bold text-2xl md:text-3xl md:w-4/12 w-full md:ml-40 my-2">
          Interested in working together?
        </p>

        {/* Button */}
        <div className="md:ml-auto md:mr-40 mt-4 md:mt-0">
          <Link to="/contact">
            <button className="
              md:text-lg text-base font-semibold 
              rounded-xl px-6 py-3
              bg-indigo-600 dark:bg-indigo-500 text-white
              hover:opacity-90 transition
            ">
              Send me a message
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Work;
