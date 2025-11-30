import React, { useContext } from "react";
import Portfolio from "./Portfolio";
import Dark from "../utilis/Dark";
import QrWeds from "./QrWeds";
import Tiffin from "./Tiffin";
import DevTinder from "./DevTinder";

const Projects = () => {
  const mode = useContext(Dark);
  const dark = mode.darkMode;

  return (
    <div className={`${dark && "dark"} -mt-2`}>
      <div className="dark:bg-slate-900 dark:text-white p-2 py-8">
        <Portfolio />
        <QrWeds/>
        <Tiffin />
        <DevTinder/>
      </div>
    </div>
  );
};

export default Projects;
