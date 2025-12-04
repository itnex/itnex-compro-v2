import { Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

const stats = [
  { value: "10+", label: "Tahun Pengalaman", icon: Clock },
  { value: "500+", label: "Klien Puas", icon: Users },
  { value: "1000+", label: "Proyek Selesai", icon: CheckCircle },
  { value: "99%", label: "Tingkat Kepuasan", icon: Award },
];

const trustPoints = [
  "Teknisi bersertifikat & berpengalaman",
  "Garansi layanan hingga 1 tahun",
  "Support 24/7 untuk klien prioritas",
  "Harga transparan tanpa biaya tersembunyi",
];

const clientLogos = [
  { name: "Company 1", initial: "PT" },
  { name: "Company 2", initial: "CV" },
  { name: "Company 3", initial: "UD" },
  { name: "Company 4", initial: "TB" },
  { name: "Company 5", initial: "PD" },
  { name: "Company 6", initial: "FA" },
];

const WhyITNEX = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full">
            Mengapa ITNEX?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Partner Teknologi yang{" "}
            <span className="text-primary">Anda Percaya</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Lebih dari sekedar vendor IT — kami adalah mitra yang memahami kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Points & Client Logos */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Trust Points */}
          <div className="bg-background rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-border">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Jaminan Kualitas</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Komitmen kami untuk Anda</p>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Logos */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Dipercaya oleh Berbagai Perusahaan</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Dari startup hingga enterprise, kami siap melayani.</p>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border flex items-center justify-center h-16 sm:h-20 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <span className="text-base sm:text-lg font-bold text-secondary-foreground">{client.initial}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 text-center">
              + ratusan klien lainnya di seluruh Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyITNEX;

