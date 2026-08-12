import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

import styles from "./SocialMediaCard.module.css";

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
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SocialMediaCard() {
  return (
    <section
      className={styles.socialSection}
    >
      <div className={styles.socialCard}>
        <div
          className={
            styles.socialCardHeader
          }
        >
          <div>
            <span
              className={
                styles.headerEyebrow
              }
            >
              Stay connected
            </span>

            <h2>
              Follow SK Gaming
            </h2>

            <p>
              Follow our official social
              media channels for game
              updates, promotions,
              tutorials, and customer
              support.
            </p>
          </div>
<div
  className={styles.headerDecoration}
  aria-hidden="true"
>
  <span />
  <span />
  <span />
</div>
        </div>

        <div
          className={
            styles.socialMediaGrid
          }
        >
          {siteConfig.socialMedia.map(
            (social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  styles.socialMediaItem,
                  styles[
                    `socialMedia${social.type
                      .charAt(0)
                      .toUpperCase()}${social.type.slice(
                      1,
                    )}`
                  ],
                ].join(" ")}
                aria-label={`Open our ${social.name}`}
              >
                <span
                  className={
                    styles.socialIcon
                  }
                >
                  <Image
                    src={social.image}
                    alt={`${social.name} logo`}
                    width={48}
                    height={48}
                    className={
                      styles.socialIconImage
                    }
                  />
                </span>

                <span
                  className={
                    styles.socialInformation
                  }
                >
                  <strong>
                    {social.name}
                  </strong>

                  <small>
                    {social.username}
                  </small>

                  <span>
                    {social.description}
                  </span>
                </span>

                <span
                  className={
                    styles.socialArrow
                  }
                >
                  <ArrowIcon />
                </span>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}