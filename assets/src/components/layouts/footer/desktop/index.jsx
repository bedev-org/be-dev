import React from "react";
import { HiLink } from "react-icons/hi";

const FooterDesktop = () => {
  return (
    <footer
      className="hidden lg:flex flex-col items-center pb-20"
      data-aos="fade-right"
    >
      <div className="contain-white arcenciel w-[255px] lg:w-[700px]">
        <div className="py-6 text-sm flex flex-col items-center">
         
          
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <a
            href="https://www.instagram.com/an.i.me_artist"
            target="_blank"
            rel="noreferrer noopener"
          >
           
          </a>
          <a
            href="https://github.com/chloe775"
            rel="noreferrer noopener"
            target="_blank"
          >
           
          </a>
          <a
            href="https://www.linkedin.com/in/chloe-devise/"
            target="_blank"
            rel="noreferrer noopener"
          >
            
          </a>
          <a
            className="flex items-center"
            href="http://localhost:3000/docs/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <HiLink
              width={25}
              className="text-[rgb(252,206,80)] hover:hover:text-pink-500 ease-in duration-300 "
            />
          </a>
        </div>
        <div className="flex flex-col uppercase items-center text-xs py-6 text-[#996fbd]">
          <p>Devise Chloé </p>
          <p className="italic">&copy; Copyright - 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
