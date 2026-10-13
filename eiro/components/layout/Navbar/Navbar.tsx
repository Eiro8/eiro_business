import { PAGES } from "@/app/config/pages.config";
import Button from "@/components/ui/primary_button/Button";
import Link from "next/link";
import { Accessibility,Moon,Contact } from "lucide-react";
import Image from "next/image";
import logo from '@/public/images/eiro_black_no_background.png'

const Navbar = () => {
  return (
    <header className="flex items-center min-w-5 w-full justify-center box-content bg-black z-40 self-center">
      <div className="max-w-7xl w-full">
        <section className="flex justify-between h-fit items-center box-content gap-2 border-b-2 border-b-blue-800 p-3 pb-1 bg-white text-black font-medium">
          <div className="flex items-center gap-1">
            <Image src={logo} alt="Eiro" height={40} inert={true}/>

          </div>
          <div className="flex items-center gap-0.5">
            <Button>{<Moon width={'24px'}/>}</Button>
            <Button>{<Accessibility width={'24px'}/>}</Button>
            <Button>{<Contact width={'24px'}/>}<p>Contato</p></Button>
          </div>
        </section>
        <nav className="h-fit p-3 relative shadow-sm shadow-blue-100/20">
          <ul className="flex items-center justify-evenly h-6">
            {PAGES.map((item) => {
              return (
                <li key={item.label} className="nav_link">
                  <Link
                    href={item.link}
                    className="flex relative before:content-[''] before:w-0 before:h-0.5 before:absolute before:bg-white before:bottom-0 justify-center before:rounded-full hover:before:w-full before:transition-all duration-100"
                  >
                    {item.label.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
