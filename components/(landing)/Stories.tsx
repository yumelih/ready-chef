"use client";

import { FaceSmileIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { reviews, ReviewType } from "@/lib/data/data";
import StyledText from "../ui/styled-text";
import { useState } from "react";
import Slider from "../ui/slider";

function Story({
  className,
  review,
}: {
  className?: string;
  review: ReviewType;
}) {
  return (
    <div
      className={
        "group flex cursor-pointer flex-col items-start justify-center gap-2 hyphens-auto rounded-sm bg-white p-6 text-gray-800 hover:bg-orange-500 hover:text-gray-100 " +
        className
      }
    >
      <FaceSmileIcon className="w-12 text-orange-500 group-hover:text-white" />
      <p className="px-2">
        {review.review}
        {/* Vestibulum aliquam, erat sit
        amet porttitor auctor, mi elit porttitor lorem, pellentesque tristique
        velit orci ut ex. */}
      </p>
      <div className="flex justify-start gap-2">
        <Image
          src={`/static/images/${review.avatar}`}
          width="55"
          height="55"
          alt="User"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-black">{review.name}</h1>
          <p className="mt-auto">{review.job}</p>
        </div>
      </div>
      {/* <div className="absolute left-0 top-0 z-10 h-full w-1/2 bg-gray-100" /> */}
    </div>
  );
}

export default function Stories() {
  const [currentPost, setCurrentPost] = useState<number>(0);

  function handleClick(num: number): void {
    setCurrentPost(num);
  }

  return (
    <section className="col-span-1 col-start-2 flex flex-col items-center gap-6">
      <div className="text-center">
        <StyledText text="Testinomial" />
        <h1 className=" text-4xl font-bold tracking-wide">
          Our Clients Say!!!
        </h1>
      </div>
      <Slider options={{ align: "end" }}>
        {reviews.map((review, i) => {
          return (
            <div key={review.id} className="flex-[0_0_90%] lg:flex-[0_0_40%]">
              <Story key={review.id} className="" review={review} />
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
