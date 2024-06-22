import Image from "next/image";
import { Button } from "@/components/ui/button";
import poster from "@/public/spa-reprieve.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#e3edde] to-[#193d41] p-10">
     <Image className="h-[98vh] w-fit rounded-2xl drop-shadow-2xl" src={poster} alt="logo" width={200} height={200} />
    </main>
  );
}
