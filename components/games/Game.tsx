"use client";

import Link from "next/link";

import {
  type CSSProperties,
  useMemo,
  useState,
} from "react";

import {
  games,
  platformItems,
} from "@/data/games/game";

import type {
  GameItem,
  PlatformIcon as PlatformIconType,
  PlatformId,
} from "@/data/games/game";

import styles from "@/styles/Game.module.css";

interface GameImageProps {
  game: GameItem;
}

interface GameCardProps {
  game: GameItem;
}

interface PlatformIconProps {
  type: PlatformIconType;
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

function PlatformIcon({
  type,
}: PlatformIconProps) {
  if (type === "mobile") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="7"
          y="2"
          width="10"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M10 5H14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <circle
          cx="12"
          cy="18.5"
          r="1"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "pc") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M8 21H16M12 17V21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "web") {
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
          d="M11 4C9.2 6 8.2 8.3 8.2 11C8.2 13.7 9.2 16 11 18M4 11H18M16 16L21 21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "playstation") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="currentColor"
        />

        <path
          d="M10.5 6.5V17L13.2 17.8V9.4C13.2 8.5 13.9 8.2 14.5 8.8C15.2 9.4 15.6 10.4 15.4 11.4C17.2 11.2 18.2 10.4 18.2 9.2C18.2 7.7 16.4 6.6 13.5 6.2C12.5 6.1 11.5 6.2 10.5 6.5Z"
          fill="#202629"
        />
      </svg>
    );
  }

  if (type === "xbox") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="currentColor"
        />

        <path
          d="M7 7.2C8.5 5.8 10.2 5.4 12 6.3C13.8 5.4 15.5 5.8 17 7.2C15.1 8.2 13.5 9.7 12 11.8C10.5 9.7 8.9 8.2 7 7.2ZM6 16.8C7.1 14.3 8.9 12 12 9.8C15.1 12 16.9 14.3 18 16.8C16.4 18.8 14.4 20 12 20C9.6 20 7.6 18.8 6 16.8Z"
          fill="#202629"
        />
      </svg>
    );
  }

  if (type === "switch") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="8"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <rect
          x="13"
          y="3"
          width="8"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="7"
          cy="8"
          r="1.5"
          fill="currentColor"
        />

        <circle
          cx="17"
          cy="16"
          r="1.5"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
      />

      <circle
        cx="15.7"
        cy="8.3"
        r="2.8"
        stroke="#202629"
        strokeWidth="1.6"
      />

      <circle
        cx="8"
        cy="15.3"
        r="2.2"
        stroke="#202629"
        strokeWidth="1.6"
      />

      <path
        d="M10 14.4L13.8 10.3"
        stroke="#202629"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
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
    "--game-background":
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
            styles.imageOverlay
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
            styles.gameStatusRow
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

        <p
          className={
            styles.gameMeta
          }
        >
          <span>
            {game.language}
          </span>

          <span>/</span>

          <span>
            {game.region}
          </span>
        </p>

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
              ? "Top up now"
              : "Coming soon"}
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

export default function GamePage() {
  const [
    activePlatform,
    setActivePlatform,
  ] =
    useState<PlatformId>("mobile");

  const filteredGames =
    useMemo(() => {
      return games.filter(
        (game) =>
          game.platform ===
          activePlatform,
      );
    }, [activePlatform]);

  const platformCounts =
    useMemo(() => {
      return platformItems.reduce(
        (
          result,
          platform,
        ) => {
          result[platform.id] =
            games.filter(
              (game) =>
                game.platform ===
                platform.id,
            ).length;

          return result;
        },
        {} as Record<
          PlatformId,
          number
        >,
      );
    }, []);

  const activePlatformLabel =
    platformItems.find(
      (platform) =>
        platform.id ===
        activePlatform,
    )?.label ?? "Games";

  return (
    <main
      className={
        styles.gamePage
      }
    >
      <div
        className={
          styles.pageBackgroundCircleOne
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.pageBackgroundCircleTwo
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.pageBackgroundGlowOne
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.pageBackgroundGlowTwo
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.pageLightSweep
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.gameContainer
        }
      >
        <aside
          className={
            styles.platformSidebar
          }
        >
          <div
            className={
              styles.platformHeader
            }
          >
            Platform
          </div>

          <div
            className={
              styles.platformList
            }
          >
            {platformItems.map(
              (platform) => {
                const isActive =
                  platform.id ===
                  activePlatform;

                const count =
                  platformCounts[
                    platform.id
                  ] ?? 0;

                return (
                  <button
                    key={platform.id}
                    type="button"
                    className={[
                      styles.platformItem,

                      isActive
                        ? styles.platformItemActive
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-pressed={
                      isActive
                    }
                    onClick={() => {
                      setActivePlatform(
                        platform.id,
                      );
                    }}
                  >
                    <span
                      className={
                        styles.platformItemGlow
                      }
                      aria-hidden="true"
                    />

                    <span
                      className={
                        styles.platformIcon
                      }
                      aria-hidden="true"
                    >
                      <PlatformIcon
                        type={
                          platform.icon
                        }
                      />
                    </span>

                    <span
                      className={
                        styles.platformName
                      }
                    >
                      {platform.label}
                    </span>

                    <span
                      className={
                        styles.platformCount
                      }
                    >
                      {count}
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </aside>

        <section
          className={
            styles.gameContent
          }
        >
          <span
            className={
              styles.contentBackgroundGlow
            }
            aria-hidden="true"
          />

          <span
            className={
              styles.contentLightSweep
            }
            aria-hidden="true"
          />

          <div
            className={
              styles.breadcrumb
            }
          >
            <Link href="/">
              SK GAMING
            </Link>

            <span>/</span>

            <span>Game</span>
          </div>

          <div
            className={
              styles.contentHeader
            }
          >
            <div>
              <h1>
                {activePlatformLabel}
              </h1>

              <p>
                Select a game to continue
                to its top-up page.
              </p>
            </div>

            <span
              className={
                styles.gameCount
              }
            >
              {filteredGames.length}{" "}
              {filteredGames.length ===
              1
                ? "Game"
                : "Games"}
            </span>
          </div>

          {filteredGames.length >
          0 ? (
            <div
              className={
                styles.gamesGrid
              }
            >
              {filteredGames.map(
                (game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                  />
                ),
              )}
            </div>
          ) : (
            <div
              className={
                styles.emptyState
              }
            >
              <div
                className={
                  styles.emptyIcon
                }
              >
                🎮
              </div>

              <h2>
                No games available
              </h2>

              <p>
                There are currently no{" "}
                {activePlatformLabel}{" "}
                games available.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActivePlatform(
                    "mobile",
                  );
                }}
              >
                View Mobile Games
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}