import Image from "next/image";
import HeroIMG from "@/public/images/about_us.png";

export default function Sobre() {
  return (
    <main className="h-full w-full">
      <section className="section bg-black">
        <Image src={HeroIMG} alt="background" className="object-cover"/>
        <div className="content_container md:grid md:grid-cols-[30%_70%] h-full">
        </div>
      </section>
      <section className="section">
        <div className="content_container bg-amber-100"></div>
      </section>
    </main>
  );
}
