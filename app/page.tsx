import Hero from "@/components/Hero";
import { Box } from "@/components/ui/Box";
import { Card } from "@/components/ui/Card";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-auto mx-auto sm:px-10 px-5 h-screen">
      <div>
        <Box/>
      </div>
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
      
      {/* Add margin to separate Hero and Card */}
      {/* <div className="relative">
        <Card />
      </div> */}
    </main>
  );
}
