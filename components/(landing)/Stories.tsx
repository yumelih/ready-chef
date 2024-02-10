import { FaceSmileIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function Story() {
  return (
    <div className="group flex w-3/5 cursor-pointer flex-col items-start gap-2 hyphens-auto rounded-sm bg-white  p-6 text-gray-800 hover:bg-orange-500 hover:text-gray-100">
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
          src="/static/images/user.jpg"
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
    </div>
  );
}

export default function Stories() {
  return (
    <section className="col-span-1 col-start-2">
      <Story />
    </section>
  );
}
