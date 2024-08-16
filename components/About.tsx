import React from "react";
import Image from "next/image";
import page1 from "@/public/al_1.svg"

const About = () => {
  return (
   
         <Image
            className="rounded-lg border-4 border-white w-auto h-auto lg:h-[93vh]"
            src={page1}
            alt="logo"
          />
  );
};

export default About;
