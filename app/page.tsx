import Hero from "@/components/Hero";
import { Box } from "@/components/ui/Box";
import { Card } from "@/components/ui/Card";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black-100 flex justify-center items-center flex-col overflow-auto mx-auto sm:px-10 px-5 h-screen">
      <div >
        <Box />
      </div>
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
