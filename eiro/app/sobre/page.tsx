import { Target, Eye, Award } from "lucide-react";

export default function Sobre() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16 flex flex-col gap-12">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-400">
          Institucional
        </span>
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
          Sobre a Eiro Tecnologia
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Pioneirismo em inovação industrial e engenharia tecnológica no Brasil e no mundo.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 shadow-sm leading-relaxed text-neutral-700 dark:text-neutral-200 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Nossa História</h2>
        <p>
          Fundada com a missão de conectar processos industriais tradicionais à fronteira digital, a Eiro atua na intersecção entre eletrônica avançada, inteligência de dados e software escalável.
        </p>
        <p>
          Atendemos empresas que necessitam de precisão cirúrgica, disponibilidade contínua e escalabilidade operacional, sempre guiados pela paixão por engenharia de qualidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 flex flex-col gap-3">
          <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Missão</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Fornecer tecnologia confiável que impulsione a autonomia e a eficiência dos parques industriais.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 flex flex-col gap-3">
          <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Visão</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Ser referência latino-americana em equipamentos inteligentes e soluções industriais conectadas.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 flex flex-col gap-3">
          <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Valores</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Excelência técnica, segurança operacional, inovação ética e foco no sucesso do cliente.
          </p>
        </div>
      </div>
    </main>
  );
}
