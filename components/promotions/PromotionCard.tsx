"use client";

import Link from "next/link";
import { useState } from "react";

import type {
  Promotion,
} from "@/data/promotions";

import styles from "@/styles/Promotions.module.css";

interface PromotionCardProps {
  promotion: Promotion;
}

interface PromotionImageProps {
  promotion: Promotion;
}

function getInitials(
  title: string,
): string {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) =>
      word.charAt(0),
    )
    .join("")
    .toUpperCase();
}

function PromotionImage({
  promotion,
}: PromotionImageProps) {
  const [
    imageError,
    setImageError,
  ] = useState(false);

  if (imageError) {
    return (
      <div
        className={
          styles.promotionImageFallback
        }
        aria-hidden="true"
      >
        {getInitials(
          promotion.title,
        )}
      </div>
    );
  }

  return (
    <img
      src={promotion.image}
      alt={promotion.title}
      className={
        styles.promotionImage
      }
      loading="lazy"
      onError={() => {
        setImageError(true);
      }}
    />
  );
}

export default function PromotionCard({
  promotion,
}: PromotionCardProps) {
  const isAvailable =
    promotion.status ===
    "available";

  const cardClasses = [
    styles.promotionCard,

    promotion.theme === "gold"
      ? styles.promotionCardGold
      : styles.promotionCardBlue,

    isAvailable
      ? styles.promotionCardAvailable
      : styles.promotionCardUpcoming,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {/* Animated border light */}
      <span
        className={
          styles.cardAnimatedBorder
        }
        aria-hidden="true"
      />

      {/* Soft card glow */}
      <span
        className={
          styles.cardOuterGlow
        }
        aria-hidden="true"
      />

      {/* Hover shine */}
      <span
        className={
          styles.cardShine
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.promotionCardTop
        }
      >
        <div
          className={
            styles.promotionImageWrapper
          }
        >
          <PromotionImage
            promotion={promotion}
          />
        </div>

        <div
          className={
            styles.promotionInformation
          }
        >
          <h2
            className={
              styles.promotionTitle
            }
          >
            {promotion.title}
          </h2>

          <p
            className={
              styles.promotionSubtitle
            }
          >
            {promotion.subtitle}
          </p>
        </div>

        {!isAvailable && (
          <span
            className={
              styles.upcomingOverlay
            }
            aria-hidden="true"
          />
        )}
      </div>

      <div
        className={
          styles.promotionCardBottom
        }
      >
        <span
          className={[
            styles.promotionBadge,

            isAvailable
              ? styles.promotionBadgeAvailable
              : styles.promotionBadgeUpcoming,
          ].join(" ")}
        >
          <span
            className={
              styles.badgeDot
            }
            aria-hidden="true"
          />

          {promotion.badge}
        </span>

        <strong
          className={[
            styles.discountText,

            !isAvailable
              ? styles.upcomingText
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {promotion.discountText}
        </strong>
      </div>
    </>
  );

  if (
    isAvailable &&
    promotion.href
  ) {
    return (
      <Link
        href={promotion.href}
        className={cardClasses}
        aria-label={`Open ${promotion.title} promotion`}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      className={cardClasses}
      aria-label={`${promotion.title} is coming soon`}
    >
      {content}
    </article>
  );
}