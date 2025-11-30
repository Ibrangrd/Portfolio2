import React from "react";

const Intro = () => {
  return (
    <div className="">
      <div className="md:m-4 m-2 p-4 my-20">
        <div className="md:mx-52 w-1/2 mt-4 mb-4">
          <p className="font-mono text-slate-500 text-lg p-2 dark:text-slate-300">
            Hey,I'm
          </p>
        </div>
        <div className="md:mx-52 md:w-1/2 mb-2">
          <p className="md:text-7xl text-4xl font-serif font-bold text-transparent p-2 gradient-text">
            Md Ibran
          </p>
        </div>
        <div className="md:mx-52 md:w-2/3 ">
          <p className="text-lg p-2 ">
            I'm a MERN Stack Developer based in Dhanbad, Jharkhand. I love
            building things that live on the internet — from responsive websites
            to full-stack web applications. I specialize in front-end
            development with React and enjoy creating smooth, user-friendly
            digital experiences. I’m continuously learning and improving,
            working on real-world projects and sharpening my skills in
            JavaScript, React, Node.js, MongoDB, and modern web technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
