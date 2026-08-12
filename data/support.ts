import type {
  StaticImageData,
} from "next/image";

import ABAQR from "@/public/images/Banks/qr/ABAQR.png";
import ACQR from "@/public/images/Banks/qr/ACQR.png";
import WINGQR from "@/public/images/Banks/qr/WINGQR.png";

import ABALogo from "@/public/images/Banks/aba.png";
import ACLogo from "@/public/images/Banks/ac.png";
import WingLogo from "@/public/images/Banks/wing.jpeg";

export type SupportPaymentId =
  | "aba"
  | "acleda"
  | "wing";

export interface SupportPayment {
  id: SupportPaymentId;
  name: string;
  shortName: string;

  // Bank logo
  image: StaticImageData;

  accountName: string;
  accountNumber: string;
  currency: string;

  // Payment QR image
  qrImage: StaticImageData;

  description: string;
}

export const supportPayments: SupportPayment[] =
  [
    {
      id: "aba",
      name: "ABA Bank",
      shortName: "ABA",
      image: ABALogo,
      accountName: "KALAN SOMNAK",
      accountNumber: "010 637 801",
      currency: "USD / KHR",
      qrImage: ABAQR,
      description:
        "Scan with ABA Mobile or any KHQR-supported banking application.",
    },
    {
      id: "acleda",
      name: "ACLEDA Bank",
      shortName: "AC",
      image: ACLogo,
      accountName: "KALAN SOMNAK",
      accountNumber: "3473 04640139 19",
      currency: "USD / KHR",
      qrImage: ACQR,
      description:
        "Scan with ACLEDA Mobile or another KHQR-supported application.",
    },
    {
      id: "wing",
      name: "Wing Bank",
      shortName: "WING",
      image: WingLogo,
      accountName: "KALAN SOMNAK",
      accountNumber: "100 539 491",
      currency: "USD / KHR",
      qrImage: WINGQR,
      description:
        "Scan with Wing Bank or another KHQR-supported application.",
    },
  ];