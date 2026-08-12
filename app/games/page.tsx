import type {
  Metadata,
} from "next";

import Game from "@/components/games/Game";

export const metadata: Metadata = {
  title: "Game",
  description:
    "Browse Mobile Legends and Honor of Kings game top-up services.",
};

export default function GamePage() {
  return <Game />;
}