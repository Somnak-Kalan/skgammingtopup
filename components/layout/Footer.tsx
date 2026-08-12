import Link from "next/link";

import { siteConfig } from "@/data/site";

import SkGamingLogo from "@/public/images/logo/sklogo.png";

export default function Footer() {
  const currentYear =
    new Date().getFullYear();

  const telegramUsername =
    siteConfig.telegramUsername.replace(
      /^@/,
      "",
    );

  const telegramUrl =
    `https://t.me/${telegramUsername}`;

  return (
    <footer className="site-footer">
      {/* Animated footer background */}
      <span
        className="footer-background-grid"
        aria-hidden="true"
      />

      <span
        className="footer-light footer-light-left"
        aria-hidden="true"
      />

      <span
        className="footer-light footer-light-right"
        aria-hidden="true"
      />

      <span
        className="footer-light-sweep"
        aria-hidden="true"
      />

      <div className="container footer-content">
        {/* Brand */}
        <div className="footer-brand-column">
          <Link
            href="/"
            className="footer-brand"
            aria-label="SK GAMMING TOPUP home"
          >
            <span className="footer-logo-wrapper">
              <span
                className="footer-logo-ring"
                aria-hidden="true"
              />

              <span
                className="footer-logo-glow"
                aria-hidden="true"
              />

              <img
                src={SkGamingLogo.src}
                alt="SK GAMMING logo"
                className="footer-logo"
              />
            </span>

            <span className="footer-brand-text">
              <span>
                SK GAMMING
              </span>

              <strong>
                TOPUP
              </strong>
            </span>
          </Link>

          <p className="footer-description">
            A simple and secure game
            top-up storefront designed
            for Cambodian players.
          </p>

          <p className="footer-warning">
            <span
              className="footer-warning-icon"
              aria-hidden="true"
            >
              !
            </span>

            Never share your game
            password, OTP, or
            verification code.
          </p>
        </div>

        {/* Shopping */}
        <div className="footer-column">
          <h3>
            Shopping
          </h3>

          <Link
            href="/games"
            className="footer-link"
          >
            <span>
              All Games
            </span>

            <span
              className="footer-link-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          <Link
            href="/games/mobile-legends"
            className="footer-link"
          >
            <span>
              MLBB Diamonds
            </span>

            <span
              className="footer-link-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          <span className="footer-disabled-link">
            <span>
              Honor of Kings
            </span>

            <small>
              Upcoming
            </small>
          </span>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>
            Support
          </h3>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <span>
              Telegram Support
            </span>

            <span
              className="footer-link-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="footer-link footer-email-link"
          >
            <span>
              {siteConfig.supportEmail}
            </span>
          </a>

          <span className="footer-support-status">
            <span
              className="footer-status-dot"
              aria-hidden="true"
            />

            Manual support
          </span>
        </div>

        {/* Payment */}
        <div className="footer-column">
          <h3>
            Payment
          </h3>

          <div className="footer-payment-list">
            <span className="footer-payment-item">
              <span className="footer-payment-icon">
                QR
              </span>

              <span>
                ABA KHQR
              </span>
            </span>

            <span className="footer-payment-item">
              <span className="footer-payment-icon">
                ✓
              </span>

              <span>
                Manual verification
              </span>
            </span>

            <span className="footer-payment-item">
              <span className="footer-payment-icon">
                $
              </span>

              <span>
                USD payment
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span
          className="footer-bottom-light"
          aria-hidden="true"
        />

        <span>
          © {currentYear}{" "}
          SK GAMMING TOPUP. All rights
          reserved.
        </span>

        <span>
          Mobile Legends, Honor of Kings,
          and other game names belong to
          their respective owners.
        </span>
      </div>
    </footer>
  );
}