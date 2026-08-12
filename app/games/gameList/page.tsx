import type { Metadata } from "next";
import GamesPageClient from "@/components/games/GamesPageClient";

export const metadata: Metadata = {
  title: "Games and Gift Cards | MLBB Top Up",
  description:
    "Browse popular game top-ups, new games, gift cards, and available discount coupons.",
};

export default function GamesPage() {
  return <GamesPageClient />;
}