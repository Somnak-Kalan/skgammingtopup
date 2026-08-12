"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { siteConfig } from "@/data/site";

import type {
  DiamondPackage,
} from "@/types";

import {
  formatUsd,
} from "@/lib/format";

import {
  buildOrderMessage,
  createOrderId,
} from "@/lib/order";

import styles from "@/styles/MlbbShop.module.css";

interface AbaQrModalProps {
  open: boolean;
  selectedPackage?: DiamondPackage;
  userId: string;
  zoneId: string;
  onClose: () => void;
}

type CopyState =
  | "idle"
  | "success"
  | "error";

async function copyText(
  value: string,
): Promise<void> {
  if (
    navigator.clipboard &&
    window.isSecureContext
  ) {
    await navigator.clipboard.writeText(
      value,
    );

    return;
  }

  const textarea =
    document.createElement("textarea");

  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";

  document.body.appendChild(
    textarea,
  );

  textarea.focus();
  textarea.select();

  const copied =
    document.execCommand("copy");

  document.body.removeChild(
    textarea,
  );

  if (!copied) {
    throw new Error(
      "Unable to copy text",
    );
  }
}

export default function AbaQrModal({
  open,
  selectedPackage,
  userId,
  zoneId,
  onClose,
}: AbaQrModalProps) {
  const closeButtonRef =
    useRef<HTMLButtonElement | null>(
      null,
    );

  const [
    qrFailed,
    setQrFailed,
  ] = useState(false);

  const [
    copyStatus,
    setCopyStatus,
  ] = useState("");

  const [
    copyState,
    setCopyState,
  ] =
    useState<CopyState>("idle");

  const orderId = useMemo(() => {
    return open
      ? createOrderId()
      : "";
  }, [open]);

  const orderMessage =
    useMemo(() => {
      if (
        !selectedPackage ||
        !orderId
      ) {
        return "";
      }

      return buildOrderMessage({
        orderId,
        packageTitle:
          selectedPackage.title,
        price:
          selectedPackage.price,
        userId,
        zoneId,
      });
    }, [
      orderId,
      selectedPackage,
      userId,
      zoneId,
    ]);

  useEffect(() => {
    if (!open) {
      return;
    }

    setQrFailed(false);
    setCopyStatus("");
    setCopyState("idle");

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const focusTimer =
      window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      window.clearTimeout(
        focusTimer,
      );

      document.body.style.overflow =
        originalOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [open, onClose]);

  if (
    !open ||
    !selectedPackage
  ) {
    return null;
  }

  const telegramUsername =
    siteConfig.telegramUsername.replace(
      /^@/,
      "",
    );

  const telegramUrl =
    `https://t.me/${telegramUsername}`;

  const copyOrderDetails =
    async (): Promise<void> => {
      if (!orderMessage) {
        return;
      }

      try {
        await copyText(orderMessage);

        setCopyState("success");

        setCopyStatus(
          "Order details copied.",
        );
      } catch {
        setCopyState("error");

        setCopyStatus(
          "Copy failed. Select and copy the order details manually.",
        );
      }
    };

  return (
    <div
      className={
        styles.paymentModalOverlay
      }
      role="presentation"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <section
        className={
          styles.paymentModal
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-modal-title"
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <span
          className={
            styles.modalAnimatedBorder
          }
          aria-hidden="true"
        />

        <span
          className={
            styles.modalBackgroundGlow
          }
          aria-hidden="true"
        />

        <button
          ref={closeButtonRef}
          type="button"
          className={
            styles.modalCloseButton
          }
          aria-label="Close payment"
          onClick={onClose}
        >
          ×
        </button>

        <div
          className={
            styles.paymentModalHeader
          }
        >
          <span
            className={
              styles.panelStep
            }
          >
            ABA KHQR
          </span>

          <h2
            id="payment-modal-title"
          >
            Scan and pay
          </h2>

          <p>
            Pay the exact amount shown
            below, then send your
            receipt through Telegram.
          </p>
        </div>

        <div
          className={
            styles.paymentModalGrid
          }
        >
          <div
            className={
              styles.qrSection
            }
          >
            <div
              className={
                styles.qrFrame
              }
            >
              <span
                className={
                  styles.qrCornerOne
                }
                aria-hidden="true"
              />

              <span
                className={
                  styles.qrCornerTwo
                }
                aria-hidden="true"
              />

              <span
                className={
                  styles.qrCornerThree
                }
                aria-hidden="true"
              />

              <span
                className={
                  styles.qrCornerFour
                }
                aria-hidden="true"
              />

              {!qrFailed ? (
                <>
                  <img
                    src={
                      siteConfig.abaQrImage
                    }
                    alt="ABA KHQR merchant payment code"
                    className={
                      styles.abaQrImage
                    }
                    onError={() => {
                      setQrFailed(true);
                    }}
                  />

                  <span
                    className={
                      styles.qrScanLine
                    }
                    aria-hidden="true"
                  />
                </>
              ) : (
                <div
                  className={
                    styles.qrPlaceholder
                  }
                >
                  <strong>
                    ABA KHQR image
                    missing
                  </strong>

                  <span>
                    Add your QR image
                    to:
                  </span>

                  <code>
                    public/images/payment/aba-khqr.png
                  </code>
                </div>
              )}
            </div>

            <span
              className={
                styles.qrMerchantNote
              }
            >
              Confirm the merchant name
              before paying.
            </span>
          </div>

          <div
            className={
              styles.paymentOrderDetails
            }
          >
            <div
              className={
                styles.paymentTotal
              }
            >
              <span>
                Amount to pay
              </span>

              <strong>
                {formatUsd(
                  selectedPackage.price,
                )}
              </strong>
            </div>

            <div
              className={
                styles.paymentDetailRow
              }
            >
              <span>Order ID</span>
              <strong>{orderId}</strong>
            </div>

            <div
              className={
                styles.paymentDetailRow
              }
            >
              <span>Package</span>

              <strong>
                {selectedPackage.title}
              </strong>
            </div>

            <div
              className={
                styles.paymentDetailRow
              }
            >
              <span>User ID</span>
              <strong>{userId}</strong>
            </div>

            <div
              className={
                styles.paymentDetailRow
              }
            >
              <span>Zone ID</span>
              <strong>{zoneId}</strong>
            </div>

            <div
              className={
                styles.manualPaymentWarning
              }
            >
              This static website cannot
              confirm the payment
              automatically. You must
              verify the transaction
              manually in your ABA
              account.
            </div>

            <button
              type="button"
              className={[
                styles.secondaryButton,
                styles.fullWidthButton,
              ].join(" ")}
              onClick={
                copyOrderDetails
              }
            >
              <span
                className={
                  styles.buttonShine
                }
                aria-hidden="true"
              />

              Copy order details
            </button>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className={
                styles.telegramButton
              }
            >
              <span
                className={
                  styles.buttonShine
                }
                aria-hidden="true"
              />

              Open Telegram and send
              receipt
            </a>

            <div
              className={[
                styles.copyStatus,
                copyState ===
                "success"
                  ? styles.copyStatusSuccess
                  : "",
                copyState === "error"
                  ? styles.copyStatusError
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-live="polite"
            >
              {copyStatus}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}