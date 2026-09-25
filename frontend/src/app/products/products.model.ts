/**
 * Representa um produto disponível no catálogo
 */
export interface Product {
  /** O nome completo do item @example "carregador usb-c 30w" */
  name: string,
  /** A descrição completa do produto*/
  description: string,
  /** a URL para comprar o item @example "https://mercado-livre.com"*/
  url: string,
  /**O link ou rota da imagem @example "https://imgur.link,com"*/
  image_url: string,
  /** O preço do item*/
  price: number
  id: number
}
