import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 flex flex-col gap-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 pt-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Inovação para a Indústria 4.0
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white max-w-3xl">
          Transformando a indústria através da tecnologia inteligente
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
          Na Eiro, desenvolvemos ecossistemas de hardware, software e automação para potencializar a produtividade e sustentabilidade de empresas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            href="/produtos"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all duration-200"
          >
            Conhecer Soluções <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contato"
            className="px-6 py-3 rounded-xl border border-neutral-300 dark:border-blue-900 hover:bg-neutral-100 dark:hover:bg-blue-900/30 text-neutral-800 dark:text-neutral-200 font-medium transition-all"
          >
            Falar com Especialistas
          </Link>
        </div>
      </section>

      {/* Diferenciais / Destaques */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Engenharia Avançada</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Sistemas embarcados e computação de ponta construídos com padrões industriais rigorosos.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Alta Performance</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Automação em tempo real e análise preditiva para eliminar paradas não planejadas.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Confiabilidade & Segurança</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Padrões industriais certificados com suporte técnico contínuo 24/7.
          </p>
        </div>
      </section>
    </main>
  );
}
