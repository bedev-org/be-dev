import React from "react";
import Offres from "./offres";
import Contact from "./contact";
import Introduction from "./introduction";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold w-full flex flex-row text-green-500 justify-center text-2xl bg-black">
        Hello Home !!!
      </h1>
      <div>
        <Introduction/>
      </div>
      <div>
        <Offres />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
