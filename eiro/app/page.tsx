import { SecondaryButton } from "@/components/ui/primary_button/Button";
import Hero from "@/public/images/wavy_lines.png";

export default function Home() {
  return (
    <main className="max-w-full w-full flex flex-col justify-center mt-24">
      {/* HERO */}
      <section
        className="w-full flex justify-center
        bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: `url(${Hero.src})`,
        }}>
        <div
          className="w-360 md:h-150
          px-6 py-15 box-border grid md:grid-cols-[50%_auto] gap-10"
        >
          <h1 className="text-3xl md:text-7xl h-fit md:leading-19 font-bold self-start content-center">
            Tecnologia testada, entregue com <span className="bg-white/20">segurança.</span>
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
      {/* WHY US */}
      <section>
      </section>
      {/* CONTATO */}
    </main>
  );
}
