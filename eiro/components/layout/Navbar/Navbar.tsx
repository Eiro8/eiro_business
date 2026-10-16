import { ALL_PAGES } from "@/app/config/pages.config";
import {
  Button,
  SecondaryButton,
  TertiaryButton,
} from "@/components/ui/primary_button/Button";
import Link from "next/link";
import { Contact, Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/eiro_white_no_background.png";
import { ThemeToggle } from "./components/theme-toggle";
import { ConfigToggle } from "./components/config-toggle";
import MobileMenu from "./components/mobile-menu";

const Navbar = () => {
  return (
    <header className="flex fixed items-center min-w-5 w-full justify-center box-content p-4 z-40 self-center h-16 shadow-sm shadow-white/7 | bg-blue-950 dark:bg-black">
      <div className="max-w-7xl w-full">
        <section className="grid grid-cols-3 justify-between items-center box-content gap-2 p-3 pb-1 text-white font-medium">
          <nav className="h-fit p-3 relative">

            {/* MENU DESKTOP */}
            <ul
              className="
              flex items-center justify-evenly h-6 gap-4
              invisible absolute pointer-events-none opacity-0
              md:visible md:static md:pointer-events-auto md:opacity-100
              "
            >
              {ALL_PAGES.map((item) => {
                return (
                  <li key={item.label} className="nav_link">
                    <Link
                      href={item.link}
                      className="flex text-nowrap relative before:content-[''] before:w-0 before:h-0.5 before:absolute font-normal before:bg-white before:bottom-0 justify-center before:rounded-full hover:before:w-full before:transition-all duration-100 whitespace-nowrap"
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* MENU MOBILE */}
            <MobileMenu />
          </nav>
          <div className="flex w-full justify-center items-center">
            <Image
              src={logo}
              alt="Eiro"
              height={60}
              inert={true}
              className="self-center flex w-fit "
            />
          </div>
          <div className="flex items-center justify-end gap-5 text-nowrap">
            <SecondaryButton>
              {<Contact width={"24px"} />}
              <p>Contate-nos</p>
            </SecondaryButton>
            <div className="flex">
              <ThemeToggle />
              <ConfigToggle />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
