import { ComponentType, SVGProps } from "react";
import { IconType } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export type platform = "instagram" | "tiktok" | "x" | "youtube" | "whatsapp";
export interface Socials {
  icon?: IconType;
  platform: platform;
  link: string;
}

const REDES_SOCIAIS: Socials[] = [
  {
    platform: "instagram",
    link: "https://instagram.com/eirotech",
    icon: FaInstagram,
  },
  { platform: "x", link: "https://x.com/eirotech", icon: FaTwitter },
  { platform: "whatsapp", link: "https://whatsapp.com", icon: FaWhatsapp },
];

export default REDES_SOCIAIS;
