import type { OrderMessageInput } from "@/types";
import { formatUsd } from "./format";

export function createOrderId(): string {
  const timePart = Date.now().toString().slice(-8);
  const randomPart = Math.floor(Math.random() * 900 + 100);

  return `MLBB-${timePart}-${randomPart}`;
}

export function buildOrderMessage({
  orderId,
  packageTitle,
  price,
  userId,
  zoneId,
}: OrderMessageInput): string {
  return [
    "NEW MLBB DIAMOND ORDER",
    "",
    `Order ID: ${orderId}`,
    `Package: ${packageTitle}`,
    `Amount: ${formatUsd(price)}`,
    `MLBB User ID: ${userId}`,
    `MLBB Zone ID: ${zoneId}`,
    `Payment method: ABA KHQR`,
    "",
    "I have completed the payment.",
    "I will attach my payment receipt screenshot.",
  ].join("\n");
}

export function cleanNumericValue(value: string): string {
  return value.replace(/\D/g, "");
}