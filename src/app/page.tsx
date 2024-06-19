import Navbar from "@/components/Navbar";
import HeroSectionImageWithReviews from "./components/HeroSectionImageWithReviews";
import { ContentPictureWithLink, AboutSection, WhySection } from "./components/ContentSection";
import WhatsappFloating from "./components/WhatsappFloating";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Importers looking for premium supplier or manufacturers? Welcome to your one-stop shop for high-quality commodities sourced directly from Southeast Asia. We connect you with the region\'s finest producers, offering a variety of spices, coconut products, oils and so many more. Explore our commitment to ethical sourcing and sustainability, and discover how we can elevate your business with authentic Southeast Asian products.'
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSectionImageWithReviews />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <ContentPictureWithLink />
        <AboutSection />
        <WhySection />
      </main>
      <Footer />
      <WhatsappFloating />
    </>
  );
}
