import React from "react";
import ButtonCard from "../button/buttonCard/buttonCard";
import RadioButton from "../radioButton/radioButton";
import { useState } from "react";

const PriceCard = ({ radio, text, onClick, pack, price, delay }) => {
  const [newDomain, setNewDomain] = useState({
    nameDomain: "",
    extension: "",
    collections: [],
  });
  



  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div className="h-full p-6 rounded-lg border-2 border-yellow flex flex-col relative overflow-hidden yellow-glass">
        <span className="pink-glass px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl uppercase">
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
        <RadioButton
          choose1=".fr"
          choose2=".com"
          choose3=".info"
          choose4=".org"
          choose5=".net"
          choose6=".info"
          choose7=".eu"
          choose8=".online"
          onChange={radio}
        />
        <input
          type="text"
          className="text-black black-area my-3 rounded-lg white-glass"
          name=""
          id=""
          cols="30"
          rows="1"
          onChange={text}
        ></input>
        <p className="pb-2">
          Votre domaine :
          <br />
          {newDomain.nameDomain}
          {newDomain.extension}
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

export default PriceCard;
