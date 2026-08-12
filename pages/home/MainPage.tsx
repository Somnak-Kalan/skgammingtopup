import SocialMediaCard from "@/components/home/SocialMediaCard";
import SupportCard from "@/components/home/SupportCard";
import EsportsBettingCard from "@/components/home/EsportsBettingCard";

import GamesPageClient from "@/components/games/GamesPageClient";
import PromotionsPageClient from "@/components/promotions/PromotionsPageClient";

import { promotions } from "@/data/promotions";

export default function MainPage() {
  return (
    <>
      <SocialMediaCard />

      <PromotionsPageClient promotions={promotions} />

      <GamesPageClient />

      <SupportCard />

      <EsportsBettingCard />
    </>
  );
}