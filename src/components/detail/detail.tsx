import React from "react";
import { Data } from "./interfaces";

export interface Props {
  data: Data;
}

export const Detail = (props: Props): React.ReactElement => (
  <div className="flex justify-center">
    <div className="beside-image"></div>
    <img
      className="image"
      src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/30c99846a354513681afe44b/gfgf-min.jpg"
      alt="image"
    ></img>
    <div className="beside-banner"></div>
    <div className="banner">
      <span className="items-banner tracking-more xl:text-2xl xl:mb-10 lg:text-xl lg:mb-3 md:text-md md:mb-1 sm:text-sm sm:mb-1">
        {props.data.introduction}
      </span>
      <span className="items-banner font-thin text-indigo-600 font-playfair xl:text-6xl lg:text-3xl md:text-3xl sm:text-3xl">
        {props.data.firstTitle}
      </span>
      <span className="items-banner xl:text-6xl font-bold text-indigo-600 font-old xl:mt-2 lg:text-3xl md:text-3xl sm:text-3xl">
        {props.data.secondTitle}
      </span>
      <span className="xl:text-lg xl:mx-4 text-center font-light xl:my-6 lg:text-sm lg:mx-5 lg:my-3 md:text-xs md:mx-5 md:my-3 sm:text-xxs sm:my-3">
        {props.data.description}
      </span>
      <span className="items-banner">
        <button className="buy-now">BUY NOW</button>
      </span>
    </div>
  </div>
);
