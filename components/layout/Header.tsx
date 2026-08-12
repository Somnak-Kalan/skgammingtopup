"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useState,
} from "react";

import { siteConfig } from "@/data/site";
import SkGamingLogo from "@/public/images/logo/sklogo.png";

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.6 4.2L17.7 18.4C17.5 19.4 16.9 19.7 16.1 19.2L11.7 16L9.6 18.1C9.4 18.3 9.2 18.5 8.7 18.5L9 14L17.2 6.6C17.6 6.3 17.1 6.1 16.7 6.4L6.6 12.8L2.3 11.4C1.4 11.1 1.4 10.5 2.5 10.1L19.3 3.6C20.1 3.3 20.8 3.8 20.6 4.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();

  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  const telegramUsername =
    siteConfig.telegramUsername.replace(
      /^@/,
      "",
    );

  const telegramUrl =
    `https://t.me/${telegramUsername}`;

  /**
   * Close mobile navigation
   * whenever the current route changes.
   */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /**
   * Close navigation when
   * Escape key is pressed.
   */
  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  /**
   * Check whether navigation
   * link is currently active.
   */
  const checkActiveRoute = (
    href: string,
  ): boolean => {
    /**
     * usePathname() may temporarily
     * return null.
     */
    if (!pathname) {
      return false;
    }

    /**
     * Home page should only match "/".
     */
    if (href === "/") {
      return pathname === "/";
    }

    /**
     * Examples:
     *
     * /games
     *
     * also matches
     *
     * /games/mobile-legends
     */
    return (
      pathname === href ||
      pathname.startsWith(
        `${href}/`,
      )
    );
  };

  return (
    <header
      className={[
        "site-header",
        menuOpen
          ? "site-header-menu-open"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* ================================= */}
      {/* Animated Background */}
      {/* ================================= */}

      <div
        className="header-background-effects"
        aria-hidden="true"
      >
        <span className="header-glow header-glow-one" />

        <span className="header-glow header-glow-two" />

        <span className="header-moving-light" />
      </div>

      {/* ================================= */}
      {/* Top Header */}
      {/* ================================= */}

      <div className="header-top">
        <div className="container header-top-content">
          <div className="header-top-message">
            <span className="header-live-indicator" />

            <span>
              Fast game top-up for Cambodia
            </span>
          </div>

          <div className="header-top-right">
            <button
              type="button"
              className="header-option-button"
            >
              EN
            </button>

            <span className="header-option-divider">
              /
            </span>

            <button
              type="button"
              className="header-option-button"
            >
              USD
            </button>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* Main Header */}
      {/* ================================= */}

      <div className="header-main">
        <div className="container header-main-content">
          {/* Logo */}

          <Link
            href="/"
            className="brand"
            aria-label="SK Gaming Top-Up home"
          >
            <span className="brand-logo-wrapper">
              <span
                className="brand-logo-light"
                aria-hidden="true"
              />

              <Image
                src={SkGamingLogo}
                alt="SK Gaming Logo"
                width={52}
                height={52}
                priority
                className="brand-logo-image"
              />
            </span>

            <span className="brand-text">
              <span className="brand-main-text">
                SK GAMMING
              </span>

              <strong>TOPUP</strong>
            </span>
          </Link>

          {/* ================================= */}
          {/* Mobile Menu Button */}
          {/* ================================= */}

          <button
            type="button"
            className={[
              "mobile-menu-button",
              menuOpen
                ? "mobile-menu-button-active"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => {
              setMenuOpen(
                (current) => !current,
              );
            }}
          >
            <span />
            <span />
            <span />
          </button>

          {/* ================================= */}
          {/* Navigation */}
          {/* ================================= */}

          <nav
            id="main-navigation"
            className={[
              "main-nav",
              menuOpen
                ? "main-nav-open"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="main-nav-links">
              {siteConfig.navigation.map(
                (item) => {
                  const active =
                    checkActiveRoute(
                      item.href,
                    );

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "nav-link",
                        active
                          ? "nav-link-active"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                    >
                      <span className="nav-link-text">
                        {item.label}
                      </span>

                      <span
                        className="nav-link-light"
                        aria-hidden="true"
                      />
                    </Link>
                  );
                },
              )}
            </div>

            {/* ================================= */}
            {/* Telegram Support */}
            {/* ================================= */}

            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header-support-button"
            >
              <span
                className="support-button-glow"
                aria-hidden="true"
              />

              <span className="support-button-icon">
                <TelegramIcon />
              </span>

              <span>
                Telegram Support
              </span>
            </a>
          </nav>
        </div>

        <div
          className="header-bottom-light"
          aria-hidden="true"
        />
      </div>
    </header>
  );
}