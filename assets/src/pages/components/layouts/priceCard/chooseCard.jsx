import React from "react";
import ButtonCard from "../button/buttonCard/buttonCard";
import RadioButton from "../radioButton/radioButton";

const PriceCard = ({ pack, price, delay, text }) => {
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
        />
        <ButtonCard text="Click me !" />
        <p className="text-xs text-gray-500 mt-3">{text}</p>
      </div>
    </div>
  );
};

export default PriceCard;
