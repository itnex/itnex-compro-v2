import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "CEO, PT Maju Bersama",
    message: "ITNEX memberikan solusi yang sangat membantu bisnis kami. Tim yang profesional dan responsif. Sangat puas dengan hasilnya!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Siti Nurhaliza",
    role: "Manager IT, Retail Store",
    message: "Sistem POS yang dibuat ITNEX sangat user-friendly dan stabil. Support yang diberikan juga sangat baik.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Budi Santoso",
    role: "Owner, CV Teknologi Nusantara",
    message: "Kolaborasi yang luar biasa! ITNEX memahami kebutuhan kami dengan baik dan memberikan solusi yang tepat sasaran.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Diana Putri",
    role: "Direktur, Startup Fintech",
    message: "Pengembangan aplikasi mobile bersama ITNEX berjalan lancar. Hasilnya melebihi ekspektasi kami!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Hendro Wijaya",
    role: "CTO, E-commerce Platform",
    message: "Tim ITNEX sangat kompeten dalam menangani infrastruktur IT kami. Uptime server meningkat drastis sejak bermitra dengan mereka.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full">
            Testimonial
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Apa Kata <span className="text-primary">Klien Kami</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative bg-background rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-8 md:p-12 overflow-hidden shadow-xl">
            {/* Quote decoration */}
            <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-16 sm:h-16 text-primary/10" />
            
            {/* Content */}
            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 absolute inset-0 translate-x-8"
                  }`}
                >
                  {index === currentTestimonial && (
                    <>
                      {/* Stars */}
                      <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      
                      {/* Message */}
                      <p className="text-sm sm:text-lg md:text-2xl text-foreground text-center leading-relaxed mb-6 sm:mb-8 font-medium px-2">
                        "{testimonial.message}"
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center justify-center gap-3 sm:gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 sm:border-4 border-primary/20"
                        />
                        <div className="text-left">
                          <p className="font-bold text-foreground text-sm sm:text-lg">{testimonial.name}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-2xl" />
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? "bg-primary w-6 sm:w-10" 
                    : "bg-border w-2 sm:w-3 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

