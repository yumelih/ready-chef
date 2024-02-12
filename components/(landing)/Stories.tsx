import { FaceSmileIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { reviews } from "@/lib/data/data";
import StyledText from "../ui/styled-text";

function Story({ className }: { className?: string }) {
  return (
    <div
      className={
        "group relative flex min-w-80 max-w-[30rem] cursor-pointer flex-col items-start gap-2  hyphens-auto rounded-sm bg-white p-6 text-gray-800 hover:bg-orange-500 hover:text-gray-100 " +
        className
      }
    >
      <FaceSmileIcon className="w-12 text-orange-500 group-hover:text-white" />
      <p className="px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        lectus a ipsum ultricies suscipit. Aliquam erat volutpat. Nunc vehicula
        tempor lacus, ut dapibus diam mollis et.
        {/* Vestibulum aliquam, erat sit
        amet porttitor auctor, mi elit porttitor lorem, pellentesque tristique
        velit orci ut ex. */}
      </p>
      <div className="flex justify-start gap-2">
        <Image
          src="/static/images/user4.jpg"
          width="55"
          height="55"
          alt="User"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-black">Client Name</h1>
          <p className="mt-auto">Profession</p>
        </div>
      </div>
      {/* <div className="absolute left-0 top-0 z-10 h-full w-1/2 bg-gray-100" /> */}
    </div>
  );
}

export default function Stories() {
  return (
    <section className="col-span-full flex flex-col items-center gap-6">
      <div className="text-center">
        <StyledText text="Testinomial" />
        <h1 className=" text-4xl font-bold tracking-wide">
          Our Clients Say!!!
        </h1>
      </div>
      <div className="mx-auto flex max-w-80 justify-center gap-8 overflow-hidden lg:max-w-[calc(100%-20rem)]">
        <Story className="" />
        <Story className="" />
        <Story className="" />
      </div>
      {/* <Story /> */}
    </section>
  );
}
