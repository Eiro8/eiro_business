import { MapPin, Phone, Mail } from "lucide-react";

const STORES = [
  {
    city: "São Paulo - Matriz",
    type: "Sede Corporativa & P&D",
    address: "Av. Paulista, 1000 - Bela Vista",
    phone: "(11) 3456-7890",
    email: "sp@eirotecnologia.com.br",
  },
  {
    city: "Campinas - Polo Industrial",
    type: "Centro de Fabricação & Logística",
    address: "Rod. D. Pedro I, km 135 - Techno Park",
    phone: "(19) 3123-4567",
    email: "fabrica@eirotecnologia.com.br",
  },
  {
    city: "Joinville - Filial Sul",
    type: "Suporte Técnico & Distribuição",
    address: "Rua Dona Francisca, 8300 - Distrito Industrial",
    phone: "(47) 3098-7654",
    email: "sul@eirotecnologia.com.br",
  },
];

export default function Lojas() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-400">
          Presença Nacional
        </span>
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
          Nossas Unidades
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Conheça nossos polos industriais, laboratórios e centros de atendimento técnico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STORES.map((store) => (
          <div
            key={store.city}
            className="p-6 rounded-2xl bg-white dark:bg-blue-950/40 border border-neutral-200 dark:border-blue-900 shadow-sm flex flex-col gap-4"
          >
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-blue-900/50 text-neutral-600 dark:text-neutral-300">
                {store.type}
              </span>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-3">
                {store.city}
              </h3>
            </div>

            <div className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-300 mt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>{store.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{store.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{store.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
