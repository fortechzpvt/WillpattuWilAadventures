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

export default function HomePage() {
  return (
    <>
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
