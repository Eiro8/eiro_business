import { ComponentType, SVGProps } from "react";
import X from '@/public/icons/x.svg'
import Tiktok from '@/public/icons/tiktok.svg'
import Whatsapp from '@/public/icons/whatsapp.svg'

export type platform = "instagram" | "tiktok" | "x" | "youtube" | "whatsapp";
export interface Socials {
  icon?: any;
  platform: platform;
  link: string;
}

const REDES_SOCIAIS: Socials[] = [
  { platform: "instagram", link: "https://instagram.com/eirotech", icon: Tiktok},
  { platform: "x", link: "https://x.com/eirotech", icon: X },
  { platform: "whatsapp", link: "https://whatsapp.com", icon: Whatsapp },
];

export default REDES_SOCIAIS;
