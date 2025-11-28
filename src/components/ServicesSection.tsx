import { Wrench, Network, Cpu, Users, Settings } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Servis & Instalasi Elektronik Profesional",
    description:
      "Layanan perbaikan dan instalasi perangkat elektronik dengan standar tinggi dan garansi kualitas.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Network,
    title: "Sistem Jaringan & Infrastruktur Teknologi",
    description:
      "Perancangan dan implementasi jaringan komputer serta infrastruktur IT yang handal.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Cpu,
    title: "Pengembangan Sistem Otomatisasi & Smart Technology",
    description:
      "Solusi otomatisasi dan teknologi pintar untuk meningkatkan efisiensi operasional.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Users,
    title: "Konsultasi & Integrasi Solusi IT untuk Bisnis",
    description:
      "Konsultasi strategis dan integrasi sistem IT yang disesuaikan dengan kebutuhan bisnis Anda.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Settings,
    title: "Maintenance & Upgrade Teknologi Berkala",
    description:
      "Perawatan rutin dan upgrade sistem untuk memastikan performa optimal teknologi Anda.",
    gradient: "from-pink-500 to-rose-400",
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Layanan Utama{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-1">
              ITNEX
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai layanan teknologi yang komprehensif untuk memenuhi kebutuhan personal dan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-border rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
