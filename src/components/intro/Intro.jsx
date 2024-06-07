import React from "react";
import "./intro.css"
const Intro = () => {
  return (
    <div className="intro flex h-[100vh]">
      <div className="left flex-1 flex justify-center items-center ">
      <div className="left-wrapper p-[50px] flex flex-col justify-between h-[50%]">
      <h2 className="text-4xl">Hello, My name is </h2>
        <h1 className="text-6xl font-bold">John Burton</h1>
        <div className="item  h-[50px] overflow-hidden">
          <div className="item-d">
            <div className="h-[50px] text-4xl font-semibold flex items-center text-[#59b256]">
              frontend developer
            </div>
            <div className="h-[50px] text-4xl font-semibold flex items-center text-[#59b256]">
              React developer
            </div>
            <div className="h-[50px] text-4xl font-semibold flex items-center text-[#59b256]">
              Nextjs developer
            </div>
            <div className="h-[50px] text-4xl font-semibold flex items-center text-[#59b256]">
              web Design
            </div>
          </div> 
        </div>
          <p className="text-gray-600">
            Hello, I am John Burton, a front-end web developer specializing in
            creating responsive websites. With over a year of experience, I
            possess strong skills in HTML5, CSS3, Tailwind CSS, Bootstrap,
            JavaScript,
          </p>
      </div>
      </div>
      <div className="right flex-1 relative">
        <div className="clip absolute top-0 right-0 w-[100%] h-[100%]"></div>
        <img src="/src/img/me.png" alt="" className="h-[100%] w-[100%] object-cover absolute" />
      </div>
    </div>
  );
};

export default Intro;
