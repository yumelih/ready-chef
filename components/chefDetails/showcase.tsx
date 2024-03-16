"use client";

import Image from "next/image";
import { useState } from "react";
import Slider from "../ui/slider";

function Story({ className, image }: { className?: string; image: string }) {
  return (
    <div
      className={
        "group flex h-96 w-auto cursor-pointer flex-col items-start justify-center gap-2 hyphens-auto rounded-sm bg-white p-6 text-gray-800" +
        className
      }
    >
      <div className="flex h-full w-full flex-col items-center gap-4 bg-gray-200 p-4 shadow-md">
        <div className="relative h-full w-full">
          <Image
            src={image}
            fill={true}
            // style={{ objectFit: "contain" }}
            alt="Food"
            className=" object-contain"
          />
        </div>

        <p className="px-2">
          {/* {data.review} */}
          Vestibulum aliquam, erat sit amet porttitor auctor, mi elit porttitor
          lorem, pellentesque tristique velit orci ut ex.
        </p>
      </div>
      {/* <div className="absolute left-0 top-0 z-10 h-full w-1/2 bg-gray-100" /> */}
    </div>
  );
}

export default function Showcase({ images }: { images: string[] }) {
  const [currentPost, setCurrentPost] = useState<number>(0);

  function handleClick(num: number): void {
    setCurrentPost(num);
  }

  return (
    <section className="col-span-full flex flex-col items-center overflow-hidden sm:col-span-1 sm:col-start-2">
      <h1 className="text-2xl font-bold tracking-wide lg:self-start">
        Showcase
      </h1>
      <Slider
        options={{
          breakpoints: { "(max-width: 640px)": { containScroll: false } },
        }}
      >
        {Array.from({ length: images.length }).map((elm, i) => {
          return (
            <div key={i} className="flex-[0_0_50%] lg:flex-[0_0_40%]">
              <Story key={i} className="" image={images[i]} />
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
