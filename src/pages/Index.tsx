import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <VisionMissionSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
