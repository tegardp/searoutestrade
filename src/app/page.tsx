import Navbar from "@/components/Navbar";
import HeroSectionImageWithReviews from "./components/HeroSectionImageWithReviews";
import { ContentPictureWithLink, AboutSection, WhySection } from "./components/ContentSection";
import WhatsappFloating from "./components/WhatsappFloating";
import Footer from "./components/Footer";

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
