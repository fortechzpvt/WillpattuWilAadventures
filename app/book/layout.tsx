import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WhatsAppFloat />
      <Header />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
