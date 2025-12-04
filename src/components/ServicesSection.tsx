import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Servis & Instalasi Elektronik",
    description:
      "Perangkat elektronik Anda kembali berfungsi optimal dengan garansi hingga 1 tahun.",
    benefit: "Hemat biaya ganti baru",
    gradient: "from-blue-500 to-cyan-400",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Jaringan & Infrastruktur IT",
    description:
      "Internet kantor 5x lebih cepat dan stabil, tanpa gangguan yang menghambat produktivitas.",
    benefit: "Produktivitas meningkat",
    gradient: "from-violet-500 to-purple-400",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Otomasi & Smart Office",
    description:
      "Hemat listrik hingga 30% dengan sistem pintar yang bekerja otomatis untuk Anda.",
    benefit: "Hemat biaya operasional",
    gradient: "from-emerald-500 to-teal-400",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Software Development",
    description:
      "Aplikasi custom yang mempercepat proses bisnis Anda hingga 10x lebih efisien.",
    benefit: "Proses bisnis lebih cepat",
    gradient: "from-orange-500 to-amber-400",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Maintenance & Support",
    description:
      "Sistem Anda selalu dalam kondisi prima dengan monitoring 24/7 dan respon cepat.",
    benefit: "Downtime minimal",
    gradient: "from-pink-500 to-rose-400",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=400&fit=crop&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-16 sm:py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full">
            Layanan Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Layanan Utama{" "}
            <span className="text-primary">
              ITNEX
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Kami menyediakan berbagai layanan teknologi yang komprehensif untuk memenuhi kebutuhan personal dan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl sm:rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 mix-blend-overlay`} />
                
                {/* Benefit badge */}
                <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r ${service.gradient} shadow-md`}>
                  <span className="text-[10px] sm:text-xs font-semibold text-white">{service.benefit}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  {service.description}
                </p>
                
                {/* CTA */}
                <a 
                  href="#kontak" 
                  className="inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Pelajari Selengkapnya
                  <ArrowRight className="ml-1 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
