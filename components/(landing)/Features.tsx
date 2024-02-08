import {
  UserIcon,
  ShoppingCartIcon,
  ChatBubbleLeftRightIcon,
  GiftIcon,
} from "@heroicons/react/20/solid";
import React, { cloneElement } from "react";
import GridAutoFit from "../ui/gridautofit";

interface feature {
  icon: React.ReactElement;
  title: string;
  desc: string;
}

const features: feature[] = [
  {
    icon: <UserIcon />,
    title: "Master Chefs",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <ShoppingCartIcon />,
    title: "Online Order",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <ChatBubbleLeftRightIcon />,
    title: "24/7 Service",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <GiftIcon />,
    title: "Quality Food",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

export default function Features() {
  return (
    <GridAutoFit className="col-span-1 col-start-2 gap-8">
      {features.map((elm) => {
        const icon = cloneElement(elm.icon, {
          className: "text-orange-600 w-20 h-20",
        });
        return (
          <div
            key={elm.title}
            className="space-y-1 rounded-sm bg-white px-6 py-8 shadow-md"
          >
            <div>{icon}</div>
            <h1 className="text-3xl font-bold">{elm.title}</h1>
            <p className="text-lg font-semibold text-gray-600">{elm.desc}</p>
          </div>
        );
      })}
    </GridAutoFit>
  );
}
