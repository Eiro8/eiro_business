import Link from "next/link";
import { Server, Activity, Radio, ArrowUpRight } from "lucide-react";

const PRODUCTS = [
  {
    id: "eiro-core",
    name: "Eiro Industrial Hub",
    category: "Hardware & IoT",
    desc: "Unidade concentradora de telemetria industrial com suporte a múltiplos protocolos e isolamento elétrico.",
    icon: Server,
  },
  {
    id: "eiro-insight",
    name: "Eiro Insight Platform",
    category: "Software & IA",
    desc: "Painel em nuvem para monitoramento de sensores em tempo real com alertas preditivos de manutenção.",
    icon: Activity,
  },
  {
    id: "eiro-mesh",
    name: "Eiro Mesh Node",
    category: "Conectividade",
    desc: "Módulos de comunicação wireless de longo alcance e baixo consumo para plantas fabris amplas.",
    icon: Radio,
  },
];

export default function Produtos() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-400">
          Portfólio
        </span>
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
          Produtos & Tecnologias
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Equipamentos e plataformas concebidos para os desafios mais exigentes do setor produtivo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((prod) => {
          const Icon = prod.icon;
          return (
            <div
              key={prod.id}
              className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {prod.category}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-1">
                    {prod.name}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {prod.desc}
                </p>
              </div>

              <Link
                href="/contato"
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Solicitar Especificação <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
