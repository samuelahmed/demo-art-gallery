"use client";

import Image from "next/image";
import heroImg from "/public/image-hero@2x.jpg";
import gridImg from "/public/image-grid-1@2x.jpg";
import grid2Img from "/public/image-grid-2@2x.jpg";
import grid3Img from "/public/image-grid-3@2x.jpg";
import Button from "@/components/button";
import { Twitter, Facebook, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row">
        <div className="mt-60 w-full bg-custom-white md:mt-0 md:w-1/3 md:bg-custom-black">
          <div className="bigSholders w-full px-4 py-8 text-5xl font-extrabold text-custom-black md:ml-56 md:mt-48 md:px-0 md:py-0 md:text-[96px] md:text-custom-white md:mix-blend-difference">
            <h1>MODERN</h1>
            <h1>ART GALLERY</h1>
          </div>
        </div>
        <div className="hidden w-3/5 md:block">
          <Image src={heroImg} width={1080} height={1600} alt="alt" />
        </div>
        <div className="z-n1 absolute top-[-150px] h-fit md:hidden">
          <Image src={heroImg} width={1080} height={1600} alt="alt" />
        </div>
        <div className="w-full bg-custom-white px-4 md:w-1/3 md:px-0">
          <div className="flex flex-col md:-ml-16 md:mt-48">
            <p className="outfit text-md pb-10 font-extralight md:w-[350px] md:pb-20 md:text-[22px]">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <Button variant="button1">OUR LOCATION</Button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" flex flex-col bg-custom-white py-20 text-custom-black md:px-52">
        <div className="flex flex-col-reverse items-center px-4 md:flex-row md:space-x-20 md:px-0">
          <div className="space-y-4 py-4 md:w-1/2 md:space-y-8">
          <div className="flex flex-col space-y-4 items-start justify-center">

            <div className="bigSholders text-5xl font-extrabold md:text-6xl">
              <h1 className="hidden md:block">YOUR DAY AT</h1>
              <h1 className="hidden md:block">THE GALLERY</h1>
              <h1 className="md:hidden">YOUR DAY</h1>
              <h1 className="md:hidden">AT THE GALLERY</h1>
            </div>
              <p className="outfit text-md w-80 text-left font-extralight md:text-[22px]">
                Wander through our distinct collections and find new insights
                about our artists. Dive into the details of their creative
                process.
              </p>
            </div>
          </div>
          <div>
            <Image src={gridImg} width={1080} height={1600} alt="alt" />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 md:flex-row md:items-stretch md:space-x-8 md:space-y-0 md:pt-8">
          <div className="flex flex-row">
            <div className="mx-5 w-full md:mx-0">
              <Image src={grid2Img} width={1080} height={1600} alt="alt" />
            </div>
          </div>
          <div className="flex max-h-screen flex-col justify-between space-y-4 px-5 md:w-4/5 md:space-y-8 md:px-0">
            <div className="w-full ">
              <Image src={grid3Img} width={1080} height={1600} alt="alt" />
            </div>
            <div className="h-full bg-black">
              <div className="px-8 py-8 text-white md:px-8 md:pl-16">
                <div className="bigSholders text-5xl font-extrabold md:text-6xl">
                  <h1>COME & BE</h1>
                  <h1>INSPIRED</h1>
                </div>
                <p className="outfit text:md pt-4 text-left font-extralight md:text-[22px]">
                  We’re excited to welcome you to our gallery and see how our
                  collections influence you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col justify-start space-y-8 bg-custom-black px-8 py-16 text-custom-white md:flex-row md:justify-around">
        <div className="bigSholders flex flex-col items-start justify-center text-4xl font-extrabold">
          <h1>MODERN</h1>
          <h1>ART GALLERY</h1>
        </div>
        <div className="flex max-w-96 flex-col items-start justify-center">
          <p className="outfit font-extralight ">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
        </div>
        <div className="mb-14 flex flex-col items-start justify-start">
          <div className="flex flex-row space-x-4">
            <Facebook className="hover:animate-pulse" />
            <Instagram className="hover:animate-pulse" />
            <Twitter className="hover:animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}
