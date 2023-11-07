import React from "react";

const ButtonCard = ({text}) => {
    return (
        <button className="flex items-center mt-auto yellow-glass2 pink-glass2 border-0 py-2 px-4 w-full focus:outline-none rounded">
        {text}
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
    )
};

export default ButtonCard;