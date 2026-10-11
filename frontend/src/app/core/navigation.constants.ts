export interface NavItem {
  label: string;
  icon?: string;
  route: string;
  roles?: string[]
}

export const NAVBAR_MENU: NavItem[] = [
  {label: 'Home', route: '/'},
  {label: 'Produtos', route: '/produtos'},
  {label: 'Ofertas', route: '/ofertas'},
  {label: 'Sobre nós', route: '/sobre-nos'},
  {label: 'Contato', route: '/contato'},
]
