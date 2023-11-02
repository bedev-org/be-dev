import React from "react";

const TitleServices = ({title}) => {
  return (
    <div className="mb-10 flex justify-center items-center">
      <h2 className="text-3xl border-b-yellow1 py-5 ">
        {title}
      </h2>
    </div>
  );
};

export default TitleServices;