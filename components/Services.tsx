import React from "react";

const Services = () => {
  return (
    <div className="h-[93vh] w-[93vw] max-w-[595px] flex flex-col justify-between items-center  mt-10 border-white border-4 rounded-lg p-7">
      <div>
        <h2 className="uppercase text-white text-2xl lg:text-3xl font-semibold text-center mb-3">
          {" "}
          BRINGING RELAXATION
        </h2>
        <h2 className="uppercase text-white text-xl lg:text-3xl font-semibold text-center">
          {" "}
          TO YOUR HOME
        </h2>
      </div>
      <h2 className="uppercase text-white text-xl lg:text-2xl text-center">
        Mobile SERVICES:
      </h2>
      <div>
        <h2 className="uppercase text-white text-xl lg:text-2xl text-center">
          SWEDISH{" "}
        </h2>
        <p className="uppercase text-white text-md lg:text-lg text-center">
          for relaxation and circulation
        </p>
      </div>
      <div>
        <h2 className="uppercase text-white text-xl lg:text-2xl text-center">
          DEEP TISSUE
        </h2>
        <p className="uppercase text-white text-md lg:text-lg text-center">
          for tension and knots
        </p>
      </div>
      <div>
        <h2 className="uppercase text-white text-lg lg:text-2xl text-center">
          DEEP FLOW
        </h2>{" "}
        <p className="uppercase text-white text-md lg:text-lg text-center">
          a blend of relaxation and knot release
        </p>{" "}
      </div>
      <div>
        <h2 className="uppercase text-white text-lg lg:text-2xl font-semibold text-center">
          The Bedtime Ritual
        </h2>{" "}
        <p className="uppercase text-white text-md lg:text-lg text-center">
          With sedative inducing Valerian oil, an acupressure Marma Point
          Massage for face scalp and neck, and guided breath work to help you
          attain a state of deep relaxation before you dose off peacefully to
          sleep.
        </p>
      </div>
    </div>
  );
};

export default Services;
