import Instagram from "@/public/icons/instagram.svg";
import X from "@/public/icons/x.svg";
import Whatsapp from "@/public/icons/whatsapp.svg";

export type platform = "instagram" | "tiktok" | "x" | "youtube" | "whatsapp";
export interface Socials {
  icon: any;
  platform: platform;
  link: string;
}

const REDES_SOCIAIS: Socials[] = [
  { platform: "instagram", link: "www.instagram.com/eirotech", icon: Instagram },
  { platform: "x", link: "x.com/eirotech", icon: X },
  { platform: "whatsapp", link: "whatsapp", icon: Whatsapp },
];

export default REDES_SOCIAIS;
