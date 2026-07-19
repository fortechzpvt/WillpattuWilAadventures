import { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import BookPageContent from "@/components/BookPageContent";

export const metadata: Metadata = {
  title: "Book Your Wilpattu Safari — Day Safaris, Bungalow Stays, Birding",
  description:
    "Book your private Wilpattu safari: half-day, full-day, overnight DWC bungalow stays, or a specialist birding expedition. Direct WhatsApp booking, no middlemen.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book Your Wilpattu Safari",
    description:
      "Private half-day, full-day, overnight bungalow, and birding safari packages in Wilpattu National Park — booked directly with your guide.",
    url: "/book",
  },
};

export default function BookPage() {
  return (
    <Suspense fallback={null}>
      <Header />
      <BookPageContent />
    </Suspense>
  );
}
