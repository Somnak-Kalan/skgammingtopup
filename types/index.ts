export type GameStatus = "live" | "upcoming";

export interface GameDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  region: string;
  status: GameStatus;
  href: string;
  artwork: string;
  banner: string;
  gradient: string;
  releaseNote?: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  backgroundImage: string;
  gradient: string;
  status?: GameStatus;
}

export interface DiamondPackage {
  id: string;
  title: string;
  diamonds: number;
  bonus: number;
  price: number;
  discountLabel?: string;
  popular?: boolean;
  category: "diamond" | "membership";
}

export interface CheckoutErrors {
  package?: string;
  userId?: string;
  zoneId?: string;
}

export interface OrderMessageInput {
  orderId: string;
  packageTitle: string;
  price: number;
  userId: string;
  zoneId: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}