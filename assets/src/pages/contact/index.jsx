import React from "react";
import SectionContact from "./section";
import Footer from "../../components/layouts/footer";
import Header from "../components/layouts/header";
import Introduction from "../home/introduction";

const Contact = () => {
  return (
    <>
      <Header/>
      <Introduction/>
      <SectionContact />
      <Footer />
    </>
  );
};
export default Contact;
