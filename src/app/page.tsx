import { Header } from "@/components/header";
import { ProductGrid } from "@/components/product-grid";
import { TrustBadges } from "@/components/trust-badges";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <ProductGrid />
        <TrustBadges />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
