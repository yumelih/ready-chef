import { Kaushan_Script } from "next/font/google";
import GridAutoFit from "../ui/gridautofit";
import Image from "next/image";

const kaushan = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });

const chefs: { [index: string]: string }[] = [
  {
    imageSrc: "/static/images/chef-1.jpg",
    chefName: "Chef Bazooka",
    chefDesc: "Greatest Chef Ever",
  },
  {
    imageSrc: "/static/images/chef-2.jpg",
    chefName: "Chef Chad",
    chefDesc: "Greatest Chef Ever",
  },
  {
    imageSrc: "/static/images/chef-3.jpg",
    chefName: "Chef Omaga",
    chefDesc: "Greatest Chef Ever",
  },
  {
    imageSrc: "/static/images/chef-4.jpg",
    chefName: "Chef Cu-Chan",
    chefDesc: "Greatest Chef Ever",
  },
];

function ChefContainer({
  imageSrc,
  chefName,
  chefDesc,
}: {
  imageSrc: string;
  chefName: string;
  chefDesc: string;
}) {
  return (
    <div className="group">
      <div className="flex cursor-pointer flex-col items-center justify-center gap-y-3 rounded-sm bg-white p-6 shadow-md transition-all">
        <div className="relative aspect-square w-72 ">
          <Image
            src={imageSrc}
            fill={true}
            alt={chefName + " " + chefDesc}
            className="min-w-full rounded-full transition-transform hover:overflow-hidden group-hover:scale-105"
          />
        </div>
        <div className="space-y-1 text-center">
          <h2 className="text-xl font-bold">{chefName}</h2>
          <h3 className="text-base">{chefDesc}</h3>
        </div>
      </div>
      <button className="gr h-0 w-full cursor-pointer bg-yellow-600 px-4 py-2 opacity-0 transition-all hover:text-white group-hover:h-fit group-hover:opacity-100">
        HIRE NOW
      </button>
    </div>
  );
}

export default function ChefsShowcase() {
  return (
    <div className="col-span-1 col-start-2 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="h-1 w-24 bg-orange-600" />
          <h2 className={`${kaushan.className} text-2xl text-orange-600`}>
            Chef Roster
          </h2>
          <div className="h-1 w-24 bg-orange-600" />
        </div>
        <h1 className="text-4xl font-bold">Master Chefs</h1>
      </div>
      <GridAutoFit className="w-full items-start">
        {chefs.map((elm, i) => {
          return (
            <ChefContainer
              key={i}
              imageSrc={elm.imageSrc}
              chefName={elm.chefName}
              chefDesc={elm.chefDesc}
            />
          );
        })}
      </GridAutoFit>
    </div>
  );
}
