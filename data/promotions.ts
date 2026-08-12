export type PromotionCategory =
  | "Games"
  | "Live Streaming"
  | "Gift Cards";

export type PromotionStatus =
  | "available"
  | "upcoming";

export type PromotionTheme =
  | "blue"
  | "gold";

export interface Promotion {
  id: string;
  slug: string;
  category: PromotionCategory;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  discountText: string;
  href?: string;
  status: PromotionStatus;
  theme: PromotionTheme;
  isActive: boolean;
}

export const promotions: Promotion[] = [
  {
    id: "promotion-001",
    slug: "mobile-legends-diamonds",
    category: "Games",
    title: "Mobile Legends Diamonds",
    subtitle:
      "Mobile Legends: Bang Bang",
    image:
      "/images/games/mobile-legends.png",
    badge: "Promo",
    discountText: "-10.0%",
    href: "/games/mobile-legends",
    status: "available",
    theme: "blue",
    isActive: true,
  },
  {
    id: "promotion-002",
    slug: "honor-of-kings-tokens",
    category: "Games",
    title: "Honor of Kings Tokens",
    subtitle: "Honor of Kings",
    image:
      "/images/games/honor-of-kings.png",
    badge: "Upcoming",
    discountText: "Soon",
    status: "upcoming",
    theme: "gold",
    isActive: true,
  },
];