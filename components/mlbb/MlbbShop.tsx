"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import {
  mlbbGame,
  mlbbPackages,
} from "@/data/games/mlbb";

import type {
  CheckoutErrors,
} from "@/types";

import {
  cleanNumericValue,
} from "@/lib/order";

import GameArtwork from "@/components/shared/GameArtwork";

import PackageList from "./PackageList";
import OrderPanel from "./OrderPanel";
import AbaQrModal from "./AbaQrModal";
import MlbbInformation from "./MlbbInformation";

import styles from "@/styles/MlbbShop.module.css";

export default function MlbbShop() {
  const [
    selectedPackageId,
    setSelectedPackageId,
  ] = useState(
    mlbbPackages[1]?.id ??
      mlbbPackages[0]?.id ??
      "",
  );

  const [userId, setUserId] =
    useState("");

  const [zoneId, setZoneId] =
    useState("");

  const [errors, setErrors] =
    useState<CheckoutErrors>({});

  const [
    paymentOpen,
    setPaymentOpen,
  ] = useState(false);

  const selectedPackage =
    useMemo(() => {
      return mlbbPackages.find(
        (item) =>
          item.id ===
          selectedPackageId,
      );
    }, [selectedPackageId]);

  const updateUserId = (
    value: string,
  ) => {
    setUserId(
      cleanNumericValue(value),
    );

    if (errors.userId) {
      setErrors((current) => ({
        ...current,
        userId: undefined,
      }));
    }
  };

  const updateZoneId = (
    value: string,
  ) => {
    setZoneId(
      cleanNumericValue(value),
    );

    if (errors.zoneId) {
      setErrors((current) => ({
        ...current,
        zoneId: undefined,
      }));
    }
  };

  const selectPackage = (
    packageId: string,
  ) => {
    setSelectedPackageId(packageId);

    if (errors.package) {
      setErrors((current) => ({
        ...current,
        package: undefined,
      }));
    }
  };

  const validateCheckout =
    (): boolean => {
      const nextErrors:
        CheckoutErrors = {};

      if (!selectedPackage) {
        nextErrors.package =
          "Please select a diamond package.";
      }

      if (userId.length < 5) {
        nextErrors.userId =
          "Enter a valid MLBB User ID with at least 5 digits.";
      }

      if (zoneId.length < 2) {
        nextErrors.zoneId =
          "Enter a valid MLBB Zone ID with at least 2 digits.";
      }

      setErrors(nextErrors);

      return (
        Object.keys(nextErrors)
          .length === 0
      );
    };

  const openPayment = () => {
    if (!validateCheckout()) {
      return;
    }

    setPaymentOpen(true);
  };

  const closePayment =
    useCallback(() => {
      setPaymentOpen(false);
    }, []);

  return (
    <main
      className={styles.mlbbPage}
    >
      <section
        className={
          styles.gameDetailHero
        }
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(9, 16, 23, 0.98), rgba(12, 40, 73, 0.72), rgba(55, 35, 99, 0.48)), url("${mlbbGame.banner}")`,
        }}
      >
        <span
          className={
            styles.heroLightOne
          }
          aria-hidden="true"
        />

        <span
          className={
            styles.heroLightTwo
          }
          aria-hidden="true"
        />

        <span
          className={
            styles.heroLightSweep
          }
          aria-hidden="true"
        />

        <div
          className={[
            "container",
            styles.gameDetailHeroLayout,
          ].join(" ")}
        >
          <div
            className={
              styles.heroArtworkWrapper
            }
          >
            <span
              className={
                styles.heroArtworkGlow
              }
              aria-hidden="true"
            />

            <GameArtwork
              game={mlbbGame}
              className={
                styles.gameDetailCover
              }
            />
          </div>

          <div
            className={
              styles.gameDetailContent
            }
          >
            <span
              className={
                styles.statusBadgeLive
              }
            >
              <span
                className={
                  styles.liveStatusDot
                }
                aria-hidden="true"
              />

              Available now
            </span>

            <h1>
              {mlbbGame.title}
            </h1>

            <p>
              {mlbbGame.subtitle}
            </p>

            <div
              className={
                styles.gameMeta
              }
            >
              <span
                className={
                  styles.gameMetaItem
                }
              >
                <strong>Region</strong>
                {mlbbGame.region}
              </span>

              <span
                className={
                  styles.gameMetaItem
                }
              >
                <strong>
                  Delivery
                </strong>
                Manual processing
              </span>

              <span
                className={
                  styles.gameMetaItem
                }
              >
                <strong>
                  Payment
                </strong>
                ABA KHQR
              </span>
            </div>

            <div
              className={
                styles.importantNotice
              }
            >
              <span
                className={
                  styles.noticeIcon
                }
                aria-hidden="true"
              >
                !
              </span>

              Check the User ID and Zone
              ID carefully. Orders sent
              to an incorrect account
              may not be recoverable.
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.shopSection
        }
      >
        <span
          className={
            styles.shopBackgroundGlow
          }
          aria-hidden="true"
        />

        <div
          className={[
            "container",
            styles.shopLayout,
          ].join(" ")}
        >
          <PackageList
            packages={mlbbPackages}
            selectedPackageId={
              selectedPackageId
            }
            onSelectPackage={
              selectPackage
            }
          />

          <OrderPanel
            selectedPackage={
              selectedPackage
            }
            userId={userId}
            zoneId={zoneId}
            errors={errors}
            onUserIdChange={
              updateUserId
            }
            onZoneIdChange={
              updateZoneId
            }
            onCheckout={
              openPayment
            }
          />
        </div>
      </section>

      <div
        className={[
          "container",
          styles.informationContainer,
        ].join(" ")}
      >
        <MlbbInformation />
      </div>

      <AbaQrModal
        open={paymentOpen}
        selectedPackage={
          selectedPackage
        }
        userId={userId}
        zoneId={zoneId}
        onClose={closePayment}
      />
    </main>
  );
}