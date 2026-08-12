import type {
  DiamondPackage,
} from "@/types";

import {
  formatUsd,
} from "@/lib/format";

import styles from "@/styles/MlbbShop.module.css";

interface PackageListProps {
  packages: DiamondPackage[];
  selectedPackageId: string;
  onSelectPackage: (
    packageId: string,
  ) => void;
}

function EnergyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.1 2.5 5.8 13h5.1l-.8 8.5L18.2 10h-5.3l.2-7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function PackageList({
  packages,
  selectedPackageId,
  onSelectPackage,
}: PackageListProps) {
  return (
    <section
      className={styles.packagePanel}
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
            Step 1
          </span>

          <h2>
            Select Top-Up Amount
          </h2>
        </div>

        <span
          className={
            styles.packageCount
          }
        >
          {packages.length} packages
        </span>
      </div>

      <div
        className={styles.packageList}
      >
        {packages.map((item) => {
          const selected =
            item.id ===
            selectedPackageId;

          const description =
            item.discountLabel ||
            (item.category ===
            "membership"
              ? "Membership package"
              : item.bonus > 0
                ? `${item.diamonds} diamonds + ${item.bonus} bonus`
                : `${item.diamonds} diamonds`);

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              className={[
                styles.packageItem,
                selected
                  ? styles.packageItemSelected
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => {
                onSelectPackage(
                  item.id,
                );
              }}
            >
              <span
                className={
                  styles.packageItemLight
                }
                aria-hidden="true"
              />

              <span
                className={
                  styles.packageItemShine
                }
                aria-hidden="true"
              />

              <span
                className={[
                  styles.packageCheck,
                  selected
                    ? styles.packageCheckSelected
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden="true"
              >
                {selected ? "✓" : ""}
              </span>

              <span
                className={
                  styles.packageInformation
                }
              >
                <span
                  className={
                    styles.packageTitleRow
                  }
                >
                  <strong>
                    {item.title}
                  </strong>

                  <span
                    className={
                      styles.packageEnergy
                    }
                    aria-hidden="true"
                  >
                    <EnergyIcon />
                  </span>

                  {item.popular ? (
                    <span
                      className={
                        styles.popularBadge
                      }
                    >
                      Popular
                    </span>
                  ) : null}
                </span>

                <small>
                  {description}
                </small>
              </span>

              <span
                className={
                  styles.packagePrice
                }
              >
                {formatUsd(item.price)}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}