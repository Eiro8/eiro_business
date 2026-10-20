import {SecondaryButton} from "@/components/ui/primary_button/Button";
import Hero from "@/public/images/wavy_lines.png";
import { CONTACT_INFO } from "./config/brand.config";
import { ArrowRight, Clock, Mail, PhoneCall } from "lucide-react";
import CopyButton from "./components/CopyButton.component";
import contact_bg from "@/public/images/centered_lines.png";
import Image from "next/image";
import REDES_SOCIAIS, { Socials } from "./config/socials.config";
import { IconType } from "react-icons";

export default function Home() {
  return (
    <main className="w-full flex flex-col pt-24 grow">
      {/* HERO */}
      <section id="hero" className="section">
        <Image
          src={Hero.src}
          alt="Background"
          sizes="100vw"
          priority
          fill
          className="z-0 absolute"
        />
        <div
          className="content_container md:h-150
           grid md:grid-cols-[50%_auto] gap-10 z-10"
        >
          <h1 className="text-3xl md:text-7xl h-fit md:leading-19 font-bold self-start content-center text-white">
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
        <div className="content_container text-black dark:text-white">
          <h2 className="text-4xl font-bold underline mb-6">
            Motivos para nos escolher
          </h2>
          <div className="grid grid-rows-2 h-full max-h-250 lg:content-center">
            {/* PRIMEIRA LINHA DO GRID */}
            <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] p-4 gap-4">
              {/* CARD 1: 100% Testado Antes do Envio */}
              <div className="bg-blue-900 dark:bg-white rounded-2xl h-full">
                <div
                  className="flex flex-col p-4 gap-2 h-full
                  rounded-[inherit] relative
                  bg-white dark:bg-black
                  dark:shadow-white shadow-black
                  shadow-[0px_0px_4px_0px]
                  -translate-x-2 -translate-y-2"
                >
                  <h3 className="text-2xl font-bold">
                    100% Testado Antes do Envio
                  </h3>
                  <p className="font-semibold">
                    Não trabalhamos com sorte. Cada dispositivo passa por um
                    teste rigoroso de funcionamento antes de sair do nosso
                    estoque, garantindo que você receba{" "}
                    <span className="highlight_text-yellow">
                      tudo pronto para usar.
                    </span>
                  </p>
                </div>
              </div>

              {/* CARD 2: Embalagem com Proteção Máxima */}
              <div className="bg-blue-900 dark:bg-white rounded-2xl h-full">
                <div
                  className="flex flex-col p-4 gap-2 h-full
                  rounded-[inherit] relative
                  bg-white dark:bg-black
                  dark:shadow-white shadow-black
                  shadow-[0px_0px_4px_0px]
                  -translate-x-2 -translate-y-2"
                >
                  <h3 className="text-2xl font-bold">
                    Embalagem com Proteção Máxima
                  </h3>
                  <p className="font-semibold">
                    Tratamos a tecnologia com o cuidado que ela merece. Seus
                    produtos são embalados com proteção reforçada contra
                    impactos, garantindo{" "}
                    <span className="highlight_text-yellow">
                      integridade total durante o transporte.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* SEGUNDA LINHA DO GRID */}
            <div className="flex flex-col lg:grid lg:grid-cols-[30%_70%] p-4 gap-4">
              {/* CARD 3: Compra Sem Surpresas */}
              <div className="bg-blue-900 dark:bg-white rounded-2xl h-full">
                <div
                  className="flex flex-col p-4 gap-2 h-full
                  rounded-[inherit] relative
                  bg-white dark:bg-black
                  dark:shadow-white shadow-black
                  shadow-[0px_0px_4px_0px]
                  -translate-x-2 -translate-y-2"
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
              </div>

              {/* CARD 4: Agilidade no Envio */}
              <div className="bg-blue-900 dark:bg-white rounded-2xl h-full">
                <div
                  className="flex flex-col p-4 gap-2 h-full
                  rounded-[inherit] relative
                  bg-white dark:bg-black
                  dark:shadow-white shadow-black
                  shadow-[0px_0px_4px_0px]
                  -translate-x-2 -translate-y-2"
                >
                  <h3 className="text-2xl font-bold">Agilidade no Envio</h3>
                  <p className="font-semibold">
                    Sabemos que quem compra tecnologia tem pressa. Nosso
                    processo de conferência, embalagem e despache é otimizado
                    para que seu pedido chegue o{" "}
                    <span className="highlight_text-yellow">
                      mais rápido possível.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTATO */}
      <section id="contato" className="section">
        <div
          className="md:grid md:grid-cols-[60%_40%] max-w-360 w-full h-full md:h-[500px] gap-3 p-5 flex flex-col">
          <div className="flex flex-col relative p-6 box-border w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={contact_bg.src}
              alt="Background"
              sizes="100%"
              priority
              fill
              className="z-0 absolute"
            />
            <div className="z-10 flex flex-col w-full h-full text-center items-center text-white gap-5">
              <h2 className="font-bold text-[2rem] mt-10">Fale Conosco</h2>
              <span className="font-semibold leading-6 md:max-w-100 w-full text-[1.4rem]">
                Seja para pedir ajuda, escolher a tecnologia certa ou acompanhar
                o seu pedido, você será escutado. Conte conosco.
              </span>
              <span className="flex items-center gap-4 mt-15">
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
          </div>
          <div className="flex flex-col p-5 gap-5 items-center grow justify-center text-black dark:text-white">
            <div className="flex items-center w-full gap-3
              shadow shadow-black dark:shadow-white hover:shadow-blue-600
              duration-300 hover:cursor-pointer p-5 rounded-3xl">
              <Mail />
              <span className="w-full">
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
                className="hover:fill-blue-500">
                <ArrowRight className="duration-300 transition-all hover:text-blue-700" />
              </a>
            </div>
            <div className="flex items-center w-full gap-3
              shadow shadow-black dark:shadow-white hover:shadow-blue-600
              duration-300 hover:cursor-pointer p-5 rounded-3xl">
              <PhoneCall />
              <span className="w-full">
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
