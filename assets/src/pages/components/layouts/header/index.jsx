import NavbarMobile from "./mobile";
import NavbarDesktop from "./desktop";
import React from "react";


const Navbar = () => {
  return (
    <header className="w-full h-full ">
      <NavbarMobile />
      <NavbarDesktop />
    </header>
  );
};
export default Navbar;
