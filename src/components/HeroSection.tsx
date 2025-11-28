import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/20" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl animate-float-slow" />
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-1/4 w-20 h-20 border border-primary/20 rounded-2xl rotate-12 animate-spin-slow" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-primary/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-primary/20 rounded-lg rotate-45 animate-bounce-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Infinity Tech Next Solution
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up animation-delay-100">
            Selamat Datang di{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-chart-1 to-chart-2">
              ITNEX
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Solusi Teknologi <span className="text-primary font-medium">Tanpa Batas</span> untuk Masa Depan Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
            <Button size="lg" asChild className="group text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
              <a href="#layanan">
                Jelajahi Layanan Kami
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 rounded-xl border-2 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1">
              <a href="#tentang">Pelajari Lebih Lanjut</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            {[
              { value: "10+", label: "Tahun Pengalaman" },
              { value: "500+", label: "Klien Puas" },
              { value: "1000+", label: "Proyek Selesai" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
