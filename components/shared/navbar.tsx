import Logo from "../ui/logo";
import NavbarMobile from "./navbar-mobile";

const navItems: string[] = [
  "Home",
  "About",
  "Chefs",
  "Contact",
  "Login",
  "Signup",
];

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between bg-slate-900 p-8 text-white ">
      <Logo />
      <NavbarMobile navItems={navItems} className="block md:hidden" />
      <ul className="hidden items-center justify-start gap-8 text-lg font-semibold uppercase md:flex">
        {navItems.map((item) => {
          return (
            <li
              className="cursor-pointer transition-all duration-300 hover:tracking-widest  hover:text-gray-200"
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
