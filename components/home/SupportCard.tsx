"use client";

import Image from "next/image";

import {
  useMemo,
  useState,
} from "react";

import {
  supportPayments,
} from "@/data/support";

import type {
  SupportPaymentId,
} from "@/data/support";

import styles from "./SupportCard.module.css";

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
        d="M5 12.5L9.3 17L19 7"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.8 4.9C18.8 2.9 15.6 2.9 13.6 4.9L12 6.5L10.4 4.9C8.4 2.9 5.2 2.9 3.2 4.9C1.2 6.9 1.2 10.1 3.2 12.1L12 20.9L20.8 12.1C22.8 10.1 22.8 6.9 20.8 4.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SupportCard() {
  const [
    selectedPaymentId,
    setSelectedPaymentId,
  ] = useState<SupportPaymentId>(
    supportPayments[0].id,
  );

  const [
    copiedField,
    setCopiedField,
  ] = useState<string>("");

  const selectedPayment = useMemo(() => {
    return (
      supportPayments.find(
        (payment) =>
          payment.id ===
          selectedPaymentId,
      ) ?? supportPayments[0]
    );
  }, [selectedPaymentId]);

  const copyText = async (
    value: string,
    field: string,
  ) => {
    try {
      await navigator.clipboard.writeText(
        value,
      );

      setCopiedField(field);

      window.setTimeout(() => {
        setCopiedField("");
      }, 1800);
    } catch (error) {
      console.error(
        "Unable to copy payment information:",
        error,
      );
    }
  };

  return (
    <section
      className={
        styles.supportSection
      }
    >
      <div
        className={styles.supportCard}
      >
        <div
          className={
            styles.supportIntroduction
          }
        >
          <span
            className={
              styles.supportEyebrow
            }
          >
            Support my work
          </span>

          <div
            className={
              styles.supportTitleRow
            }
          >
            <span
              className={
                styles.heartIcon
              }
            >
              <HeartIcon />
            </span>

            <h2>
              Support SK Gaming Top-Up
            </h2>
          </div>

          <p
            className={
              styles.supportDescription
            }
          >
            If you enjoy my content or
            would like to support this
            project, you can send any
            amount using ABA, ACLEDA, or
            Wing. Your support helps me
            improve the website and create
            more gaming content.
          </p>

          <div
            className={
              styles.paymentMethods
            }
          >
            {supportPayments.map(
              (payment) => {
                const isActive =
                  payment.id ===
                  selectedPaymentId;

                const paymentClassName =
                  `paymentMethod${payment.id
                    .charAt(0)
                    .toUpperCase()}${payment.id.slice(
                    1,
                  )}`;

                return (
                  <button
                    key={payment.id}
                    type="button"
                    className={[
                      styles.paymentMethod,
                      styles[
                        paymentClassName
                      ],
                      isActive
                        ? styles.paymentMethodActive
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-pressed={
                      isActive
                    }
                    onClick={() => {
                      setSelectedPaymentId(
                        payment.id,
                      );

                      setCopiedField("");
                    }}
                  >
                    <span
                      className={
                        styles.paymentLogo
                      }
                    >
                      <Image
                        src={payment.image}
                        alt={`${payment.name} logo`}
                        width={48}
                        height={48}
                        className={
                          styles.paymentLogoImage
                        }
                      />
                    </span>

                    <span
                      className={
                        styles.paymentDetails
                      }
                    >
                      <strong>
                        {payment.name}
                      </strong>

                      <small>
                        {payment.currency}
                      </small>
                    </span>

                    {isActive && (
                      <span
                        className={
                          styles.selectedCheck
                        }
                      >
                        <CheckIcon />
                      </span>
                    )}
                  </button>
                );
              },
            )}
          </div>

          <div
            className={
              styles.accountInformation
            }
          >
            <div
              className={
                styles.accountRow
              }
            >
              <span>Account name</span>

              <div>
                <strong>
                  {
                    selectedPayment.accountName
                  }
                </strong>

                <button
                  type="button"
                  aria-label="Copy account name"
                  onClick={() =>
                    copyText(
                      selectedPayment.accountName,
                      "account-name",
                    )
                  }
                >
                  {copiedField ===
                  "account-name" ? (
                    <CheckIcon />
                  ) : (
                    <CopyIcon />
                  )}
                </button>
              </div>
            </div>

            <div
              className={
                styles.accountRow
              }
            >
              <span>
                Account number
              </span>

              <div>
                <strong>
                  {
                    selectedPayment.accountNumber
                  }
                </strong>

                <button
                  type="button"
                  aria-label="Copy account number"
                  onClick={() =>
                    copyText(
                      selectedPayment.accountNumber,
                      "account-number",
                    )
                  }
                >
                  {copiedField ===
                  "account-number" ? (
                    <CheckIcon />
                  ) : (
                    <CopyIcon />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            styles.qrCodeSection
          }
        >
          <div
            className={
              styles.qrHeader
            }
          >
            <div>
              <span>
                Scan to support
              </span>

              <strong>
                {selectedPayment.name}
              </strong>
            </div>

            <span
              className={[
                styles.qrBankBadge,
                styles[
                  `qrBankBadge${selectedPayment.id
                    .charAt(0)
                    .toUpperCase()}${selectedPayment.id.slice(
                    1,
                  )}`
                ],
              ].join(" ")}
            >
              <Image
                src={
                  selectedPayment.image
                }
                alt={`${selectedPayment.name} logo`}
                width={30}
                height={30}
                className={
                  styles.qrBankBadgeImage
                }
              />

              <span>
                {
                  selectedPayment.shortName
                }
              </span>
            </span>
          </div>

          <div
            className={
              styles.qrImageWrapper
            }
          >
            <Image
              key={selectedPayment.id}
              src={
                selectedPayment.qrImage
              }
              alt={`${selectedPayment.name} payment QR code`}
              width={420}
              height={420}
              className={
                styles.qrImage
              }
              priority
            />

            <span
              className={
                styles.qrCornerTopLeft
              }
            />

            <span
              className={
                styles.qrCornerTopRight
              }
            />

            <span
              className={
                styles.qrCornerBottomLeft
              }
            />

            <span
              className={
                styles.qrCornerBottomRight
              }
            />
          </div>

          <p
            className={
              styles.qrDescription
            }
          >
            {
              selectedPayment.description
            }
          </p>

          <div
            className={
              styles.secureNotice
            }
          >
            <span aria-hidden="true">
              ✓
            </span>

            <p>
              Please verify the account
              name before confirming your
              payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}