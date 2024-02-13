import {
  ChevronRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import GridAutoFit from "../ui/gridautofit";
import StyledText from "../ui/styled-text";
import Link from "next/link";
import { Button } from "../ui/button";

const companyItems: string[] = [
  "About Us",
  "Contact Us",
  "Chefs",
  "Privacy Policy",
  "Terms & Conditions",
];

const contactItems: { desc: string; icon: React.ReactElement }[] = [
  { desc: "123 Street, New York, USA", icon: <MapPinIcon className="w-5" /> },
  { desc: "+012 345 67890", icon: <PhoneIcon className="w-5" /> },
  { desc: "mail@domain.com", icon: <EnvelopeIcon className="w-5" /> },
];

const subItems: string[] = ["Home", "Cookies", "Help", "FAQs"];

function Company() {
  return (
    <div className="flex flex-col gap-2">
      <StyledText text="Company" isDoubleLines={false} />
      <ul>
        {companyItems.map((elm) => {
          return (
            <li
              key={elm}
              className="flex cursor-pointer items-center gap-1 text-white hover:text-gray-200"
            >
              <ChevronRightIcon className="w-5" />
              {elm}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-2">
      <StyledText text="Contact" isDoubleLines={false} />
      <ul className="space-y-2">
        {contactItems.map((elm) => {
          return (
            <li
              key={elm.desc}
              className="flex cursor-pointer items-center gap-2 text-white hover:text-gray-200"
            >
              {elm.icon}
              {elm.desc}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function JoinUs() {
  return (
    <div className="flex max-w-52 flex-col justify-center gap-2">
      <StyledText text="Join Us" isDoubleLines={false} />
      <ul className="flex flex-col justify-end space-y-4">
        <li className="">
          If you are chef looking for work please &nbsp;
          <Link
            href="#"
            className="cursor-pointer text-orange-600 underline hover:text-orange-500"
          >
            contact us.
          </Link>
        </li>

        <li className="flex justify-center">
          <Button size="sm">Join To Hire a Chef</Button>
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="col-span-full bg-blue-950 pb-4 pt-12 text-white">
      <GridAutoFit alignment="justify-items-center">
        <Company />
        <Contact />
        <JoinUs />
      </GridAutoFit>
      <div className="mt-12 flex w-full flex-col items-center justify-between gap-2 border-t-2 px-24 pt-4 lg:flex-row lg:gap-0">
        <p>© Ready Chef, All Rights Reserved. Designed By Yumelih</p>
        <ul className="flex gap-2 divide-x-2 [&_li]:pl-3">
          {subItems.map((elm) => {
            return (
              <li
                key={elm}
                className="cursor-pointer text-white hover:text-gray-200"
              >
                {elm}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
