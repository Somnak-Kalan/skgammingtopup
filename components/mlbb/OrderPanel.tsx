import {
  mlbbGame,
} from "@/data/games/mlbb";

import type {
  CheckoutErrors,
  DiamondPackage,
} from "@/types";

import {
  formatUsd,
} from "@/lib/format";

import styles from "@/styles/MlbbShop.module.css";

interface OrderPanelProps {
  selectedPackage?: DiamondPackage;
  userId: string;
  zoneId: string;
  errors: CheckoutErrors;
  onUserIdChange: (
    value: string,
  ) => void;
  onZoneIdChange: (
    value: string,
  ) => void;
  onCheckout: () => void;
}

function HelpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M9.8 9.2a2.5 2.5 0 0 1 4.8.9c0 1.8-2.6 2-2.6 3.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="12"
        cy="17.1"
        r="1"
        fill="currentColor"
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
        d="M5 12h13M13 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OrderPanel({
  selectedPackage,
  userId,
  zoneId,
  errors,
  onUserIdChange,
  onZoneIdChange,
  onCheckout,
}: OrderPanelProps) {
  return (
    <aside
      className={styles.orderSidebar}
    >
      <div
        className={styles.orderPromo}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 13, 21, 0.88), rgba(8, 35, 65, 0.34)), url("${mlbbGame.banner}")`,
        }}
      >
        <span
          className={
            styles.orderPromoGlow
          }
          aria-hidden="true"
        />

        <div
          className={
            styles.orderPromoContent
          }
        >
          <span>
            MLBB TOP-UP
          </span>

          <strong>
            Fast and secure diamonds
          </strong>
        </div>

        <span
          className={
            styles.orderPromoArrow
          }
          aria-hidden="true"
        >
          <ArrowIcon />
        </span>
      </div>

      <section
        className={styles.orderCard}
      >
        <span
          className={
            styles.cardHoverLight
          }
          aria-hidden="true"
        />

        <div
          className={styles.panelHeading}
        >
          <div>
            <span
              className={
                styles.panelStep
              }
            >
              Step 2
            </span>

            <h2>
              Order Information
            </h2>
          </div>

          <span
            className={
              styles.orderHelpIcon
            }
            title="Find your User ID and Zone ID on your Mobile Legends profile."
          >
            <HelpIcon />
          </span>
        </div>

        <div
          className={styles.idFieldGrid}
        >
          <div
            className={styles.formGroup}
          >
            <label
              htmlFor="mlbb-user-id"
            >
              Player ID
            </label>

            <div
              className={[
                styles.inputShell,
                errors.userId
                  ? styles.inputShellError
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className={
                  styles.inputFocusLight
                }
                aria-hidden="true"
              />

              <span
                className={
                  styles.inputInnerBackground
                }
                aria-hidden="true"
              />

              <span
                className={
                  styles.inputIcon
                }
                aria-hidden="true"
              >
                ID
              </span>

              <input
                id="mlbb-user-id"
                inputMode="numeric"
                autoComplete="off"
                value={userId}
                placeholder="Enter Player ID"
                className={
                  styles.textInput
                }
                aria-invalid={Boolean(
                  errors.userId,
                )}
                aria-describedby="mlbb-user-id-message"
                onChange={(event) => {
                  onUserIdChange(
                    event.target.value,
                  );
                }}
              />
            </div>

            <span
              id="mlbb-user-id-message"
              className={
                errors.userId
                  ? styles.fieldError
                  : styles.fieldHint
              }
            >
              {errors.userId ||
                "Numbers only."}
            </span>
          </div>

          <div
            className={styles.formGroup}
          >
            <label
              htmlFor="mlbb-zone-id"
            >
              Zone ID
            </label>

            <div
              className={[
                styles.inputShell,
                errors.zoneId
                  ? styles.inputShellError
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className={
                  styles.inputFocusLight
                }
                aria-hidden="true"
              />

              <span
                className={
                  styles.inputInnerBackground
                }
                aria-hidden="true"
              />

              <span
                className={
                  styles.inputIcon
                }
                aria-hidden="true"
              >
                #
              </span>

              <input
                id="mlbb-zone-id"
                inputMode="numeric"
                autoComplete="off"
                value={zoneId}
                placeholder="Enter Zone ID"
                className={
                  styles.textInput
                }
                aria-invalid={Boolean(
                  errors.zoneId,
                )}
                aria-describedby="mlbb-zone-id-message"
                onChange={(event) => {
                  onZoneIdChange(
                    event.target.value,
                  );
                }}
              />
            </div>

            <span
              id="mlbb-zone-id-message"
              className={
                errors.zoneId
                  ? styles.fieldError
                  : styles.fieldHint
              }
            >
              {errors.zoneId ||
                "Shown beside Player ID."}
            </span>
          </div>
        </div>
      </section>

      <section
        className={[
          styles.orderCard,
          styles.totalCard,
        ].join(" ")}
      >
        <span
          className={
            styles.totalAnimatedBorder
          }
          aria-hidden="true"
        />

        <span
          className={
            styles.totalCardGlow
          }
          aria-hidden="true"
        />

        <div
          className={styles.totalHeading}
        >
          <div>
            <span
              className={
                styles.panelStep
              }
            >
              Step 3
            </span>

            <h2>Total</h2>
          </div>

          <strong
            key={
              selectedPackage?.id ||
              "empty-total"
            }
            className={
              styles.totalPrice
            }
          >
            {selectedPackage
              ? formatUsd(
                  selectedPackage.price,
                )
              : "$0.00"}
          </strong>
        </div>

        <div
          className={styles.orderDivider}
        />

        <div
          className={styles.summaryRow}
        >
          <span>Package</span>

          <strong>
            {selectedPackage?.title ||
              "Not selected"}
          </strong>
        </div>

        <div
          className={styles.summaryRow}
        >
          <span>Payment</span>
          <strong>ABA KHQR</strong>
        </div>

        <div
          className={styles.summaryRow}
        >
          <span>Processing</span>
          <strong>Manual</strong>
        </div>

        {errors.package ? (
          <div
            className={
              styles.checkoutError
            }
            role="alert"
          >
            {errors.package}
          </div>
        ) : null}

        <button
          type="button"
          className={
            styles.checkoutButton
          }
          onClick={onCheckout}
        >
          <span
            className={
              styles.buttonShine
            }
            aria-hidden="true"
          />

          <span>
            Continue to ABA KHQR
          </span>

          <span
            className={
              styles.checkoutArrow
            }
            aria-hidden="true"
          >
            <ArrowIcon />
          </span>
        </button>

        <div
          className={styles.secureNote}
        >
          <span aria-hidden="true">
            ✓
          </span>

          <p>
            We only need your User ID
            and Zone ID. Never provide
            your password or
            verification code.
          </p>
        </div>
      </section>
    </aside>
  );
}