import type { Metadata } from "next";

import MlbbShop from "@/components/mlbb/MlbbShop";

export const metadata: Metadata = {
  title: "Mobile Legends Top-Up",
  description:
    "Purchase Mobile Legends diamonds using your User ID and Zone ID.",
};

export default function MlbbPage() {
  return <MlbbShop />;
}
