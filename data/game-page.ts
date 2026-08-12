export type GameStatus =
  | "available"
  | "upcoming";

export interface GameItem {
  id: string;
  slug: string;
  title: string;
  region: string;
  image: string;
  href?: string;
  status: GameStatus;
}

export const popularGames: GameItem[] = [
  {
    id: "game-001",
    slug: "mobile-legends",
    title: "Mobile Legends Diamonds",
    region: "Global",
    image:
      "/images/games/mobile-legends.png",
    href: "/games/mobile-legends",
    status: "available",
  },
  {
    id: "game-002",
    slug: "honor-of-kings",
    title: "Honor of Kings Tokens",
    region: "Global",
    image:
      "/images/games/honor-of-kings.png",
    status: "upcoming",
  },
];