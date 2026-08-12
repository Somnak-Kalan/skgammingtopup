import type {
  DiamondPackage,
  FaqItem,
  GameDefinition,
} from "@/types";

export const mlbbGame: GameDefinition = {
  slug: "mlbb",
  title: "Mobile Legends Diamonds",
  shortTitle: "MLBB",
  subtitle: "Recharge Mobile Legends diamonds quickly and securely.",
  region: "Cambodia / Global",
  status: "live",
  href: "/games/mlbb",
  artwork: "/images/games/mlbb-cover.jpg",
  banner: "/images/banners/mlbb-home.jpg",
  gradient:
    "linear-gradient(135deg, #09203f 0%, #174675 48%, #6d3fb5 100%)",
};

//
// IMPORTANT:
// These prices are examples only.
// Change every price according to your real supplier cost and profit.
//
export const mlbbPackages: DiamondPackage[] = [
  {
    id: "weekly-pass",
    title: "Weekly Diamond Pass",
    diamonds: 0,
    bonus: 0,
    price: 1.75,
    discountLabel: "Popular membership",
    popular: true,
    category: "membership",
  },
  {
    id: "86-diamonds",
    title: "86 Diamonds",
    diamonds: 78,
    bonus: 8,
    price: 1.55,
    discountLabel: "78 + 8 Bonus",
    category: "diamond",
  },
  {
    id: "172-diamonds",
    title: "172 Diamonds",
    diamonds: 156,
    bonus: 16,
    price: 3.05,
    discountLabel: "156 + 16 Bonus",
    popular: true,
    category: "diamond",
  },
  {
    id: "257-diamonds",
    title: "257 Diamonds",
    diamonds: 234,
    bonus: 23,
    price: 4.55,
    discountLabel: "234 + 23 Bonus",
    category: "diamond",
  },
  {
    id: "344-diamonds",
    title: "344 Diamonds",
    diamonds: 310,
    bonus: 34,
    price: 6.05,
    discountLabel: "310 + 34 Bonus",
    category: "diamond",
  },
  {
    id: "429-diamonds",
    title: "429 Diamonds",
    diamonds: 383,
    bonus: 46,
    price: 7.55,
    discountLabel: "383 + 46 Bonus",
    popular: true,
    category: "diamond",
  },
  {
    id: "706-diamonds",
    title: "706 Diamonds",
    diamonds: 625,
    bonus: 81,
    price: 12.25,
    discountLabel: "625 + 81 Bonus",
    category: "diamond",
  },
  {
    id: "1084-diamonds",
    title: "1,084 Diamonds",
    diamonds: 940,
    bonus: 144,
    price: 18.25,
    discountLabel: "940 + 144 Bonus",
    category: "diamond",
  },
  {
    id: "1160-diamonds",
    title: "1,160 Diamonds",
    diamonds: 1000,
    bonus: 160,
    price: 19.95,
    discountLabel: "1,000 + 160 Bonus",
    popular: true,
    category: "diamond",
  },
  {
    id: "2195-diamonds",
    title: "2,195 Diamonds",
    diamonds: 1860,
    bonus: 335,
    price: 36.5,
    discountLabel: "1,860 + 335 Bonus",
    category: "diamond",
  },
  {
    id: "3688-diamonds",
    title: "3,688 Diamonds",
    diamonds: 3099,
    bonus: 589,
    price: 59.5,
    discountLabel: "3,099 + 589 Bonus",
    category: "diamond",
  },
  {
    id: "5532-diamonds",
    title: "5,532 Diamonds",
    diamonds: 4649,
    bonus: 883,
    price: 88.5,
    discountLabel: "4,649 + 883 Bonus",
    category: "diamond",
  },
];

export const mlbbFaqs: FaqItem[] = [
  {
    question: "What information is required for an MLBB top-up?",
    answer:
      "Customers must provide their Mobile Legends User ID and Zone ID. Never request a game password, Facebook password, Moonton password, verification code, or email password.",
  },
  {
    question: "How long does the top-up take?",
    answer:
      "This first version uses manual payment verification and manual supplier processing. Display a realistic delivery estimate based on your own availability.",
  },
  {
    question: "Can customers send diamonds to a friend?",
    answer:
      "Yes. The customer can enter their friend's correct User ID and Zone ID. They should confirm the information carefully before paying.",
  },
  {
    question: "Can the website detect an ABA payment automatically?",
    answer:
      "Not in the static frontend version. You must verify the ABA payment manually. Automatic verification requires ABA PayWay merchant credentials and a secure backend.",
  },
];