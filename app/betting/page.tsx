import type {
  Metadata,
} from "next";

import BettingGamesPage from "@/components/betting/BettingGamesPage";

export const metadata: Metadata = {
  title: "Games and Sports",
  description:
    "Browse available esports and sports betting categories on our partner website.",
};

export default function BettingPage() {
  return <BettingGamesPage />;
}