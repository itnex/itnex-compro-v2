import { MessageSquare, Search, FileText, Wrench, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Konsultasi & Survey",
    description: "Anda ceritakan kebutuhan, kami datang survey lokasi untuk analisis mendalam.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    icon: Search,
    title: "Analisa & Rekomendasi",
    description: "Tim ahli kami merancang solusi terbaik sesuai kebutuhan dan budget Anda.",
    color: "from-violet-500 to-purple-400",
  },
  {
    number: "03",
    icon: FileText,
    title: "Penawaran & Timeline",
    description: "Anda mendapatkan proposal lengkap dengan harga transparan dan jadwal pengerjaan.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Eksekusi & Monitoring",
    description: "Pengerjaan profesional dengan update progres berkala hingga selesai.",
    color: "from-orange-500 to-amber-400",
  },
  {
    number: "05",
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Garansi layanan dan support berkelanjutan untuk memastikan sistem optimal.",
    color: "from-pink-500 to-rose-400",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full">
            Cara Kerja
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Bagaimana <span className="text-primary">ITNEX</span> Bekerja
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Proses yang transparan dan terstruktur untuk hasil yang maksimal.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step card */}
                <div className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 h-full">
                  {/* Number badge */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div className="text-4xl sm:text-5xl font-bold text-border/50 mb-2 sm:mb-3">{step.number}</div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2 sm:my-4">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary/30 rotate-90 sm:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-16">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
            Siap memulai? Konsultasi pertama <span className="text-primary font-semibold">GRATIS!</span>
          </p>
          <Button size="lg" asChild className="group text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
            <a href="#kontak">
              Mulai Konsultasi
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;

