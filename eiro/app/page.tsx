import {
  SecondaryButton,
  TertiaryButton,
} from "@/components/ui/primary_button/Button";
import Hero from "@/public/images/wavy_lines.png";
import { CONTACT_INFO } from "./config/brand.config";
import { ArrowRight, Clock, Copy, Mail, PhoneCall } from "lucide-react";
import CopyButton from "./components/CopyButton.component";
import contact_bg from "@/public/images/centered_lines.png";
import Image from "next/image";
import REDES_SOCIAIS, { Socials } from "./config/socials.config";
import { IconType } from "react-icons";

export default function Home() {
  return (
    <main className="w-full flex flex-col pt-24 grow">
      {/* HERO */}
      <section
        id="hero"
        className="section bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Hero.src})`,
        }}
      >
        <div
          className="content_container md:h-150
           grid md:grid-cols-[50%_auto] gap-10"
        >
          <h1 className="text-3xl md:text-7xl h-fit md:leading-19 font-bold self-start content-center">
            Tecnologia testada, entregue com{" "}
            <span className="highlight_text">segurança.</span>
          </h1>
          <span className="flex flex-col items-center md:items-start gap-4 h-fit md:justify-self-end">
            <p className="text-lg text-white text-wrap md:max-w-80">
              Testamos cada dispositivo, embalamos com cuidado e entregamos com
              agilidade. Com a gente, você recebe inovação com segurança total.
            </p>
            <SecondaryButton>Saiba mais</SecondaryButton>
          </span>
        </div>
      </section>
      {/*TODO: ADICIONAR PRODUTOS AQUI */}
      {/* WHY US */}
      <section id="porque_nos_escolher" className="section">
        <div className="content_container">
          <h2 className="text-4xl font-bold underline mb-6">
            Motivos para nos escolher
          </h2>
          <div className="grid grid-rows-2 h-full max-h-250 lg:content-center">
            <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] p-4  gap-4">
              <div
                className="flex flex-col p-4 gap-2
              rounded-2xl relative
              before:absolute before:content-['']
              bg-white dark:bg-black
              dark:shadow-white shadow-black
              shadow-[0px_0px_4px_0px]
              before:-z-10
              before:bg-black dark:before:bg-white
              before:inset-0 before:rounded-[inherit]
              before:-translate-x-2 before:-translate-y-2
              before:pointer-events-none"
              >
                <h3 className="text-2xl font-bold">
                  100% Testado Antes do Envio
                </h3>
                <p className="font-semibold">
                  Não trabalhamos com sorte. Cada dispositivo passa por um teste
                  rigoroso de funcionamento antes de sair do nosso estoque,
                  garantindo que você receba{" "}
                  <span className="highlight_text-yellow">
                    tudo pronto para usar.
                  </span>
                </p>
              </div>
              <div
                className="flex flex-col p-4 gap-2
              rounded-2xl relative
              before:absolute before:content-['']
              bg-white dark:bg-black
              dark:shadow-white shadow-black
              shadow-[0px_0px_4px_0px]
              before:-z-10
              before:bg-black dark:before:bg-white
              before:inset-0 before:rounded-[inherit]
              before:-translate-x-2 before:-translate-y-2
              before:pointer-events-none
              "
              >
                <h3 className="text-2xl font-bold">
                  Embalagem com Proteção Máxima
                </h3>
                <p className="font-semibold">
                  Tratamos a tecnologia com o cuidado que ela merece. Seus
                  produtos são embalados com proteção reforçada contra impactos,
                  garantindo{" "}
                  <span className="highlight_text-yellow">
                    integridade total durante o transporte.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-[30%_70%] p-4 gap-4">
              <div
                className="flex flex-col p-4 gap-2
              rounded-2xl relative
              before:absolute before:content-['']
              bg-white dark:bg-black
              dark:shadow-white shadow-black
              shadow-[0px_0px_4px_0px]
              before:-z-10
              before:bg-black dark:before:bg-white
              before:inset-0 before:rounded-[inherit]
              before:-translate-x-2 before:-translate-y-2
              before:pointer-events-none
              "
              >
                <h3 className="text-2xl font-bold">Compra Sem Surpresas</h3>
                <p className="font-semibold">
                  Unimos controle de qualidade estrito a um atendimento
                  transparente. Você tem a tranquilidade de saber exatamente o
                  que está comprando e a{" "}
                  <span className="highlight_text-yellow">
                    certeza de receber um produto perfeito.
                  </span>
                </p>
              </div>
              <div
                className="flex flex-col p-4 gap-2
              rounded-2xl relative
              before:absolute before:content-['']
              bg-white dark:bg-black
              dark:shadow-white shadow-black
              shadow-[0px_0px_4px_0px]
              before:-z-10
              before:bg-black dark:before:bg-white
              before:inset-0 before:rounded-[inherit]
              before:-translate-x-2 before:-translate-y-2
              before:pointer-events-none
              "
              >
                <h3 className="text-2xl font-bold">Agilidade no Envio</h3>
                <p className="font-semibold">
                  Sabemos que quem compra tecnologia tem pressa. Nosso processo
                  de conferência, embalagem e despache é otimizado para que seu
                  pedido chegue o{" "}
                  <span className="highlight_text-yellow">
                    mais rápido possível.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTATO */}
      <section id="contato" className="section">
        <div
          className="md:grid md:grid-cols-[50%_50%]
          h-full md:h-[500px] gap-5 p-5 flex flex-col
          "
        >
          <div
            className="flex flex-col relative p-6 box-border
            justify-start text-center
            items-center rounded-4xl overflow-hidden
            bg-cover bg-center bg-no-repeat
            "
            style={{
              backgroundImage: `url(${contact_bg.src})`,
            }}
          >
            <h2 className="font-bold text-2xl mt-10">Fale Conosco</h2>
            <span className="font-semibold max-w-100">
              Seja para pedir ajuda, escolher a tecnologia certa ou acompanhar o
              seu pedido, você será escutado.
            </span>
            <span className="flex items-center gap-4 mt-8">
              {REDES_SOCIAIS.map((social: Socials) => {
                const Icon: IconType = social.icon as IconType;
                return (
                  <a
                    href={social.link}
                    key={social.platform}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Acessar o ${social.platform} da EIRO`}
                  >
                    <Icon
                      size={24}
                      title={social.platform}
                      className="fill-white hover:fill-blue-700 duration-300 transition-colors"
                    />
                  </a>
                );
              })}
            </span>
          </div>
          <div className="flex flex-col gap-5 p-5 items-center grow w-full md:w-fit">
            <div className="grid grid-cols-[minmax(20px,40px)_auto_minmax(20px,40px)] grow md:grid-cols-[40px_200px_20px] w-full md:w-fit gap-2 shadow shadow-black dark:shadow-white hover:shadow-blue-600 duration-300 hover:cursor-pointer p-5 items-center rounded-3xl">
              <Mail />
              <span>
                <h4 className="font-bold text-lg">E-mail</h4>
                <span className="flex items-center gap-2">
                  <p className="font-light" id="email">
                    {CONTACT_INFO.email}
                  </p>{" "}
                  <CopyButton id="email" />
                </span>
              </span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                rel="noopener noreferrer"
                aria-label="Entrar em contato via e-mail"
                className="hover:fill-blue-500"
              >
                <ArrowRight className="duration-300 transition-all hover:text-blue-700" />
              </a>
            </div>
            <div className="grid grid-cols-[40px_auto_40px] md:grid-cols-[40px_200px_20px] grow w-full md:w-fit gap-2 shadow shadow-black dark:shadow-white hover:shadow-blue-600 duration-300 hover:cursor-pointer p-5 items-center rounded-3xl">
              <PhoneCall />
              <span>
                <h4 className="font-bold text-lg">Telefone</h4>
                <span className="flex items-center gap-1">
                  <p className="font-light" id="telephone">
                    {CONTACT_INFO.tel}
                  </p>{" "}
                  <CopyButton id="telephone" />
                </span>
              </span>
              <a
                href={`tel:${CONTACT_INFO.tel}`}
                rel="noopener noreferrer"
                aria-label="Entrar em contato via telefone"
              >
                <ArrowRight className="duration-300 transition-all hover:text-blue-700" />
              </a>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <span className="flex gap-2 justify-center">
                <Clock />
                <h3 className="font-bold">Horário de atendimento</h3>
              </span>
              <p>{CONTACT_INFO.availability}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
