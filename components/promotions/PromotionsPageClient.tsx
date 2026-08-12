"use client";

import {
  useMemo,
  useState,
} from "react";

import PromotionCard from "./PromotionCard";

import type {
  Promotion,
  PromotionCategory,
} from "@/data/promotions";

import styles from "@/styles/Promotions.module.css";

interface PromotionsPageClientProps {
  promotions: Promotion[];
}

type PromotionFilter =
  | "All"
  | PromotionCategory;

const promotionFilters: PromotionFilter[] = [
  "All",
  "Games",
  "Live Streaming",
  "Gift Cards",
];

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PromotionsPageClient({
  promotions,
}: PromotionsPageClientProps) {
  const [
    activeFilter,
    setActiveFilter,
  ] =
    useState<PromotionFilter>(
      "All",
    );

  const [
    searchValue,
    setSearchValue,
  ] = useState("");

  const filteredPromotions =
    useMemo(() => {
      const normalizedSearch =
        searchValue
          .trim()
          .toLowerCase();

      return promotions.filter(
        (promotion) => {
          const matchesCategory =
            activeFilter ===
              "All" ||
            promotion.category ===
              activeFilter;

          const matchesSearch =
            normalizedSearch.length ===
              0 ||
            promotion.title
              .toLowerCase()
              .includes(
                normalizedSearch,
              ) ||
            promotion.subtitle
              .toLowerCase()
              .includes(
                normalizedSearch,
              );

          return (
            promotion.isActive &&
            matchesCategory &&
            matchesSearch
          );
        },
      );
    }, [
      activeFilter,
      promotions,
      searchValue,
    ]);

  const clearFilters =
    (): void => {
      setActiveFilter("All");
      setSearchValue("");
    };

  return (
    <main
      className={
        styles.promotionsPage
      }
    >
      <div
        className={
          styles.pageDecorationOne
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.pageDecorationTwo
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.pageContainer
        }
      >
        <section
          className={
            styles.pageHeader
          }
        >
          <div
            className={
              styles.pageHeaderContent
            }
          >
            <span
              className={
                styles.pageEyebrow
              }
            >
              Limited-time discounts
            </span>

            <h1
              className={
                styles.pageTitle
              }
            >
              Exclusive Offers
            </h1>

            <p
              className={
                styles.pageDescription
              }
            >
              Don&apos;t miss our current
              deals. Choose your
              favourite game or service
              and enjoy a special
              discount.
            </p>
          </div>

          <div
            className={
              styles.promotionCounter
            }
          >
            <strong>
              {
                filteredPromotions.length
              }
            </strong>

            <span>
              {filteredPromotions.length ===
              1
                ? "Offer"
                : "Offers"}
            </span>
          </div>
        </section>

        <section
          className={
            styles.filterSection
          }
        >
          <div
            className={
              styles.filterTabs
            }
          >
            {promotionFilters.map(
              (filter) => (
                <button
                  key={filter}
                  type="button"
                  className={[
                    styles.filterButton,

                    activeFilter ===
                    filter
                      ? styles.filterButtonActive
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => {
                    setActiveFilter(
                      filter,
                    );
                  }}
                >
                  {filter}
                </button>
              ),
            )}
          </div>

          <div
            className={
              styles.searchContainer
            }
          >
            <span
              className={
                styles.searchIcon
              }
            >
              <SearchIcon />
            </span>

            <input
              type="search"
              value={searchValue}
              placeholder="Search promotions..."
              className={
                styles.searchInput
              }
              aria-label="Search promotions"
              onChange={(event) => {
                setSearchValue(
                  event.target.value,
                );
              }}
            />

            {searchValue && (
              <button
                type="button"
                className={
                  styles.clearSearchButton
                }
                aria-label="Clear search"
                onClick={() => {
                  setSearchValue("");
                }}
              >
                ×
              </button>
            )}
          </div>
        </section>

        {filteredPromotions.length >
        0 ? (
          <section
            className={
              styles.promotionsGrid
            }
          >
            {filteredPromotions.map(
              (promotion) => (
                <PromotionCard
                  key={promotion.id}
                  promotion={
                    promotion
                  }
                />
              ),
            )}
          </section>
        ) : (
          <section
            className={
              styles.emptyState
            }
          >
            <div
              className={
                styles.emptyIcon
              }
            >
              %
            </div>

            <h2>
              No promotions found
            </h2>

            <p>
              We couldn&apos;t find an
              offer matching your
              current search or selected
              category.
            </p>

            <button
              type="button"
              className={
                styles.resetButton
              }
              onClick={
                clearFilters
              }
            >
              View all promotions
            </button>
          </section>
        )}
      </div>
    </main>
  );
}