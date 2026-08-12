"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  bettingConfig,
  bettingGames,
} from "@/data/betting-games";

import type {
  BettingCategory,
  BettingGame,
} from "@/data/betting-games";

import styles from "@/styles/BettingGamesPage.module.css";

type CategoryFilter =
  | "all"
  | BettingCategory;

interface GameImageProps {
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

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M16.5 16.5L21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GameImage({
  game,
}: GameImageProps) {
  const [
    hasError,
    setHasError,
  ] = useState(false);

  if (hasError) {
    return (
      <div
        className={
          styles.imageFallback
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
        setHasError(true)
      }
    />
  );
}

export default function BettingGamesPage() {
  const [
    category,
    setCategory,
  ] =
    useState<CategoryFilter>(
      "all",
    );

  const [
    search,
    setSearch,
  ] = useState("");

  const filteredGames = useMemo(
    () => {
      const normalizedSearch =
        search
          .trim()
          .toLowerCase();

      return bettingGames.filter(
        (game) => {
          const matchesCategory =
            category === "all" ||
            game.category ===
              category;

          const matchesSearch =
            normalizedSearch.length ===
              0 ||
            game.name
              .toLowerCase()
              .includes(
                normalizedSearch,
              ) ||
            game.description
              .toLowerCase()
              .includes(
                normalizedSearch,
              );

          return (
            matchesCategory &&
            matchesSearch
          );
        },
      );
    },
    [category, search],
  );

  return (
    <main
      className={
        styles.bettingPage
      }
    >
      <section
        className={
          styles.pageHero
        }
      >
        <div
          className={
            styles.pageContainer
          }
        >
          <span
            className={
              styles.heroEyebrow
            }
          >
            Partner platform
          </span>

          <h1>
            Games and Sports
          </h1>

          <p>
            Browse available esports
            and sports categories. Final
            availability, markets, odds,
            registration, and wagers are
            provided by the external
            partner website.
          </p>

          <div
            className={
              styles.heroActions
            }
          >
            <a
              href={
                bettingConfig.registerUrl
              }
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Register with{" "}
              {
                bettingConfig.promoCode
              }

              <ArrowIcon />
            </a>

            <span>
              18+ · Play responsibly
            </span>
          </div>
        </div>
      </section>

      <section
        className={
          styles.catalogSection
        }
      >
        <div
          className={
            styles.pageContainer
          }
        >
          <div
            className={
              styles.toolbar
            }
          >
            <div
              className={
                styles.categoryFilters
              }
            >
              <button
                type="button"
                className={
                  category === "all"
                    ? styles.activeFilter
                    : ""
                }
                onClick={() =>
                  setCategory("all")
                }
              >
                All
              </button>

              <button
                type="button"
                className={
                  category ===
                  "esports"
                    ? styles.activeFilter
                    : ""
                }
                onClick={() =>
                  setCategory(
                    "esports",
                  )
                }
              >
                Esports
              </button>

              <button
                type="button"
                className={
                  category ===
                  "sports"
                    ? styles.activeFilter
                    : ""
                }
                onClick={() =>
                  setCategory(
                    "sports",
                  )
                }
              >
                Sports
              </button>
            </div>

            <label
              className={
                styles.searchBox
              }
            >
              <SearchIcon />

              <input
                type="search"
                value={search}
                placeholder="Search games or sports"
                onChange={(event) =>
                  setSearch(
                    event.target.value,
                  )
                }
              />
            </label>
          </div>

          <div
            className={
              styles.resultHeader
            }
          >
            <div>
              <h2>
                Available Categories
              </h2>

              <p>
                Select a category to
                continue to the partner
                website.
              </p>
            </div>

            <span>
              {filteredGames.length}{" "}
              results
            </span>
          </div>

          {filteredGames.length >
          0 ? (
            <div
              className={
                styles.gameGrid
              }
            >
              {filteredGames.map(
                (game) => (
                  <article
                    key={game.id}
                    className={
                      styles.gameCard
                    }
                  >
                    <div
                      className={
                        styles.gameImageWrapper
                      }
                    >
                      <GameImage
                        game={game}
                      />

                      <span
                        className={
                          styles.categoryBadge
                        }
                      >
                        {game.category ===
                        "esports"
                          ? "Esports"
                          : "Sports"}
                      </span>
                    </div>

                    <div
                      className={
                        styles.gameContent
                      }
                    >
                      <h3>
                        {game.name}
                      </h3>

                      <p>
                        {
                          game.description
                        }
                      </p>

                      <a
                        href={
                          game.partnerUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                      >
                        View on partner site

                        <ArrowIcon />
                      </a>
                    </div>
                  </article>
                ),
              )}
            </div>
          ) : (
            <div
              className={
                styles.emptyState
              }
            >
              <h2>
                No results found
              </h2>

              <p>
                Try another search or
                select a different
                category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
              >
                Show all categories
              </button>
            </div>
          )}

          <div
            className={
              styles.disclaimer
            }
          >
            <strong>18+</strong>

            <p>
              This website only provides
              information and an affiliate
              link. It does not accept,
              process, or settle bets.
              Check local laws and play
              responsibly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}