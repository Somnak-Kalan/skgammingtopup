import {
  mlbbFaqs,
} from "@/data/games/mlbb";

import styles from "@/styles/MlbbShop.module.css";

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
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

export default function MlbbInformation() {
  return (
    <section
      className={
        styles.mlbbInformation
      }
    >
      <div
        className={
          styles.informationLayout
        }
      >
        <article
          className={
            styles.descriptionCard
          }
        >
          <span
            className={
              styles.cardHoverLight
            }
            aria-hidden="true"
          />

          <span
            className={
              styles.sectionKicker
            }
          >
            PRODUCT INFORMATION
          </span>

          <h2
            className={
              styles.informationTitle
            }
          >
            About Mobile Legends
            diamonds
          </h2>

          <p
            className={
              styles.informationText
            }
          >
            Diamonds are a premium
            in-game currency used in
            Mobile Legends: Bang Bang.
            Players can use them for
            eligible in-game content
            such as skins, heroes,
            events, passes, and other
            available items.
          </p>

          <p
            className={
              styles.informationText
            }
          >
            Your shop only needs the
            player&apos;s correct User
            ID and Zone ID to process a
            standard top-up. Never ask
            customers to share their
            password, email password,
            social-media password,
            one-time password, or
            verification code.
          </p>

          <h2
            className={
              styles.informationTitle
            }
          >
            How to top up MLBB diamonds
          </h2>

          <ol
            className={styles.guideList}
          >
            <li>
              Select the preferred
              diamond package.
            </li>

            <li>
              Enter the correct MLBB
              User ID.
            </li>

            <li>
              Enter the correct MLBB
              Zone ID.
            </li>

            <li>
              Continue to the ABA KHQR
              payment screen.
            </li>

            <li>
              Pay the exact displayed
              amount.
            </li>

            <li>
              Copy the order details.
            </li>

            <li>
              Send the details and
              receipt screenshot through
              Telegram.
            </li>

            <li>
              Wait for manual payment
              verification and delivery.
            </li>
          </ol>

          <h2
            className={
              styles.informationTitle
            }
          >
            How to find User ID and
            Zone ID
          </h2>

          <ol
            className={styles.guideList}
          >
            <li>
              Open Mobile Legends.
            </li>

            <li>
              Tap your profile avatar.
            </li>

            <li>
              Find the account number
              displayed in a format
              similar to:
              <strong>
                {" "}
                123456789 (1234)
              </strong>
            </li>

            <li>
              The first number is the
              User ID and the number in
              parentheses is the Zone
              ID.
            </li>
          </ol>

          <div
            className={styles.guideImage}
          >
            <span
              className={
                styles.guideImageShine
              }
              aria-hidden="true"
            />

            <img
              src="/images/guide/mlbb-user-zone-id.jpg"
              alt="Example showing where to find an MLBB User ID and Zone ID"
            />

            <span>
              Replace this image with
              your own clear guide
              screenshot.
            </span>
          </div>
        </article>

        <aside
          className={styles.faqCard}
        >
          <span
            className={
              styles.cardHoverLight
            }
            aria-hidden="true"
          />

          <span
            className={
              styles.sectionKicker
            }
          >
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2
            className={
              styles.informationTitle
            }
          >
            MLBB top-up FAQ
          </h2>

          <div
            className={styles.faqList}
          >
            {mlbbFaqs.map((item) => (
              <details
                key={item.question}
                className={
                  styles.faqItem
                }
              >
                <summary
                  className={
                    styles.faqSummary
                  }
                >
                  <span>
                    {item.question}
                  </span>

                  <span
                    className={
                      styles.faqChevron
                    }
                    aria-hidden="true"
                  >
                    <ChevronIcon />
                  </span>
                </summary>

                <div
                  className={
                    styles.faqAnswer
                  }
                >
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}