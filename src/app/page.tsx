"use client";

import Image from "next/image";
import largeImg from "/public/image-hero@2x.jpg";

import Button from "@/components/button";

export default function Home() {
  return (
    <main className="">
      {/* Modern Art gallery */}
      {/* <div className=" bg-blue-100"> */}
      <div className="relative flex w-2/3 flex-row items-center justify-center bg-black">
        {/* large text 'modern art gallery' */}
        <div className="w-1/2 bg-black"></div>
        {/* <div> */}

        <div className="bigSholders absolute -mr-8 pb-52 pr-36  text-8xl font-bold text-white mix-blend-difference">
          <h1>MODERN</h1>
          <h1>ART GALLERY</h1>
        </div>

        {/* </div> */}

        <Image className="w-1/2" src={largeImg} alt={"meow"} />

        <div className="flex flex-col items-center justify-center">
          {/* smaller text */}
          <div className="absolute pb-64">
            <p className="outfit w-[350px] text-[22px] font-light">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>

            <Button variant="button1">OUR LOCATION</Button>
          </div>
        </div>
      </div>

      {/* button with 'our location' */}
      {/* </div> */}

      {/* Your day at the gallery */}
      <div></div>

      {/* Modern Art gallery Footer */}
      <div></div>
    </main>
  );
}
