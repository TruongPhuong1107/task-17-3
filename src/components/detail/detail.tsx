import React from "react";
import { Data } from "./interfaces";

export interface Props {
  data: Data;
}

export const Detail = (props: Props): React.ReactElement => (
  <div className="flex justify-center items-center h-screen w-1/2 mx-auto">
    <div className="flex justify-center items-stretch h-1/2 w-7/12">
      <div className="w-1/12 pt-16 pb-48">
        <div className="bg-red-400 h-full"></div>
      </div>
      <img
        className="h-full w-10/12"
        src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/30c99846a354513681afe44b/gfgf-min.jpg"
      ></img>
      <div className="w-1/12 pt-16 pb-48">
        <div className="bg-red-400 h-full"></div>
      </div>
    </div>
    <div className="w-6/12 h-1/2 bg-white flex flex-col flex-wrap justify-center">
      <span className="text-center tracking-wider font-thin text-2xl md:text-xl">
        {props.data.introduction}
      </span>
      <span className="text-center font-thin text-maincolor font-playfair text-7xl my-3 md:text-5xl md:my-2">
        {props.data.firstTitle}
      </span>
      <span className="text-center text-6xl font-bold text-maincolor font-old md:text-5xl md:my-2">
        {props.data.secondTitle}
      </span>
      <span className="text-center px-5 font-thin">
        {props.data.description}
      </span>
      <span className="mx-auto">
        <button className="bg-maincolor xl:px-10 xl:py-3 xl:mb-5 rounded-3xl text-white hover:outline-indigo-400 hover:bg-indigo-700 lg:text-sm lg:px-4 lg:py-2 tracking-more md:text-sm md:px-4 md:py-2 sm:text-xs sm:px-4 sm:py-2 sm:mt-6">
          BUY NOW
        </button>
      </span>
    </div>
  </div>
);
