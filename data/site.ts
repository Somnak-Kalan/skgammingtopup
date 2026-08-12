import type { StaticImageData } from "next/image";

import FacebookImage from "@/public/images/social/facebook.png";
import TelegramImage from "@/public/images/social/telegram.png";
import TiktokImage from "@/public/images/social/tiktok.png";
import YoutubeImage from "@/public/images/social/youtube.png";

export interface NavigationItem {
  label: string;
  href: string;
}

export type SocialMediaType =
  | "telegram"
  | "facebook"
  | "tiktok"
  | "youtube";

export interface SocialMediaItem {
  id: string;
  type: SocialMediaType;
  name: string;
  username: string;
  description: string;
  href: string;
  image: StaticImageData;
}

export interface SiteConfig {
  name: string;
  description: string;
  currency: string;
  telegramUsername: string;
  siteUrl: string;
  abaQrImage: string;
  supportEmail: string;
  navigation: NavigationItem[];
  socialMedia: SocialMediaItem[];
}

export const siteConfig: SiteConfig = {
  name: "SK GAMING TOPUP",

  description:
    "Fast and simple game top-up service for Cambodia.",

  currency: "USD",

  telegramUsername:
    "YOUR_TELEGRAM_USERNAME",

  siteUrl:
    "http://localhost:3001",

  abaQrImage:
    "/images/payment/aba-khqr.png",

  supportEmail:
    "support@your-domain.com",

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Games",
      href: "/games",
    },
    {
      label: "MLBB Top-Up",
      href: "/games/mlbb",
    },
  ],

  socialMedia: [
    {
      id: "social-telegram",
      type: "telegram",
      name: "Telegram",
      username: "@skgammings",
      description:
        "Contact our support and receive announcements.",
      href: "https://t.me/skgammings",
      image: TelegramImage,
    },
    {
      id: "social-facebook",
      type: "facebook",
      name: "Facebook",
      username: "@skgammingb4s",
      description:
        "Follow our page for promotions and updates.",
      href: "https://www.facebook.com/skgammingb4s",
      image: FacebookImage,
    },
    {
      id: "social-tiktok",
      type: "tiktok",
      name: "TikTok",
      username: "@sk_gamming_7",
      description:
        "Watch short gaming videos and top-up guides.",
      href: "https://www.tiktok.com/@sk_gamming_7",
      image: TiktokImage,
    },
    {
      id: "social-youtube",
      type: "youtube",
      name: "YouTube",
      username: "@SKGamming-b4s",
      description:
        "Watch gaming streams, tutorials, and highlights.",
      href: "https://www.youtube.com/@SKGamming-b4s",
      image: YoutubeImage,
    },
  ],
};