import {
  ChevronRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import GridAutoFit from "../ui/gridautofit";
import StyledText from "../ui/styled-text";
import Link from "next/link";

function Company() {
  return (
    <div className="flex flex-col gap-2">
      <StyledText text="Company" isDoubleLines={false} />
      <ul>
        <li className="flex items-center gap-1">
          <ChevronRightIcon className="w-5" />
          About Us
        </li>
        <li className="flex items-center gap-1">
          <ChevronRightIcon className="w-5" />
          Contact Us
        </li>
        <li className="flex items-center gap-1">
          <ChevronRightIcon className="w-5" />
          Chefs
        </li>
        <li className="flex items-center gap-1">
          <ChevronRightIcon className="w-5" />
          Privacy Policy
        </li>
        <li className="flex items-center gap-1">
          <ChevronRightIcon className="w-5" />
          Terms & Condition
        </li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-2">
      <StyledText text="Contact" isDoubleLines={false} />
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <MapPinIcon className="w-5" />
          123 Street, New York, USA
        </li>
        <li className="flex items-center gap-2">
          <PhoneIcon className="w-5" />
          +012 345 67890
        </li>
        <li className="flex items-center gap-2">
          <EnvelopeIcon className="w-5" />
          mail@domain.com
        </li>
      </ul>
    </div>
  );
}

function JoinUs() {
  return (
    <div className="flex max-w-52 flex-col gap-2">
      <StyledText text="Join Us" isDoubleLines={false} />
      <ul className="space-y-2">
        <li className="">
          If you are chef looking for work please &nbsp;
          <Link
            href="#"
            className="cursor-pointer text-orange-600 underline hover:text-orange-500"
          >
            contact us.
          </Link>
        </li>

        <li className="flex items-center gap-2"></li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="col-span-full bg-blue-950 pb-8 pt-12 text-white">
      <GridAutoFit
        alignment="justify-items-center"
        gridWidths={["20rem", "1fr"]}
      >
        <Company />
        <Contact />
        <JoinUs />
      </GridAutoFit>
      <div></div>
    </footer>
  );
}
