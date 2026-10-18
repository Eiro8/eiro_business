import {
  SecondaryButton,
  TertiaryButton,
} from "@/components/ui/primary_button/Button";
import Hero from "@/public/images/wavy_lines.png";
import { CONTACT_INFO } from "./config/brand.config";
import { ArrowRight, Clock, Copy, Mail, PhoneCall } from "lucide-react";
import { Form } from "./components/page/form.component";
import CopyButton from "./components/CopyButton.component";
import contact_bg from '@/public/images/centered_lines.png'
import Image from "next/image";
import REDES_SOCIAIS, { Socials } from "./config/socials.config";

export default function Home() {
  return (
    <main className="max-w-full w-full flex flex-col justify-center mt-24">
      {/* HERO */}
      <section
        id="hero"
        className="section bg-cover bg-center bg-no-repeat
        "
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
      {/*PRODUTOS */}
      {/*TODO: ADICIONAR PRODUTOS AQUI */}
      {/* WHY US */}
      <section id="porque_nos_escolher" className="section">
        <div className="content_container">
          <h2 className="text-4xl font-bold underline mb-6">
            Motivos para nos escolher
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] lg:h-70 p-4 gap-4">
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
          <div className="flex flex-col lg:grid lg:grid-cols-[30%_70%] lg:h-70 p-4 gap-4">
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
                transparente. Você tem a tranquilidade de saber exatamente o que
                está comprando e a{" "}
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
                Sabemos que quem compra tecnologia tem pressa. Nosso processo de
                conferência, embalagem e despache é otimizado para que seu
                pedido chegue o{" "}
                <span className="highlight_text-yellow">
                  mais rápido possível.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CONTATO */}
      <section id="contato" className="section">
        <div className="p-5 flex flex-col md:flex-row gap-5">
          <div className="flex flex-col relative p-6 box-border justify-start text-center items-center rounded-4xl overflow-hidden">
            <Image src={contact_bg.src} alt="" preload={true} className="absolute w-full h-full object-cover object-center -z-10 rounded-[inherit]" width={400} height={300} />
            <h2 className="font-bold text-2xl mt-10">Fale Conosco</h2>
            <span className="font-semibold max-w-3/6">
              Seja para escolher a tecnologia certa ou acompanhar o seu pedido,
              nossa equipe está pronta para responder com rapidez, transparência
              e eficiência
            </span>
            <span className="flex items-center gap-2 ">
              {REDES_SOCIAIS.map((social:Socials) => {
                return (
                  <a href={social.link} key={social.platform} rel="noopener noreferrer" target="_blank" className="text-black dark:text-white">
                    <Image src={social.icon} alt={social.platform} aria-label={social.platform}/>
                  </a>
                )
              })}
            </span>
          </div>
          <div className="flex flex-col gap-5 p-5 items-center">
            <div className="grid grid-cols-[40px_200px_40px] gap-2 shadow shadow-black dark:shadow-white hover:shadow-blue-600 duration-300 hover:cursor-pointer p-5 items-center w-fit rounded-3xl">
              <Mail />
              <span>
                <h4 className="font-bold text-lg">E-mail da Empresa</h4>
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
            <div className="grid grid-cols-[40px_200px_40px] gap-2 shadow shadow-black dark:shadow-white hover:shadow-blue-600 duration-300 p-5 items-center w-fit rounded-3xl">
              <PhoneCall />
              <span>
                <h4 className="font-bold text-lg">Telefone da Empresa</h4>
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
            <div className="flex gap-2">
              <Clock />
              <p>{CONTACT_INFO.availability}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
