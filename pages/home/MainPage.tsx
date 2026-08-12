import PromotionPage from '../../app/promotions/page'
import GameListCard from '../../app/games/gameList/page'
import SocialMediaCard from "@/components/home/SocialMediaCard";
import SupportCard from "@/components/home/SupportCard";
import EsportsBettingCard from "@/components/home/EsportsBettingCard";
import BettingGamesCard from "@/components/home/BettingGamesCard";

export default function MainPage() {

  return (
    <>
    <SocialMediaCard/>
    <PromotionPage/>
    <GameListCard/>
    <SupportCard/>
    {/* <BettingGamesCard/> */}
    <EsportsBettingCard/>
    </>
  );
}