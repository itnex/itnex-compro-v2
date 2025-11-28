import { Wrench, Network, Cpu, Users, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Servis & Instalasi Elektronik Profesional",
    description:
      "Layanan perbaikan dan instalasi perangkat elektronik dengan standar tinggi dan garansi kualitas.",
  },
  {
    icon: Network,
    title: "Sistem Jaringan & Infrastruktur Teknologi",
    description:
      "Perancangan dan implementasi jaringan komputer serta infrastruktur IT yang handal.",
  },
  {
    icon: Cpu,
    title: "Pengembangan Sistem Otomatisasi & Smart Technology",
    description:
      "Solusi otomatisasi dan teknologi pintar untuk meningkatkan efisiensi operasional.",
  },
  {
    icon: Users,
    title: "Konsultasi & Integrasi Solusi IT untuk Bisnis",
    description:
      "Konsultasi strategis dan integrasi sistem IT yang disesuaikan dengan kebutuhan bisnis Anda.",
  },
  {
    icon: Settings,
    title: "Maintenance & Upgrade Teknologi Berkala",
    description:
      "Perawatan rutin dan upgrade sistem untuk memastikan performa optimal teknologi Anda.",
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Layanan Utama ITNEX
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan teknologi yang komprehensif untuk memenuhi kebutuhan personal dan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-background border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
