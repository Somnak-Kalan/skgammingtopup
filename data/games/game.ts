export type PlatformId =
  | "pc"
  | "web"
  | "mobile"
  | "playstation"
  | "xbox"
  | "switch"
  | "steam";

export type PlatformIcon =
  | "pc"
  | "web"
  | "mobile"
  | "playstation"
  | "xbox"
  | "switch"
  | "steam";

export type GameStatus =
  | "available"
  | "upcoming";

export interface PlatformItem {
  id: PlatformId;
  label: string;
  icon: PlatformIcon;
}

export interface GameItem {
  id: string;
  slug: string;
  title: string;
  language: string;
  region: string;
  image: string;
  href?: string;
  status: GameStatus;
  platform: PlatformId;
  background: string;
}

export const platformItems: PlatformItem[] = [
  {
    id: "pc",
    label: "PC",
    icon: "pc",
  },
  {
    id: "web",
    label: "Webgame",
    icon: "web",
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: "mobile",
  },
  {
    id: "playstation",
    label: "PlayStation",
    icon: "playstation",
  },
  {
    id: "xbox",
    label: "Xbox",
    icon: "xbox",
  },
  {
    id: "switch",
    label: "Nintendo Switch",
    icon: "switch",
  },
  {
    id: "steam",
    label: "Steam",
    icon: "steam",
  },
];

export const games: GameItem[] = [
  {
    id: "game-001",
    slug: "mobile-legends",
    title: "Mobile Legends: Bang Bang",
    language: "English",
    region: "Global",
    image:
      "/images/games/mobile-legends.png",
    href: "/games/mobile-legends",
    status: "available",
    platform: "mobile",
    background:
      "linear-gradient(135deg, #353869 0%, #5758a9 100%)",
  },
  {
    id: "game-002",
    slug: "honor-of-kings",
    title: "Honor of Kings Global",
    language: "English",
    region: "Global",
    image:
      "/images/games/honor-of-kings.png",
    status: "upcoming",
    platform: "mobile",
    background:
      "linear-gradient(135deg, #7c243a 0%, #c9667b 100%)",
  },
];