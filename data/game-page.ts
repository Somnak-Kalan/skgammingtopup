export type GameStatus =
  | "available"
  | "upcoming";

export interface GameItem {
  id: string;
  slug: string;
  title: string;
  region: string;
  image: string;

  // Optional because some games may not have it
  language?: string;

  // Optional custom card background
  background?: string;

  href?: string;

  status: GameStatus;
}

export const popularGames: GameItem[] = [
  {
    id: "game-001",
    slug: "mobile-legends",
    title: "Mobile Legends Diamonds",
    region: "Global",
    language: "English",
    image: "/images/games/mobile-legends.png",
    href: "/games/mobile-legends",
    status: "available",

    background:
      "linear-gradient(135deg, #151d2d 0%, #233d66 50%, #13253d 100%)",
  },

  {
    id: "game-002",
    slug: "honor-of-kings",
    title: "Honor of Kings Tokens",
    region: "Global",
    language: "English",
    image: "/images/games/honor-of-kings.png",
    status: "upcoming",

    background:
      "linear-gradient(135deg, #33203f 0%, #573967 50%, #252039 100%)",
  },
];