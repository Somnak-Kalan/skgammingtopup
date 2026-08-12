export type GameStatus =
  | "available"
  | "upcoming";

export interface GameItem {
  id: string;
  slug: string;
  title: string;
  language: string;
  region: string;
  image: string;
  background: string;
  href?: string;
  status: GameStatus;
}

export const popularGames: GameItem[] = [
  {
    id: "game-001",
    slug: "mobile-legends",
    title:
      "Mobile Legends: Bang Bang",
    language: "English",
    region: "Global",
    image:
      "/images/games/mobile-legends.png",
    background:
      "linear-gradient(135deg, #34366b 0%, #5a5bb2 100%)",
    href: "/games/mobile-legends",
    status: "available",
  },
  {
    id: "game-002",
    slug: "honor-of-kings",
    title:
      "Honor of Kings Global",
    language: "English",
    region: "Global",
    image:
      "/images/games/honor-of-kings.png",
    background:
      "linear-gradient(135deg, #8b2f46 0%, #ca7287 100%)",
    status: "upcoming",
  },
  {
    id: "game-003",
    slug: "free-fire",
    title: "Garena Free Fire",
    language: "English",
    region: "Global",
    image:
      "/images/games/free-fire.png",
    background:
      "linear-gradient(135deg, #5e1f49 0%, #742660 100%)",
    status: "upcoming",
  },
  {
    id: "game-004",
    slug: "pubg-mobile",
    title: "PUBG Mobile",
    language: "English",
    region: "Global",
    image:
      "/images/games/pubg-mobile.png",
    background:
      "linear-gradient(135deg, #4b5660 0%, #7c898f 100%)",
    status: "upcoming",
  },
  {
    id: "game-005",
    slug: "valorant",
    title: "Valorant",
    language: "English",
    region: "Global",
    image:
      "/images/games/valorant.png",
    background:
      "linear-gradient(135deg, #7e263a 0%, #d85164 100%)",
    status: "upcoming",
  },
  {
    id: "game-006",
    slug: "genshin-impact",
    title: "Genshin Impact",
    language: "English",
    region: "Global",
    image:
      "/images/games/genshin-impact.png",
    background:
      "linear-gradient(135deg, #456a8e 0%, #6e9fc1 100%)",
    status: "upcoming",
  },
  {
    id: "game-007",
    slug: "honkai-star-rail",
    title: "Honkai: Star Rail",
    language: "English",
    region: "Global",
    image:
      "/images/games/honkai-star-rail.png",
    background:
      "linear-gradient(135deg, #353d69 0%, #725d94 100%)",
    status: "upcoming",
  },
  {
    id: "game-008",
    slug: "call-of-duty-mobile",
    title:
      "Call of Duty Mobile",
    language: "English",
    region: "Global",
    image:
      "/images/games/call-of-duty-mobile.png",
    background:
      "linear-gradient(135deg, #594f3a 0%, #a88749 100%)",
    status: "upcoming",
  },
];