import React from "react";

const Offres = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="item-center lg:pr-72">
        <h2 className="flex justify-center my-2">
          Virtus<span className="text-bluedark">Dev</span>
        </h2>
        <p className="my-4 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          error, enim expedita eveniet sunt beatae dicta explicabo distinctio
          ipsam ab at, hic omnis a id quae quod vero facere alias.
        </p>
        <div className="flex items-center justify-center">
          <button className="contain border-[1px] border-black hover:transition hover:ease-out hover:duration-700  hover:bg-white active:bg-slate-500 px-2 py-1">
            en savoir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offres;
