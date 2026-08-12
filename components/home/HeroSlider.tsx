"use client";

import Link from "next/link";
import {
  useRef,
  useState,
} from "react";

import type {
  Swiper as SwiperType,
} from "swiper";

import {
  Autoplay,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  homeSlides,
} from "@/data/home-slides";

import "swiper/css";

import styles from "./HeroSlider.module.css";

const defaultGradient =
  "linear-gradient(90deg, rgba(4, 11, 20, 0.92) 0%, rgba(4, 11, 20, 0.58) 42%, rgba(4, 11, 20, 0.08) 100%)";

type NavigationDirection =
  | "previous"
  | "next";

function SliderArrowIcon() {
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

export default function HeroSlider() {
  const swiperRef =
    useRef<SwiperType | null>(
      null,
    );

  const slides = homeSlides;

  const [
    activeRealIndex,
    setActiveRealIndex,
  ] = useState(0);

  if (slides.length === 0) {
    return null;
  }

  const canSlide =
    slides.length > 1;

  const firstRealSwiperIndex =
    canSlide ? 1 : 0;

  const firstSlide =
    slides[0];

  const lastSlide =
    slides[
      slides.length - 1
    ];

  /*
   * Instead of Swiper loop mode, add:
   *
   * clone of last slide
   * all real slides
   * clone of first slide
   *
   * Example:
   * [slide 3, slide 1, slide 2, slide 3, slide 1]
   *
   * This fixes loop problems caused by:
   * slidesPerView="auto" + centeredSlides.
   */
  const renderedSlides =
    canSlide
      ? [
          {
            key: `clone-start-${lastSlide.id}`,
            slide: lastSlide,
            realIndex:
              slides.length - 1,
          },

          ...slides.map(
            (
              slide,
              realIndex,
            ) => ({
              key: `real-${slide.id}`,
              slide,
              realIndex,
            }),
          ),

          {
            key: `clone-end-${firstSlide.id}`,
            slide: firstSlide,
            realIndex: 0,
          },
        ]
      : [
          {
            key: `single-${firstSlide.id}`,
            slide: firstSlide,
            realIndex: 0,
          },
        ];

  /**
   * Restart autoplay after a manual
   * arrow or pagination click.
   */
  const restartAutoplay = (
    swiper: SwiperType,
  ): void => {
    if (!swiper.autoplay) {
      return;
    }

    swiper.autoplay.stop();
    swiper.autoplay.start();
  };

  /**
   * Convert Swiper's cloned-slide
   * index into the original slide index.
   */
  const getRealSlideIndex = (
    swiperIndex: number,
  ): number => {
    if (!canSlide) {
      return 0;
    }

    /*
     * Index 0 is the cloned last slide.
     */
    if (swiperIndex <= 0) {
      return slides.length - 1;
    }

    /*
     * The final Swiper index is the
     * cloned first slide.
     */
    if (
      swiperIndex >=
      slides.length + 1
    ) {
      return 0;
    }

    return swiperIndex - 1;
  };

  /**
   * After reaching a cloned slide,
   * instantly move to the matching
   * real slide without animation.
   *
   * The user cannot see this reset
   * because both slides show the
   * exact same banner.
   */
  const normalizeLoopPosition = (
    swiper: SwiperType,
  ): void => {
    if (
      !canSlide ||
      swiper.destroyed
    ) {
      return;
    }

    /*
     * Reached cloned last slide.
     * Jump to real last slide.
     */
    if (
      swiper.activeIndex === 0
    ) {
      swiper.slideTo(
        slides.length,
        0,
        false,
      );

      swiper.updateSlidesClasses();

      return;
    }

    /*
     * Reached cloned first slide.
     * Jump to real first slide.
     */
    if (
      swiper.activeIndex ===
      slides.length + 1
    ) {
      swiper.slideTo(
        1,
        0,
        false,
      );

      swiper.updateSlidesClasses();
    }
  };

  /**
   * Navigate in both directions.
   *
   * Right button uses next:
   * the banner visually moves left.
   *
   * Left button uses previous:
   * the banner visually moves right.
   */
  const handleNavigation = (
    direction:
      NavigationDirection,
  ): void => {
    const swiper =
      swiperRef.current;

    if (
      !swiper ||
      swiper.destroyed ||
      !canSlide
    ) {
      return;
    }

    let currentIndex =
      swiper.activeIndex;

    /*
     * Normalize a cloned boundary
     * before calculating the target.
     */
    if (currentIndex === 0) {
      currentIndex =
        slides.length;
    }

    if (
      currentIndex ===
      slides.length + 1
    ) {
      currentIndex = 1;
    }

    const targetIndex =
      direction === "next"
        ? currentIndex + 1
        : currentIndex - 1;

    swiper.slideTo(
      targetIndex,
      700,
      true,
    );

    restartAutoplay(swiper);
  };

  /**
   * Navigate using a pagination dot.
   */
  const handlePaginationClick = (
    realIndex: number,
  ): void => {
    const swiper =
      swiperRef.current;

    if (
      !swiper ||
      swiper.destroyed
    ) {
      return;
    }

    const swiperIndex =
      canSlide
        ? realIndex + 1
        : realIndex;

    swiper.slideTo(
      swiperIndex,
      700,
      true,
    );

    restartAutoplay(swiper);
  };

  return (
    <section
      className={
        styles.heroSection
      }
    >
      {/* Original decoration */}
      <div
        className={
          styles.backgroundDecoration
        }
        aria-hidden="true"
      />

      {/* Animated background lights */}
      <div
        className={
          styles.backgroundLightLeft
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.backgroundLightRight
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.backgroundLightSweep
        }
        aria-hidden="true"
      />

      <Swiper
        dir="ltr"
        modules={[
          Autoplay,
        ]}
        className={
          styles.heroSwiper
        }
        slidesPerView="auto"
        slidesPerGroup={1}
        centeredSlides
        initialSlide={
          firstRealSwiperIndex
        }
        /*
         * Important:
         *
         * Native loop is disabled.
         * We use manual cloned slides
         * for reliable two-direction
         * navigation.
         */
        loop={false}
        rewind={false}
        speed={700}
        spaceBetween={24}
        grabCursor={canSlide}
        allowTouchMove={canSlide}
        slideToClickedSlide={
          canSlide
        }
        preventInteractionOnTransition={
          false
        }
        watchSlidesProgress
        watchOverflow
        observer
        observeParents
        autoplay={
          canSlide
            ? {
                delay: 5000,

                /*
                 * Autoplay always uses
                 * the next slide.
                 *
                 * In LTR mode, the
                 * banners move visually
                 * from right to left.
                 */
                reverseDirection:
                  false,

                disableOnInteraction:
                  false,

                pauseOnMouseEnter:
                  true,

                stopOnLastSlide:
                  false,

                waitForTransition:
                  true,
              }
            : false
        }
        breakpoints={{
          0: {
            spaceBetween: 12,
          },

          768: {
            spaceBetween: 18,
          },

          1200: {
            spaceBetween: 24,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current =
            swiper;

          window.requestAnimationFrame(
            () => {
              if (
                swiper.destroyed
              ) {
                return;
              }

              swiper.slideTo(
                firstRealSwiperIndex,
                0,
                false,
              );

              swiper.update();
            },
          );
        }}
        onSlideChange={(swiper) => {
          const realIndex =
            getRealSlideIndex(
              swiper.activeIndex,
            );

          setActiveRealIndex(
            realIndex,
          );
        }}
        onSlideChangeTransitionEnd={(
          swiper,
        ) => {
          normalizeLoopPosition(
            swiper,
          );
        }}
      >
        {renderedSlides.map(
          ({
            key,
            slide,
          }) => (
            <SwiperSlide
              key={key}
              className={
                styles.heroSlide
              }
            >
              {({
                isActive,
                isPrev,
                isNext,
              }) => {
                const contentClasses = [
                  styles.slideContent,

                  slide.contentPosition ===
                  "right"
                    ? styles.slideContentRight
                    : "",

                  slide.contentPosition ===
                  "center"
                    ? styles.slideContentCenter
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                const cardClasses = [
                  styles.slideCard,

                  isActive
                    ? styles.slideCardActive
                    : styles.slideCardInactive,

                  isPrev ||
                  isNext
                    ? styles.slideCardNearby
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <article
                    className={
                      cardClasses
                    }
                    style={{
                      backgroundImage: `${
                        slide.gradient ||
                        defaultGradient
                      }, url("${slide.backgroundImage}")`,

                      backgroundPosition:
                        slide.backgroundPosition ||
                        "center",
                    }}
                  >
                    {/* Active card border */}
                    <span
                      className={
                        styles.cardLightBorder
                      }
                      aria-hidden="true"
                    />

                    {/* Active card glow */}
                    <span
                      className={
                        styles.cardBottomGlow
                      }
                      aria-hidden="true"
                    />

                    {slide.showContent !==
                      false && (
                      <div
                        className={
                          contentClasses
                        }
                      >
                        {slide.eyebrow && (
                          <span
                            className={[
                              styles.eyebrow,

                              slide.status ===
                              "live"
                                ? styles.eyebrowLive
                                : styles.eyebrowUpcoming,
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          >
                            {slide.status ===
                              "live" && (
                              <span
                                className={
                                  styles.liveDot
                                }
                                aria-hidden="true"
                              />
                            )}

                            {
                              slide.eyebrow
                            }
                          </span>
                        )}

                        {slide.title && (
                          <h1
                            className={
                              styles.slideTitle
                            }
                          >
                            {
                              slide.title
                            }
                          </h1>
                        )}

                        {slide.description && (
                          <p
                            className={
                              styles.slideDescription
                            }
                          >
                            {
                              slide.description
                            }
                          </p>
                        )}

                        {slide.buttonText &&
                          slide.href && (
                            <Link
                              href={
                                slide.href
                              }
                              className={
                                styles.slideButton
                              }
                              aria-label={
                                slide.title
                                  ? `${slide.buttonText}: ${slide.title}`
                                  : slide.buttonText
                              }
                              onPointerDown={(
                                event,
                              ) => {
                                event.stopPropagation();
                              }}
                              onClick={(
                                event,
                              ) => {
                                event.stopPropagation();
                              }}
                            >
                              <span>
                                {
                                  slide.buttonText
                                }
                              </span>

                              <span
                                className={
                                  styles.slideButtonArrow
                                }
                                aria-hidden="true"
                              >
                                <SliderArrowIcon />
                              </span>
                            </Link>
                          )}
                      </div>
                    )}

                    <span
                      className={
                        styles.slideShine
                      }
                      aria-hidden="true"
                    />

                    {!isActive && (
                      <span
                        className={
                          styles.inactiveOverlay
                        }
                        aria-hidden="true"
                      />
                    )}
                  </article>
                );
              }}
            </SwiperSlide>
          ),
        )}
      </Swiper>

      {/*
       * Separate navigation layer.
       *
       * It stays above Swiper but only
       * the buttons receive pointer
       * events.
       */}
      {canSlide && (
        <div
          className={
            styles.navigationLayer
          }
        >
          {/* Left button */}
          <button
            type="button"
            className={[
              styles.navigationButton,
              styles.navigationButtonLeft,
            ].join(" ")}
            aria-label="Show previous slide"
            onClick={() => {
              handleNavigation(
                "previous",
              );
            }}
          >
            <span
              className={
                styles.navigationButtonRing
              }
              aria-hidden="true"
            />

            <span
              className={
                styles.navigationButtonGlow
              }
              aria-hidden="true"
            />

            <span
              className={
                styles.navigationIcon
              }
              aria-hidden="true"
            >
              <SliderArrowIcon />
            </span>
          </button>

          {/* Right button */}
          <button
            type="button"
            className={[
              styles.navigationButton,
              styles.navigationButtonRight,
            ].join(" ")}
            aria-label="Show next slide"
            onClick={() => {
              /*
               * Next causes the banner
               * to move visually left.
               */
              handleNavigation(
                "next",
              );
            }}
          >
            <span
              className={
                styles.navigationButtonRing
              }
              aria-hidden="true"
            />

            <span
              className={
                styles.navigationButtonGlow
              }
              aria-hidden="true"
            />

            <span
              className={
                styles.navigationIcon
              }
              aria-hidden="true"
            >
              <SliderArrowIcon />
            </span>
          </button>
        </div>
      )}

      {/* Custom pagination */}
      {canSlide && (
        <div
          className={
            styles.customPagination
          }
          aria-label="Banner navigation"
        >
          {slides.map(
            (slide, index) => (
              <button
                key={`pagination-${slide.id}`}
                type="button"
                className={[
                  styles.paginationBullet,

                  index ===
                  activeRealIndex
                    ? styles.paginationBulletActive
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-label={`Show banner ${index + 1}`}
                aria-current={
                  index ===
                  activeRealIndex
                    ? "true"
                    : undefined
                }
                onClick={() => {
                  handlePaginationClick(
                    index,
                  );
                }}
              />
            ),
          )}
        </div>
      )}
    </section>
  );
}