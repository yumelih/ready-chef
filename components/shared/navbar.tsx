import Logo from "../ui/logo";

const navItems: string[] = [
  "Home",
  "About",
  "Chefs",
  "Login",
  "Signup",
  "Contact",
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 w-full bg-slate-900 text-white">
      <Logo />
      <ul className="flex justify-start items-center gap-8 uppercase text-lg font-semibold">
        {navItems.map((item) => {
          return (
            <li
              className="cursor-pointer transition-all duration-300 hover:text-gray-200  hover:tracking-widest"
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
