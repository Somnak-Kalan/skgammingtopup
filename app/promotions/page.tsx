import PromotionsPageClient from "@/components/promotions/PromotionsPageClient";

import {
  promotions,
} from "@/data/promotions";

export default function PromotionsPage() {
  return (
    <PromotionsPageClient
      promotions={promotions}
    />
  );
}