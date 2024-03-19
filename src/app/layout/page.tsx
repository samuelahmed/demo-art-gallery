"use client";

import Image from "next/image";
import heroImg from "/public/image-hero@2x.jpg";
import gridImg from "/public/image-grid-1@2x.jpg";
import grid2Img from "/public/image-grid-2@2x.jpg";
import grid3Img from "/public/image-grid-3@2x.jpg";

import Button from "@/components/button";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col bg-custom-white">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row">
        <div className="mt-60 w-full bg-custom-white md:mt-0 md:w-1/3 md:bg-custom-black ">
          <div className="bigSholders w-full px-4 py-8 text-5xl font-extrabold text-custom-black md:ml-56 md:mt-48 md:px-0 md:py-0  md:text-8xl md:text-custom-white md:mix-blend-difference ">
            <h1>MODERN</h1>
            <h1>ART GALLERY</h1>
          </div>
        </div>
        {/* Computer Image */}
        <div className="hidden w-3/5 md:block">
          <Image src={heroImg} width={1080} height={1600} alt="alt" />
        </div>
        {/* Mobile Img */}
        <div className="z-n1 absolute top-[-150px] h-fit md:hidden">
          <Image src={heroImg} width={1080} height={1600} alt="alt" />
        </div>
        <div className="w-full bg-custom-white px-4 md:w-1/3 md:px-0">
          <div className="flex flex-col md:-ml-16 md:mt-48">
            {/* smaller text */}
            <p className="outfit pb-10  font-light md:w-[350px] md:pb-20 md:text-[22px]">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <Button variant="button1">OUR LOCATION</Button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-20 flex flex-col bg-custom-white text-custom-black md:px-32">
        {/* Row 1 */}
        <div className="flex flex-col-reverse items-center md:flex-row">
          {/* Large and small text */}
          <div className="w-1/2 space-y-16 text-center">
            <div className="text-5xl font-extrabold">
              <h1>YOUR DAY AT</h1>
              <h1>THE GALLERY</h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="w-80 text-left text-xl font-light">
                Wander through our distinct collections and find new insights
                about our artists. Dive into the details of their creative
                process.
              </p>
            </div>
          </div>
          {/* Image  */}
          <div className="">
            <Image src={gridImg} width={1080} height={1600} alt="alt" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col space-x-8 md:flex-row   md:pt-8">
          {/* main cols */}
          <div className="flex flex-row">
            {/* large img */}
            <div className="w-full">
              <Image src={grid2Img} width={1080} height={1600} alt="alt" />
            </div>
          </div>

          {/* two small img */}
          <div className="flex max-h-screen w-4/5 flex-col justify-between space-y-8">
            <div className="w-full">
              <Image src={grid3Img} width={1080} height={1600} alt="alt" />
            </div>

            <div className="h-full bg-black">
              <div className="  pl-16 pt-16 text-white">
                <div className="pb-8 text-5xl font-extrabold">
                  <h1>COME & BE</h1>
                  <h1>INSPIRED</h1>
                </div>
                <p className="w-80 text-left text-xl font-light">
                  We’re excited to welcome you to our gallery and see how our
                  collections influence you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="min-h-96 bg-red-400">Medium Text Small Text Logos</div>
    </main>
  );
}
