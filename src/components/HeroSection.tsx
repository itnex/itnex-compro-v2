import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-chart-1/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-chart-2/25 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,136,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,136,204,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated particles */}
        <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-primary/60 rounded-full animate-particle" />
        <div className="absolute top-1/3 left-[25%] w-1.5 h-1.5 bg-chart-1/60 rounded-full animate-particle animation-delay-1000" />
        <div className="absolute top-1/2 left-[15%] w-1 h-1 bg-primary/40 rounded-full animate-particle animation-delay-3000" />
        <div className="absolute top-2/3 left-[30%] w-2 h-2 bg-chart-2/50 rounded-full animate-particle animation-delay-2000" />
        <div className="absolute top-1/4 right-[20%] w-1.5 h-1.5 bg-primary/50 rounded-full animate-particle animation-delay-4000" />
        <div className="absolute top-1/2 right-[10%] w-2 h-2 bg-chart-1/40 rounded-full animate-particle animation-delay-1500" />
        <div className="absolute top-3/4 right-[25%] w-1 h-1 bg-primary/60 rounded-full animate-particle animation-delay-2500" />
        <div className="absolute top-[40%] right-[35%] w-1.5 h-1.5 bg-chart-2/60 rounded-full animate-particle animation-delay-3500" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl animate-float-slow" />
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-1/4 w-20 h-20 border border-primary/20 rounded-2xl rotate-12 animate-spin-slow" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-primary/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-primary/20 rounded-lg rotate-45 animate-bounce-slow" />
        
        {/* Floating lines */}
        <div className="absolute top-[20%] left-[5%] w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-45 animate-float-line" />
        <div className="absolute top-[60%] right-[8%] w-24 h-[1px] bg-gradient-to-r from-transparent via-chart-1/30 to-transparent -rotate-12 animate-float-line animation-delay-2000" />
        <div className="absolute bottom-[30%] left-[20%] w-20 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-12 animate-float-line animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Mitra Teknologi Terpercaya Anda
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight animate-slide-up animation-delay-100">
            Solusi Teknologi{" "}
            <span className="text-primary">Tanpa Batas</span>{" "}
            untuk Bisnis Anda
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200 px-2">
            <span className="font-semibold text-foreground">Automasi, Jaringan, Software, Security</span> — semuanya dalam satu tempat.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-200 px-2">
            Anda mendapatkan sistem yang handal, dipasang oleh teknisi berpengalaman dengan garansi kualitas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up animation-delay-300 px-4 sm:px-0">
            <Button size="lg" asChild className="group text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
              <a href="#kontak">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-xl border-2 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1">
              <a href="#layanan">Lihat Layanan</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 sm:mt-12 animate-slide-up animation-delay-400">
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Dipercaya oleh 500+ bisnis di Indonesia</p>
            <div className="flex justify-center items-center gap-1 sm:gap-2 flex-wrap">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-foreground">4.9/5 Rating Klien</span>
            </div>
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
