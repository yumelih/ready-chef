import {
  UserIcon,
  ShoppingCartIcon,
  ChatBubbleLeftRightIcon,
  GiftIcon,
} from "@heroicons/react/20/solid";
import React, { cloneElement } from "react";

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
    <section className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] justify-items-center gap-8 px-32 py-20">
      {features.map((elm) => {
        const icon = cloneElement(elm.icon, {
          className: "text-yellow-600 w-20 h-20",
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
    </section>
  );
}
