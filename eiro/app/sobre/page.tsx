import Image from "next/image";
import hero_tech from "@/public/images/eiro_white_no_background.png";

export default function Sobre() {
  return (
    <main className="h-full w-full">
      <section className="section bg-black overflow-hidden">
        <div className="content_container flex flex-row p-6 text-white z-20 h-80 max-h-screen relative">
          <Image
            src={hero_tech}
            alt="Background"
            width={400}
            className="object-fill absolute object-top
          opacity-20 z-10 top-0 right-0
          translate-y-10 translate-x-30 -rotate-10 pointer-events-none"
            draggable={false}
          />

          <div className="w-full h-full flex flex-col justify-between">
            <p className="text-2xl sm:text-5xl font-bold text-start">
              NOSSA
              <br />
              AMBIÇÃO
            </p>
            <h1 className="text-mdmd:text-2xl">SOBRE NÓS</h1>
          </div>
          <div className="w-full h-full flex flex-col items-end justify-end">
            <p className="text-2xl sm:text-5xl font-bold text-end">
              PELA
              <br />
              EXCELÊNCIA
            </p>
          </div>
        </div>
      </section>
      <section className="section" id="sobre_nos">
        <div className="content_container">
          <div className="h-screen w-full flex flex-col items-center text-center">
            <h2 className="bg-gray-800 font-normal text-md p-2 flex w-fit h-fit mt-5 rounded-4xl">
              Nossa história
            </h2>
            <p>
              A EIRO nasceu com a missão de proporcionar a todos uma experiência
              superior com a tecnologia.<br/>Somos pioneiros e uma das únicas
              empresas no Brasil que se dedicam a garantir a <b className="highlight_text">qualidade e a
              funcionalidade</b> do seu produto antes mesmo que você precise se
              preocupar
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="content_container">
          <div className="h-screen w-full"></div>
        </div>
      </section>
    </main>
  );
}
