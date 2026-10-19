import { ALL_PAGES, PageLink } from "@/app/config/pages.config";
import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "@/public/images/eiro_white_no_background.png";
import { BRAND_INFO, CONTACT_INFO } from "@/app/config/brand.config";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 dark:bg-black text-white w-full flex flex-col justify-center items-center gap-4 p-4">
      <div className="flex flex-col md:grid md:grid-cols-[40%_auto] w-full md:max-w-360 gap-10 md:justify-center">
        <section className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex w-fit flex-col border border-white items-center justify-center p-2">
            <Image src={WhiteLogo} alt="EIRO" width={80} height={80} />
            <span className="text-sm font-light text-wrap max-w-24 justify-center text-center">
              {BRAND_INFO.slogan}.
            </span>
          </div>
          <h3 className="text-4xl font-extrabold max-w-3/6 md:text-start">Chega de surpresas, escolha EIRO.</h3>
        </section>
        <div className="gap-20 p-5 flex flex-col md:flex-row">
          <nav className="flex flex-col gap-4 items-center">
            <h3 className="border-b border-gray-400 text-gray-400">PAGINAS</h3>
            <ul className="flex flex-col gap-3  text-gray-300 items-center md:items-start">
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
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="border-b border-white">CONTATO</h3>
            <span className="flex flex-col items-center md:items-start gap-3">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Mail height={20}/>
                {CONTACT_INFO.email}
              </a>{" "}
              <a
                href={`tel:${CONTACT_INFO.tel}`}
                rel="noopener noreferrer"
                className="flex gap-1 items-center"
              >
                <Phone height={20}/> {CONTACT_INFO.tel}
              </a>
            </span>
          </div>
        </div>
      </div>
      <p>TODOS DIREITOS RESERVADOS</p>
    </footer>
  );
};

export default Footer;
