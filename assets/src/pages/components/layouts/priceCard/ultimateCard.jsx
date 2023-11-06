import React from "react";
import ButtonCard from "../button/buttonCard/buttonCard";

const UltimateCard = ({
  pack,
  price,
  delay,
  option1,
  option2,
  option3,
  option4,
  option5,
  text}
) => {
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2">
      <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden black-glass">
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          {pack}
        </h2>
        <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          <span>{price}</span>
          <span className="text-lg ml-1 font-normal text-gray-500">{delay}</span>
        </h1>
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
          {option4}
        </p>
        <p className="flex items-center text-white mb-6">
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
          {option5}
        </p>
        <div>
          <ButtonCard text="Click Me !" />
        </div>
        <p className="text-xs text-gray-500 mt-3">{text}</p>
      </div>
    </div>
  );
};

export default UltimateCard;
