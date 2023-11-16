import React, { useState } from "react";
import ButtonCard from "../button/buttonCard/buttonCard";

const FavoriteCard = ({
  onClick,
  pack,
  price,
  delay,
  option1,
  option2,
  option3,
  option4,
  option5,
}) => {
  return (
    <div className="p-4 w-full lg:w-full mx-auto justify-center">
      <div className="h-full p-6 rounded-lg border-2 border-yellow flex flex-col relative overflow-hidden yellow-glass">
        <span className="pink-glass px-3 py-1 tracking-widest text-xs absolute right-1 top-1 rounded-bl uppercase">
          Top tendance !
        </span>
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          {pack}
        </h2>
        <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          <span>{price}</span>
          <span className="text-lg ml-1 font-normal text-gray-500">
            {delay}
          </span>
        </h1>
        <p className="flex items-center text-white mb-2  ">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {option1}
        </p>
        <p className="flex items-center text-white mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {option2}
        </p>
        <p className="flex items-center text-white mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {option3}
        </p>
     
     
        <button
          onClick={onClick}
          className="flex items-center mt-auto yellow-glass2 pink-glass2 border-0 py-2 px-4 w-full focus:outline-none rounded"
        >
          Acheter !
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
