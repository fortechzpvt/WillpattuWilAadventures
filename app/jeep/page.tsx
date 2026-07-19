import type { Metadata } from "next";
import Header from "@/components/Header";
import JeepPageContent from "@/components/JeepPageContent";

export const metadata: Metadata = {
  title: "Safari Jeep | Custom 6-Seater Toyota Hilux 4x4 — Wilpattu",
  description:
    "See the custom 6-seat Toyota Hilux 4x4 safari jeep used on every Wilpattu Wild Adventures tour: elevated stadium seating, 360° open-sided viewing, off-road tires, recovery winch.",
  alternates: { canonical: "/jeep" },
  openGraph: {
    title: "Safari Jeep Specifications — Wilpattu Wild Adventures",
    description:
      "Custom 6-seat Toyota Hilux 4x4 safari jeep with elevated stadium seating and 360° open-sided viewing, used on every Wilpattu Wild Adventures tour.",
    url: "/jeep",
  },
};

export default function JeepPage() {
  return (
    <>
      <Header />
      <JeepPageContent />
    </>
  );
}
