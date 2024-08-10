import Image from "next/image";
import { Button } from "@/components/ui/button";
import poster from "@/public/botanical-wellness.png";
import services from "@/public/services.png";
import addOns from "@/public/add-ons.png";
import addOns2 from "@/public/add-ons2.png";

export default function Home() {
  return (
    <main className="flex gap-5 min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#e3edde] to-[#193d41] p-10">
      <Image
        className="w-auto max-h-screen object-contain rounded-2xl drop-shadow-2xl"
        src={poster}
        alt="logo"
      />
      <Image
        className="w-auto max-h-screen object-contain rounded-2xl drop-shadow-2xl"
        src={services}
        alt="logo"
      />
      <Image
        className="w-auto max-h-screen object-contain rounded-2xl drop-shadow-2xl"
        src={addOns}
        alt="logo"
      />
      <Image
        className="w-auto max-h-screen object-contain rounded-2xl drop-shadow-2xl"
        src={addOns2}
        alt="logo"
      />
    </main>
  );
}
