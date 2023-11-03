import React from "react";
import ButtonCard from "../button/buttonCard/buttonCard";
import RadioButton from "../radioButton/radioButton";
import { useState } from "react";
import axios from "axios"

const PriceCard = ({ pack, price, delay, text }) => {
  const [newDomain, setNewDomain] = useState({
    nameDomain: "",
  });
  const [selectedChoice, setSelectedChoice] = useState("");
  const handleChoiceSelected = (choice) => {
    setSelectedChoice(choice);
  };

const [count, setCount] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
const tarif = 10
function handleClick() {
const newTotalPrice = (count + 1) * tarif;
  setTotalPrice(newTotalPrice);
  localStorage.setItem("totalPrice", newTotalPrice.toString());
  setCount(count + 1);

}

  
  const addDomain = () => {
    axios.post("http://localhost:8000/api/location_domains", newDomain, config)
      .then(() => {
        alert("Domaine crée !");

        ;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const config = {
    headers: {
      Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTkwMjEyNTUsImV4cCI6MTY5OTAyNDg1NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGJlLWRldi5vcmcifQ.Jgc1bvHghWBbwcKaloWYUvzkLkzqhk2HsjzgWbHGo1FyjZMQuypGf7vjM3DXovJAbBmb6G8ow9yOATFzUTmjrC2MCjy5fpP0omjJE9-uZGrO-kAKjCS4W0dEtP9laBo2qkHIj9TLHztZLM2ZEMu0PzF43ru5wqM_oJeGnqi1DdwQTt6y_fuADP8k23JtBuFI0hoIB7CEujsBoWrcpgKCLvHk5CB_CBa4ucHMX8ga-qhQnok1PEdDV8CmM6RCHBXUOxZIJ3zDlFeOlk5WJIGGtgSgm343JtH3pxkhQeHuEQ1vhA_NfoErNP084KUyZwLhzoojWc8hcMIo7q5YlBxFCg`,
      "Content-Type": "application/ld+json",
    },
  };
  const domain ={ nameDomain: newDomain.nameDomain}

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
          onChoiceSelected={handleChoiceSelected}
        />
        <input
          className="text-black black-area my-3 rounded-lg white-glass"
          name=""
          id=""
          cols="30"
          rows="1"
          placeholder={`Votre domaine${selectedChoice ? ' ' + selectedChoice : ''}`}
          value={newDomain.nameDomain}
          onChange={(event) =>
            setNewDomain({ ...newDomain, nameDomain: event.target.value })
          }
        ></input>
        <button  onClick={() => {
            addDomain();
            handleClick();
          }}  className="flex items-center mt-auto yellow-glass2 pink-glass2 border-0 py-2 px-4 w-full focus:outline-none rounded">
          Click me !
          
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
        <p>total: {totalPrice}€</p>
        <p className="text-xs text-gray-500 mt-3">{text}</p>
      </div>
    </div>
  );
};

export default PriceCard;
