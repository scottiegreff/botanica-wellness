import React from "react";

const AddOns = () => {
  return (
    <div className="h-[93vh] w-[93vw] max-w-[595px] flex flex-col justify-around items-center mt-10 mb-20 border-white border-4 rounded-lg p-7 ">
      <h2 className="uppercase text-white text-3xl font-semibold text-center">
        {" "}
        Treatment Add-ons:
      </h2>
      <h2 className="uppercase text-white text-xl lg:text-3xl font-md text-center">
        {" "}
        Face Steam (Swedana)
      </h2>
      <p className="uppercase text-white text-md lg:text-lg font-light text-center">
        Prepares skin for face massage. Detoxifying, Alleviates congestion and
        allergies, Sharpens mental clarity and promotes relaxation.
      </p>
      <p className="uppercase text-white text-md lg:text-lg text-center">
        Citrus Face steam Grapefruit, Sweet Orange, Lemon
      </p>
      <p className="uppercase text-white text-md lg:text-lg text-center">
        Clarifying Face Steam Lavender and Tea Tree
      </p>{" "}
      <p className="uppercase text-white text-md lg:text-lg text-center">
        Balancing Face Steam ylang ylang, geranium, frankincense
      </p>
      <h2 className="uppercase text-white text-xl lg:text-3xl font-semibold text-center">
        Rosemary + Coconut OIl Scalp Massage
      </h2>{" "}
    </div>
  );
};

export default AddOns;
