import { Mail, Phone, Clock } from "lucide-react";

export default function Contato() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16 flex flex-col gap-12">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-400">
          Fale Conosco
        </span>
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
          Entre em Contato com a Eiro
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Converse com nossos engenheiros e consultores para desenhar a solução
          ideal para sua operação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Informações de Contato */}
        <div className="flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              Canais Oficiais
            </h3>
            <div className="flex flex-col gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>0800 123 4567 / (11) 3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>contato@eirotecnologia.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>
                  Segunda a Sexta: 08h às 18h (Plantão 24/7 p/ clientes
                  industriais)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário Comercial */}
        <form className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 shadow-sm flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-200 uppercase">
              Nome Completo
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-blue-900 bg-neutral-50 dark:bg-blue-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-200 uppercase">
              E-mail Corporativo
            </label>
            <input
              type="email"
              placeholder="seu.email@empresa.com"
              className="px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-blue-900 bg-neutral-50 dark:bg-blue-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-200 uppercase">
              Mensagem / Projeto
            </label>
            <textarea
              rows={4}
              placeholder="Conte-nos sobre a demanda da sua indústria..."
              className="px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-blue-900 bg-neutral-50 dark:bg-blue-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-colors"
          >
            Enviar Solicitação
          </button>
        </form>
      </div>
    </main>
  );
}
