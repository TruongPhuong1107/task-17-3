import React from "react";
import Image from "next/image";
import { Data } from "./interfaces";

export interface Props {
  data: Data;
}

export const DetailPage = (props: Props): React.ReactElement => (
  <div>
    <div className="behind-image"></div>
    <div className="image">
      <Image
        width={860}
        height={850}
        src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/30c99846a354513681afe44b/gfgf-min.jpg"
        alt="image"
      ></Image>
    </div>
    <div className="banner">
      <span className="items-banner tracking-more text-2xl mb-10">
        {props.data.introduction}
      </span>
      <span className="items-banner font-thin text-indigo-600 font-playfair text-6xl">
        {props.data.firstTitle}
      </span>
      <span className="items-banner text-6xl font-bold text-indigo-600 font-old mt-2">
        {props.data.secondTitle}
      </span>
      <span className="text-2xl mx-32 text-center font-light my-10">
        {props.data.description}
      </span>
      <span className="items-banner">
        <button className="buy-now tracking-more">BUY NOW</button>
      </span>
    </div>
  </div>
);
