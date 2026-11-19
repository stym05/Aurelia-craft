import type { Metadata } from "next";
import { CheckoutView } from "@/components/checkout-view";
export const metadata: Metadata = { title: "Review Checkout" };
export default function CheckoutPage() { return <CheckoutView/>; }
