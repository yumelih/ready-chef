import { ChefType } from "@/types/types";
import {
  EnvelopeIcon,
  HandRaisedIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { Button } from "../ui/button";

// const profile = {
//   name: "Ricardo Cooper",
//   email: "ricardo.cooper@example.com",
//   avatar:
//     "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
//   backgroundImage:
//     "https://images.unsplash.com/photo-1709418354495-fc4e5dd6d1f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",
//   fields: [
//     ["Phone", "(555) 123-4567"],
//     ["Email", "ricardocooper@example.com"],
//     ["Title", "Senior Front-End Developer"],
//     ["Team", "Product Development"],
//     ["Location", "San Francisco"],
//     ["Sits", "Oasis, 4th floor"],
//     ["Salary", "$145,000"],
//     ["Birthday", "June 8, 1990"],
//   ],
// };

export default function HeaderWithImage({
  name,
  profilePhoto,
  imageCover,
}: {
  [key: string]: string;
}) {
  return (
    <div>
      <div className="relative h-32 w-full lg:h-48">
        <Image
          className="object-cover"
          src={imageCover}
          fill={true}
          alt={`${name} cover image`}
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="relative h-24 w-24  bg-cover sm:h-32 sm:w-32 ">
            <Image
              className="rounded-full bg-gray-800 ring-4 ring-white"
              fill={true}
              src={profilePhoto}
              alt={`${name} image`}
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {name}
              </h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                variant="action"
                size="action"
                className="font-semibold text-white"
              >
                <HandRaisedIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5"
                  aria-hidden="true"
                />
                <span>Hire</span>
              </Button>
              <Button
                variant="action"
                size="action"
                className="font-semibold text-white"
              >
                <EnvelopeIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 "
                  aria-hidden="true"
                />
                <span>Message</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">{name}</h1>
        </div>
      </div>
    </div>
  );
}
