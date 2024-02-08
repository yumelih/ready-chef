import { CakeIcon } from "@heroicons/react/20/solid";
import { Kaushan_Script } from "next/font/google";
import Image from "next/image";
import GridAutoFit from "../ui/gridautofit";

const kaushan = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });

export default function AboutUs() {
  return (
    <GridAutoFit className="col-span-1 col-start-2">
      <div className="mx-auto grid grid-cols-[minmax(0,20rem),minmax(0,20rem)] grid-rows-2 justify-items-center gap-6">
        <div className="relative aspect-[10/8] h-fit w-full translate-y-6 ">
          <Image src="/static/images/food-1.jpg" fill={true} alt="food" />
        </div>
        <div className="relative aspect-[9/8] h-auto w-full max-w-full ">
          <Image src="/static/images/food-2.jpg" fill={true} alt="food" />
        </div>
        <div className="relative aspect-[9/9] h-auto w-full max-w-full ">
          <Image src="/static/images/food-3.jpg" fill={true} alt="food" />
        </div>
        <div className="relative aspect-square h-auto w-full max-w-full -translate-y-6 ">
          <Image src="/static/images/food-4.jpg" fill={true} alt="food" />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-4">
            <h2 className={`${kaushan.className} text-2xl`}>about Us</h2>
            <div className="h-1 w-24 bg-orange-600" />
          </div>
          <h1 className="flex items-end gap-2 text-4xl font-bold">
            Welcome to <CakeIcon className="h-12 w-12 text-orange-600" /> Ready
            Chef
          </h1>
        </div>
        <p className="text-xl text-gray-800">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p className="text-xl text-gray-800">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="grid w-fit grid-cols-[repeat(2,max-content)] grid-rows-2 gap-x-2 border-l-8 border-orange-600 pl-4">
          <h1 className="row-span-full text-5xl text-orange-600">50</h1>
          <p className="text-lg font-bold">Popular</p>
          <h3>Master Chefs</h3>
        </div>
        <button className="rounded-sm bg-yellow-600 px-8 py-2 text-xl uppercase text-white lg:px-12 lg:py-4 lg:text-2xl">
          Hire a Chef
        </button>
      </div>
    </GridAutoFit>
  );
}
