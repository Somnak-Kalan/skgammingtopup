export type BettingGameId =
  | "cs2"
  | "dota-2"
  | "league-of-legends"
  | "mobile-legends"
  | "valorant"
  | "starcraft-2"
  | "rainbow-six"
  | "call-of-duty"
  | "rocket-league"
  | "pubg"
  | "honor-of-kings"
  | "crossfire"
  | "free-fire"
  | "heroes-of-might-and-magic-3";

export interface BettingGame {
  id: BettingGameId;
  name: string;
  image: string;
  affiliateUrl: string;
  isAvailable: boolean;
}

export const bettingConfig = {
  promoCode: "SKGAMMING",

  registerUrl:
    "https://tinyurl.com/1x-skgamming",

  fullAffiliateUrl:
    "https://reffpa.com/L?tag=d_5764295m_97c_&site=5764295&ad=97&r=registration?type=email&bonus=SPORT&currency=USD",
};

export const bettingGames: BettingGame[] = [
  {
    id: "cs2",
    name: "CS 2",
    image: "/images/betting/games/cs2.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "dota-2",
    name: "Dota 2",
    image: "/images/betting/games/dota-2.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "league-of-legends",
    name: "League of Legends",
    image: "/images/betting/games/league-of-legends.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "mobile-legends",
    name: "Mobile Legends",
    image: "/images/betting/games/mobile-legends.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "valorant",
    name: "Valorant",
    image: "/images/betting/games/valorant.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "starcraft-2",
    name: "StarCraft II",
    image: "/images/betting/games/starcraft-2.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "rainbow-six",
    name: "Rainbow Six",
    image: "/images/betting/games/rainbow-six.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "call-of-duty",
    name: "Call of Duty",
    image: "/images/betting/games/call-of-duty.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "rocket-league",
    name: "Rocket League",
    image: "/images/betting/games/rocket-league.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "pubg",
    name: "PUBG",
    image: "/images/betting/games/pubg.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "honor-of-kings",
    name: "Honor of Kings",
    image: "/images/betting/games/honor-of-kings.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "crossfire",
    name: "CrossFire",
    image: "/images/betting/games/crossfire.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "free-fire",
    name: "Free Fire",
    image: "/images/betting/games/free-fire.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
  {
    id: "heroes-of-might-and-magic-3",
    name: "Heroes of Might and Magic III",
    image:
      "/images/betting/games/heroes-of-might-and-magic-3.jpg",
    affiliateUrl: bettingConfig.fullAffiliateUrl,
    isAvailable: true,
  },
];