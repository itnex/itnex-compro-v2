import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyITNEX from "@/components/WhyITNEX";
import ServicesSection from "@/components/ServicesSection";
import HowWeWork from "@/components/HowWeWork";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ProductsSection from "@/components/ProductsSection";
import Testimonials from "@/components/Testimonials";
import VisionMissionSection from "@/components/VisionMissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. Hero - Opening yang kuat */}
        <HeroSection />
        
        {/* 2. Why ITNEX - Trust & Credibility */}
        <WhyITNEX />
        
        {/* 3. Services - Layanan Utama */}
        <ServicesSection />
        
        {/* 4. How We Work - SOP Pekerjaan */}
        <HowWeWork />
        
        {/* 5. Portfolio - Case Study */}
        <ProjectsShowcase />
        
        {/* 6. Products - Katalog Produk */}
        <ProductsSection />
        
        {/* 7. Testimonials - Social Proof */}
        <Testimonials />
        
        {/* 8. About - Visi & Misi */}
        <VisionMissionSection />
        
        {/* 9. Contact - CTA Besar */}
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
