import React from "react";

const Services = () => {
  return (
    <body className="">
      <div className="flex justify-center my-5">
        <h1>
          Location nom de domaine <br />
          location DB : standard, medium et premium <br />
          location serveur : standard medium et premium
        </h1>
      </div>
      <div className="flex justify-center ">
        <div className="h-[400px] w-[280px] border border-white rounded-lg">
          <div className="w-full h-[50px] blackbedev border-b border-white rounded-t-lg flex justify-center items-center">
            <h2 className="text-lg peachbedev-text">Offre 1</h2>
          </div>
          <div className="flex flex-col justify-around h-[300px] w-full ">
            <p className="blackbedev border-b border-white flex justify-center items-center h-[75px] peachbedev-text">
              Option 1
            </p>
            <p className="blackbedev border-b border-white flex justify-center items-center h-[75px] peachbedev-text">
              Option 2
            </p>
            <p className="blackbedev border-b border-white flex justify-center items-center h-[75px] peachbedev-text">
              Option 3
            </p>
            <p className="blackbedev border-b border-white flex justify-center items-center h-[75px] peachbedev-text">
              Option 4
            </p>
          </div>
          <div className="flex justify-center items-center h-[50px] blackbedev rounded-b-lg border-b border-white">
            <p className="peachbedev-text">Price</p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Services;
