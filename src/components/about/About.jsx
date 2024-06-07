import React from "react";

const About = () => {
  return (
    <div className="container mx-auto h-[100vh] flex items-center">
      <div className="left relative m-auto flex-1 h-[100%] flex justify-center items-center">
        <div className="card absolute w-[60%] h-[70vh]  bg-slate-900 rounded-lg overflow-hidden"></div>
        <div className="card relative w-[60%] h-[70vh] top-[50px] left-[50px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1596109368446-8135e5dd7386?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[100%] h-[100%] rounded-2xl object-cover"
          />
        </div>
      </div>
      <div className="right flex-1">
        <h2 className="font-light text-4xl">About me</h2>
        <p className="text-2xl my-[20px] ">Shine The Spotlight On Your Designs</p>
        <p className="text-gray-500">
          Easily create striking galleries and collections with Portfoliobox.
          The platform comes with an impressive selection of templates, allowing
          you to display your work in a variety of layouts. Every template is
          dynamic and responsive so you can always put your best foot forward
          regardless of the browser’s device or screen size.
        </p>
        <div className="box mt-3 flex items-center justify-between gap-20">
          <img src="/src/img/award.png" className="w-[120px] h-[100px] rounded-2xl" alt="" />
          <div className="text text-sm flex flex-col">
          <h2 className="title mb-3 text-lg font-bold text-gray-500">Proof, manage and deliver client work</h2>
          <p className="text-gray-500">Portfoliobox streamlines your workflows and helps you foster stronger client relationships. Work on projects, get feedback</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default About;
