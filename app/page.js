"use client";

import Image from "next/image";
import Intro from "@/components/Home/Intro";
import AboutUs from "@/components/Home/AboutUs";
export default function Home() {
  return (
    <div>
      <main className="gap-10">
        <div className="bg-[url('/home.jpg')] bg-cover bg-center h-screen">
          {/* <div className=" bg-cover bg-center h-screen"> */}
          <Intro />
        </div>
        <div>
          <AboutUs />
        </div>
      </main>
    </div>
  );
}
