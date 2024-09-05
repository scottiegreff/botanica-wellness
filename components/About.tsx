import React from "react";
import Image from "next/image";
import page1 from "@/public/al_1.jpg";

const About = () => {
  return (
   
         <Image
            className="rounded-lg border-4 border-white w-[95vw] lg:w-[40vw] aspect-[3/4]"
            src={page1}
            alt="logo"
            height={500}
            width={500}
          />
  );
};

export default About;
