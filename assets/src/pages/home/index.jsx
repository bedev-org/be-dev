import React from "react";
import Offres from "./offres";
import Contact from "./contact";
import Introduction from "./introduction";
import Avis from "./avis";
import Information from "./information";

const Home = () => {
  return (
    <div>
    
      <div>
        <Introduction/>
      </div>
      <div>
        <Information/>
      </div>
      <div>
        <Offres />
      </div>
      <div>
        <Avis/>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
