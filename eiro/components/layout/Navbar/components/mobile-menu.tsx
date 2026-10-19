"use client";
import { TertiaryButton } from "@/components/ui/primary_button/Button";
import Link from "next/link";
import { PageLink, ALL_PAGES } from "@/app/config/pages.config";
import REDES_SOCIAIS, { Socials } from "@/app/config/socials.config";
import { Menu, X } from "lucide-react"; // Importamos o ícone X para fechar
import { useState } from "react";
import Image from "next/image";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-fit relative md:invisible md:absolute md:opacity-0">
      {/* BOTÃO TOGGLE (Abre o menu) */}
      <TertiaryButton
        className="
        visible static pointer-events-auto opacity-100
        md:invisible md:absolute md:pointer-events-none md:opacity-0
        "
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
      >
        <Menu />
      </TertiaryButton>

      {/* MENU ABERTO (Drawer Lateral + Overlay de Fundo) */}
      {open && (
        <>
          {/* 1. Backdrop / Overlay escuro atrás do menu */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* 2. Container principal do menu lateral */}
          <div
            className="
              h-screen w-full sm:w-[80vw] md:w-[40vw] fixed z-50
              flex flex-col items-start justify-start
              left-0 top-0 bg-white dark:bg-blue-950 text-neutral-900 dark:text-white
              p-6 gap-6 shadow-2xl transition-transform duration-300
            "
          >
            {/* Cabeçalho do menu com botão de fechar */}
            <div className="w-full flex justify-between items-center border-b border-neutral-200 dark:border-blue-900 pb-4">
              <TertiaryButton
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6class text-black dark:text-white" />
              </TertiaryButton>
              <span className="font-bold text-lg tracking-wider">MENU</span>
            </div>

            {/* Lista de links de navegação */}
            <ul className="flex flex-col gap-4 w-full overflow-hidden">
              {ALL_PAGES.map((item: PageLink) => {
                return (
                  <li key={item.label} className="nav_link w-full">
                    <Link
                      href={item.link}
                      onClick={() => setOpen(false)} // Fecha o menu ao clicar no link
                      className={`
                        flex text-nowrap text-xl py-2 px-3 rounded-lg
                        font-medium justify-start w-full
                        hover:bg-neutral-100 dark:hover:bg-blue-900
                        transition-colors duration-150
                        relative

                        after:content-['>']
                        after:h-5 after:w-5 after:absolute
                        after:-right-20 after:opacity-0
                        after:transition-all after:duration-300
                        hover:after:right-0 hover:after:opacity-100
                      `}
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Rodapé do menu */}
            <div
              className="
              mt-auto pt-4 border-t border-neutral-200
              dark:border-blue-900 w-full text-center text-xs opacity-75
              flex justify-center gap-10
              "
            >
              {REDES_SOCIAIS.map((social: Socials) => {
                const icon = social.icon as string
                return (
                  <a
                    key={social.platform}
                    href={social.link}
                    rel="noopener noreferrer"
                    title={social.platform}
                    aria-label={`Acessar ${social.platform}`}
                  >
                    <Image
                      src={icon}
                      alt={social.platform}
                      width={24}
                      height={24}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
