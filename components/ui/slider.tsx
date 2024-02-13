"use client";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { PropsWithChildren, useCallback } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = { options?: EmblaOptionsType } & PropsWithChildren;

export default function Slider({ children, options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-10">{children}</div>
      <div className="mt-2 flex w-full justify-between">
        <button
          className="cursor-pointer rounded-sm bg-yellow-600 px-4 py-2 text-white hover:text-gray-900"
          onClick={scrollPrev}
        >
          <ArrowLeftIcon className="w-6" />
        </button>
        <button
          className="cursor-pointer rounded-sm bg-yellow-600 px-4 py-2 text-white hover:text-gray-900"
          onClick={scrollNext}
        >
          <ArrowRightIcon className="w-6" />
        </button>
      </div>
    </div>
  );
}
