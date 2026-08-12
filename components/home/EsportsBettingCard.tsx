"use client";

import { useState } from "react";

import {
  bettingConfig,
  bettingGames,
} from "@/data/betting";

import type {
  BettingGame,
} from "@/data/betting";

import styles from "./EsportsBettingCard.module.css";

interface GameIconProps {
  game: BettingGame;
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="8"
        width="11"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M16 8V6C16 4.9 15.1 4 14 4H6C4.9 4 4 4.9 4 6V14C4 15.1 4.9 16 6 16H8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7.5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GamepadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 10H16C18.8 10 20 11.2 20 14C20 16.8 18.8 18 16 18H8C5.2 18 4 16.8 4 14C4 11.2 5.2 10 8 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M8 6L9.2 8.6M16 6L14.8 8.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M8 14H10M9 13V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="15.5"
        cy="13.5"
        r="0.9"
        fill="currentColor"
      />

      <circle
        cx="17.8"
        cy="15.5"
        r="0.9"
        fill="currentColor"
      />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 4H16V8C16 11.2 14.2 13 12 13C9.8 13 8 11.2 8 8V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M8 6H5V7.5C5 9.4 6.3 11 8.2 11.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M16 6H19V7.5C19 9.4 17.7 11 15.8 11.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M12 13V17M9 20H15M10 17H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoneyIcon() {
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
        d="M14.8 9.2C14.1 8.6 13.2 8.3 12.2 8.3C10.8 8.3 9.8 9 9.8 10C9.8 11 10.6 11.5 12.3 11.9C14 12.3 14.8 12.9 14.8 14C14.8 15.2 13.7 15.9 12.2 15.9C11 15.9 9.9 15.5 9.1 14.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M12 6.8V8.2M12 16V17.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GameIcon({
  game,
}: GameIconProps) {
  const [
    hasImageError,
    setHasImageError,
  ] = useState(false);

  const initials = game.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  if (
    hasImageError ||
    !game.image
  ) {
    return (
      <div
        className={
          styles.gameIconFallback
        }
        aria-hidden="true"
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={game.image}
      alt={`${game.name} icon`}
      className={
        styles.gameIconImage
      }
      loading="lazy"
      onError={() => {
        setHasImageError(true);
      }}
    />
  );
}

export default function EsportsBettingCard() {
  const [
    copied,
    setCopied,
  ] = useState(false);

  const copyPromoCode =
    async (): Promise<void> => {
      try {
        await navigator.clipboard.writeText(
          bettingConfig.promoCode,
        );

        setCopied(true);

        window.setTimeout(() => {
          setCopied(false);
        }, 1800);
      } catch (error) {
        console.error(
          "Unable to copy promo code:",
          error,
        );
      }
    };

  const openBettingGame = (
    game: BettingGame,
  ): void => {
    if (!game.isAvailable) {
      return;
    }

    void copyPromoCode();

    window.open(
      game.affiliateUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  if (bettingGames.length === 0) {
    return null;
  }

  return (
    <section
      className={styles.betSection}
    >
      <div
        className={styles.betCard}
      >
        <div
          className={
            styles.animatedBorder
          }
          aria-hidden="true"
        />

        <div
          className={
            styles.bottomLight
          }
          aria-hidden="true"
        />

        {/* Left side */}
        <div
          className={
            styles.betIntroduction
          }
        >
          <span
            className={
              styles.betEyebrow
            }
          >
            Esports betting
          </span>

          <h2>
            Choose Your Game
          </h2>

          <p>
            Choose your favorite game,
            predict the result and
            explore available betting
            markets on our partner
            website.
          </p>

          <div
            className={
              styles.promoCodeBox
            }
          >
            <div>
              <span>
                Promo code
              </span>

              <strong>
                {
                  bettingConfig.promoCode
                }
              </strong>
            </div>

            <button
              type="button"
              onClick={() => {
                void copyPromoCode();
              }}
            >
              {copied ? (
                <>
                  <CheckIcon />
                  Copied
                </>
              ) : (
                <>
                  <CopyIcon />
                  Copy code
                </>
              )}
            </button>
          </div>

          <a
            href={
              bettingConfig.fullAffiliateUrl
            }
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={
              styles.registerButton
            }
            onClick={() => {
              void copyPromoCode();
            }}
          >
            {copied
              ? "Code copied — join now"
              : "Join with promo code"}

            <ArrowIcon />
          </a>

          <div
            className={
              styles.responsibleNotice
            }
          >
            <strong>
              18+
            </strong>

            <p>
              Betting involves financial
              risk. Winnings are not
              guaranteed. Play
              responsibly and only where
              betting is legal.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div
          className={styles.gamesArea}
        >
          {/* Promotional money block */}
          <div
            className={
              styles.rewardBanner
            }
          >
            <div
              className={
                styles.rewardIcon
              }
            >
              <TrophyIcon />
            </div>

            <div
              className={
                styles.rewardContent
              }
            >
              <span
                className={
                  styles.rewardLabel
                }
              >
                Predict and play
              </span>

              <h3>
                Predict Win or Loss.
                Play for Bigger Rewards.
              </h3>

              <p>
                Choose your prediction,
                explore available
                markets and play for
                potential rewards.
              </p>

              <span
                className={
                  styles.rewardWarning
                }
              >
                Winnings are never
                guaranteed.
              </span>
            </div>

            <div
              className={
                styles.rewardMoneyIcon
              }
              aria-hidden="true"
            >
              <MoneyIcon />
            </div>
          </div>

          <div
            className={
              styles.gamesHeader
            }
          >
            <div>
              <span>
                Available games
              </span>

              <h3>
                All Games
              </h3>
            </div>

            <a
              href={
                bettingConfig.fullAffiliateUrl
              }
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={
                styles.viewAllButton
              }
              onClick={() => {
                void copyPromoCode();
              }}
            >
              Visit betting site
              <ArrowIcon />
            </a>
          </div>

          <div
            className={
              styles.gamesGrid
            }
          >
            {bettingGames.map(
              (game) => (
                <button
                  key={game.id}
                  type="button"
                  className={
                    styles.smallGameCard
                  }
                  disabled={
                    !game.isAvailable
                  }
                  aria-label={
                    game.isAvailable
                      ? `Open ${game.name}`
                      : `${game.name} is coming soon`
                  }
                  onClick={() => {
                    openBettingGame(
                      game,
                    );
                  }}
                >
                  <span
                    className={
                      styles.smallGameCardLeft
                    }
                  >
                    <span
                      className={
                        styles.smallGameCardImageBox
                      }
                    >
                      <GameIcon
                        game={game}
                      />
                    </span>

                    <span
                      className={
                        styles.smallGameCardText
                      }
                    >
                      <strong>
                        {game.name}
                      </strong>

                      <small>
                        {game.isAvailable
                          ? "Betting available"
                          : "Coming soon"}
                      </small>
                    </span>
                  </span>

                  <span
                    className={
                      styles.smallGameCardRight
                    }
                    aria-hidden="true"
                  >
                    {game.isAvailable ? (
                      <ArrowIcon />
                    ) : (
                      <GamepadIcon />
                    )}
                  </span>
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}