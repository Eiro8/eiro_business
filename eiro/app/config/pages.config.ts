export interface PageLink {
  link: string;
  label: string;
}
export const ALL_PAGES: PageLink[] = [
  { link: "/", label: "home" },
  { link: "/lojas", label: "lojas" },
  { link: "/sobre", label: "sobre" },
  { link: "/contato", label: "contato" },
  { link: "/produtos", label: "produtos" },
];

export const PAGES: PageLink[] = [
  { link: "/", label: "pagina inicial" },
  { link: "/lojas", label: "lojas" },
  { link: "/sobre", label: "sobre nós" },
];
