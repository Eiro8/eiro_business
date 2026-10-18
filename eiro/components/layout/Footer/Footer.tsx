import { ALL_PAGES, PageLink } from "@/app/config/pages.config";
import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "@/public/images/eiro_white_no_background.png";
import { BRAND_INFO, CONTACT_INFO } from "@/app/config/brand.config";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 dark:bg-black text-white w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-[400px_auto] p-4 w-full max-w-360">
        <section className="flex">
          <div className="flex w-fit flex-col border border-white items-center justify-center p-2">
            <Image src={WhiteLogo} alt="EIRO" width={80} height={80} />
            <span className="text-sm font-light text-wrap max-w-24 justify-center text-center">
              {BRAND_INFO.slogan}.
            </span>
          </div>
          <video src="https://www.youtube.com/watch?v=piKJOD2s8KY" controls={false} loop={true}></video>
        </section>
        <div className="justify-self-end-safe gap-3 flex flex-col">
          <nav className="flex grow-0 flex-col p-2">
            <h3 className="self-start">PAGINAS</h3>
            <ul className="flex h-full gap-5 justify-start items-end text-gray-300">
              {ALL_PAGES.map((page: PageLink) => (
                <li key={page.label}>
                  <Link
                    className="text-md font-normal hover:text-white duration-300 transition-all"
                    href={page.link}
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-3 flex-col p-2">
            <h3>CONTATO</h3>
            <span className="flex gap-5">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <Mail />
                {CONTACT_INFO.email}
              </a>{" "}
              |
              <a
                href={`tel:${CONTACT_INFO.tel}`}
                rel="noopener noreferrer"
                className="flex gap-1 items-center"
              >
                <Phone /> {CONTACT_INFO.tel}
              </a>
            </span>
          </div>
        </div>
      </div>
      TODOS DIREITOS RESERVADOS
    </footer>
  );
};

export default Footer;
