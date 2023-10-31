import React from "react";
import Navbar from "../components/layouts/header";
import Footer from "../../components/layouts/footer";
import Offres from "./offres";
import Contact from "./contact";
import Introduction from "./introduction";
import Avis from "./avis";
import Information from "./information";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Introduction />
      </div>
      <div>
        <Information />
      </div>
      <div>
        <Offres />
      </div>
      <div>
        <Avis />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
