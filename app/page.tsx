import Image from "next/image";
import { Button } from "@/components/ui/button";
import About from "@/components/About";
import Services from "@/components/Services";
import AddOns from "@/components/AddOns";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative flex flex-col items-center justify-center px-3 pt-7 bg-gradient-to-b from-[#e3edde] to-[#193d41] bg-[length:200%_200%] animate-gradient-move">
        <h1 className="text-[#193d41] text-[3rem] lg:text-[4rem] text-center mb-5 lg:my-10">
          ANALISSA LONGORIA
        </h1>

        <About />
        <div className="flex flex-col w-[95vw] lg:w-[40vw] aspect-[3/4] items-center justify-center">
          <Services />
          <AddOns />
        </div>
      </div>
    </div>
  );
}
