"use client";

import Link from "next/link";

import {
  type CSSProperties,
  useMemo,
  useState,
} from "react";

import {
  popularGames,
} from "@/data/game-page";

import type {
  GameItem,
} from "@/data/game-page";

import styles from "@/styles/GamesPage.module.css";

interface GameImageProps {
  game: GameItem;
}

interface GameCardProps {
  game: GameItem;
}

const defaultVisibleGameCount = 4;

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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 8V12L15 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({
  expanded,
}: {
  expanded: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={
        expanded
          ? styles.chevronExpanded
          : ""
      }
    >
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GameImage({
  game,
}: GameImageProps) {
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
        {getInitials(game.title)}
      </div>
    );
  }

  return (
    <img
      src={game.image}
      alt={game.title}
      className={
        styles.gameImage
      }
      loading="lazy"
      onError={() => {
        setHasImageError(true);
      }}
    />
  );
}

function GameCard({
  game,
}: GameCardProps) {
  const isAvailable =
    game.status === "available";

  const cardStyle = {
    "--game-card-background":
      game.background,
  } as CSSProperties;

  const cardClasses = [
    styles.gameCard,

    isAvailable
      ? styles.gameCardAvailable
      : styles.gameCardUpcoming,
  ]
    .filter(Boolean)
    .join(" ");

  const cardContent = (
    <>
      <span
        className={
          styles.cardAnimatedBorder
        }
        aria-hidden="true"
      />

      <span
        className={
          styles.cardOuterGlow
        }
        aria-hidden="true"
      />

      <span
        className={
          styles.cardShine
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.gameImageWrapper
        }
      >
        <GameImage game={game} />

        <span
          className={
            styles.gameImageOverlay
          }
          aria-hidden="true"
        />

        {!isAvailable && (
          <span
            className={
              styles.upcomingImageOverlay
            }
            aria-hidden="true"
          />
        )}
      </div>

      <div
        className={
          styles.gameInformation
        }
      >
        <div
          className={
            styles.gameInformationTop
          }
        >
          <span
            className={[
              styles.statusBadge,

              isAvailable
                ? styles.statusBadgeAvailable
                : styles.statusBadgeUpcoming,
            ].join(" ")}
          >
            <span
              className={
                styles.statusDot
              }
              aria-hidden="true"
            />

            {isAvailable
              ? "Available"
              : "Upcoming"}
          </span>
        </div>

        <h2
          className={
            styles.gameTitle
          }
        >
          {game.title}
        </h2>

        <div
          className={
            styles.gameMeta
          }
        >
          <span>
            {game.language}
          </span>

          <span
            className={
              styles.gameMetaDivider
            }
          >
            /
          </span>

          <span>
            {game.region}
          </span>
        </div>

        <div
          className={
            styles.gameCardFooter
          }
        >
          <span
            className={
              styles.gameActionText
            }
          >
            {isAvailable
              ? "Top Up Now"
              : "Coming Soon"}
          </span>

          <span
            className={[
              styles.gameActionIcon,

              !isAvailable
                ? styles.gameActionIconUpcoming
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-hidden="true"
          >
            {isAvailable ? (
              <ArrowIcon />
            ) : (
              <ClockIcon />
            )}
          </span>
        </div>
      </div>
    </>
  );

  if (
    isAvailable &&
    game.href
  ) {
    return (
      <Link
        href={game.href}
        className={cardClasses}
        style={cardStyle}
        aria-label={`Open ${game.title}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article
      className={cardClasses}
      style={cardStyle}
      aria-label={`${game.title} is coming soon`}
    >
      {cardContent}
    </article>
  );
}

export default function GamesPage() {
  const [
    showAllGames,
    setShowAllGames,
  ] = useState(false);

  const availableGames =
    useMemo(() => {
      return popularGames.filter(
        (game) =>
          game.status ===
          "available",
      );
    }, []);

  const upcomingGames =
    useMemo(() => {
      return popularGames.filter(
        (game) =>
          game.status ===
          "upcoming",
      );
    }, []);

  const visibleGames =
    useMemo(() => {
      if (showAllGames) {
        return popularGames;
      }

      return popularGames.slice(
        0,
        defaultVisibleGameCount,
      );
    }, [showAllGames]);

  const hiddenGamesCount =
    Math.max(
      popularGames.length -
        defaultVisibleGameCount,
      0,
    );

  const hasMoreGames =
    popularGames.length >
    defaultVisibleGameCount;

  const toggleGames = () => {
    setShowAllGames(
      (current) => !current,
    );

    if (showAllGames) {
      window.requestAnimationFrame(
        () => {
          document
            .getElementById(
              "popular-games-grid",
            )
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        },
      );
    }
  };

  return (
    <main
      className={
        styles.gamesPage
      }
    >
      <div
        className={
          styles.backgroundCircleOne
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.backgroundCircleTwo
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.backgroundGlowOne
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.backgroundGlowTwo
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.backgroundLightSweep
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.backgroundGrid
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.gamesContainer
        }
      >
        <section
          className={
            styles.gamesHeader
          }
        >
          <span
            className={
              styles.headerAnimatedBorder
            }
            aria-hidden="true"
          />

          <span
            className={
              styles.headerGlow
            }
            aria-hidden="true"
          />

          <div
            className={
              styles.headerContent
            }
          >
            <span
              className={
                styles.headerEyebrow
              }
            >
              <span
                className={
                  styles.headerEyebrowDot
                }
                aria-hidden="true"
              />

              Game Top-Up
            </span>

            <h1
              className={
                styles.pageTitle
              }
            >
              Popular Games
            </h1>

            <p
              className={
                styles.pageDescription
              }
            >
              Select your favourite game
              and continue to the top-up
              page. Mobile Legends is
              currently available, with
              more games coming soon.
            </p>
          </div>

          <div
            className={
              styles.gameSummary
            }
          >
            <div
              className={
                styles.summaryItem
              }
            >
              <span
                className={
                  styles.summaryGlow
                }
                aria-hidden="true"
              />

              <strong>
                {
                  availableGames.length
                }
              </strong>

              <span>
                Available
              </span>
            </div>

            <div
              className={
                styles.summaryItem
              }
            >
              <span
                className={
                  styles.summaryGlow
                }
                aria-hidden="true"
              />

              <strong>
                {
                  upcomingGames.length
                }
              </strong>

              <span>
                Upcoming
              </span>
            </div>
          </div>
        </section>

        <section
          className={
            styles.gamesSection
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
                  styles.sectionLabel
                }
              >
                Browse Games
              </span>

              <h2
                className={
                  styles.sectionTitle
                }
              >
                All Games
              </h2>

              <p
                className={
                  styles.sectionDescription
                }
              >
                Showing{" "}
                {visibleGames.length} of{" "}
                {popularGames.length}{" "}
                games.
              </p>
            </div>

            <span
              className={
                styles.sectionLine
              }
              aria-hidden="true"
            />
          </div>

          <div
            id="popular-games-grid"
            className={
              styles.gamesGrid
            }
          >
            {visibleGames.map(
              (game) => (
                <GameCard
                  key={game.id}
                  game={game}
                />
              ),
            )}
          </div>

          {hasMoreGames && (
            <div
              className={
                styles.seeMoreContainer
              }
            >
              <button
                type="button"
                className={
                  styles.seeMoreButton
                }
                aria-expanded={
                  showAllGames
                }
                aria-controls="popular-games-grid"
                onClick={toggleGames}
              >
                <span
                  className={
                    styles.seeMoreButtonGlow
                  }
                  aria-hidden="true"
                />

                <span
                  className={
                    styles.seeMoreButtonShine
                  }
                  aria-hidden="true"
                />

                <span>
                  {showAllGames
                    ? "Show Less"
                    : `See More Games (${hiddenGamesCount})`}
                </span>

                <span
                  className={
                    styles.seeMoreIcon
                  }
                  aria-hidden="true"
                >
                  <ChevronIcon
                    expanded={
                      showAllGames
                    }
                  />
                </span>
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}