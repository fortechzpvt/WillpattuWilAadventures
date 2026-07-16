import Header        from "@/components/Header";
import HeroSection   from "@/components/HeroSection";
import WilpattuSection from "@/components/WilpattuSection";
import ToursSection  from "@/components/ToursSection";
import AboutSection  from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection    from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import SiteFooter    from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { faqs } from "@/lib/faqs";
import { reviews } from "@/lib/reviews";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${SITE_NAME} — Private Wilpattu Safari`,
  url: SITE_URL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: reviews.length,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <WhatsAppFloat />
      <Header />
      <main>
        <HeroSection />
        <WilpattuSection />
        <ToursSection />
        <AboutSection />
        <ReviewsSection />
        <FaqSection />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
}
