"use client";

import Link from "next/link";
import { useState } from "react";

import {
  bettingGames,
} from "@/data/betting-games";

import type {
  BettingGame,
} from "@/data/betting-games";

import styles from "./BettingGamesCard.module.css";

interface BettingGameImageProps {
  game: BettingGame;
}

function getInitials(
  value: string,
): string {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) =>
      word.charAt(0),
    )
    .join("")
    .toUpperCase();
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BettingGameImage({
  game,
}: BettingGameImageProps) {
  const [
    hasImageError,
    setHasImageError,
  ] = useState(false);

  if (hasImageError) {
    return (
      <div
        className={
          styles.gameImageFallback
        }
        aria-hidden="true"
      >
        {getInitials(game.name)}
      </div>
    );
  }

  return (
    <img
      src={game.image}
      alt={game.name}
      className={styles.gameImage}
      onError={() =>
        setHasImageError(true)
      }
    />
  );
}

export default function BettingGamesCard() {
  const compactGames =
    bettingGames.slice(0, 5);

  return (
    <section
      className={
        styles.bettingSection
      }
    >
      <div
        className={
          styles.bettingContainer
        }
      >
        <div
          className={
            styles.sectionHeader
          }
        >
          <div>
            <span
              className={
                styles.sectionEyebrow
              }
            >
              Online betting
            </span>

            <h2>
              Games you can play
            </h2>
          </div>

         
        </div>

        <div
          className={
            styles.compactGameList
          }
        >
          {compactGames.map(
            (game) => {
              const isAvailable =
                game.id ===
                  "mobile-legends" ||
                game.id ===
                  "honor-of-kings";

              const cardContent = (
                <>
                  <div
                    className={
                      styles.gameImageWrapper
                    }
                  >
                    <BettingGameImage
                      game={game}
                    />
                  </div>

                  <div
                    className={
                      styles.gameInformation
                    }
                  >
                    <h3
                      title={game.name}
                    >
                      {game.name}
                    </h3>

                    <span
                      className={
                        isAvailable
                          ? styles.availableStatus
                          : styles.comingSoonStatus
                      }
                    >
                      {isAvailable
                        ? "Available"
                        : "Coming soon"}
                    </span>
                  </div>
                </>
              );

              if (!isAvailable) {
                return (
                  <div
                    key={game.id}
                    className={[
                      styles.compactGameCard,
                      styles.disabledCard,
                    ].join(" ")}
                    aria-disabled="true"
                  >
                    {cardContent}
                  </div>
                );
              }

              return (
                <a
                  key={game.id}
                  href={game.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={
                    styles.compactGameCard
                  }
                >
                  {cardContent}
                </a>
              );
            },
          )}
        </div>

        <div
          className={
            styles.bottomNotice
          }
        >
          <span>18+</span>

          <p>
            Betting is completed on the
            external partner website.
            Play responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}