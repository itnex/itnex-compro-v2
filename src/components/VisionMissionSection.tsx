import { Eye, Target, Infinity } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Visi",
    content:
      "Menjadi perusahaan teknologi terdepan yang menghadirkan solusi elektronik dan digital tanpa batas, yang relevan, berkelanjutan, dan berdampak nyata.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Target,
    title: "Misi",
    content: (
      <ul className="space-y-3 text-left">
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-400 mt-2 flex-shrink-0" />
          <span>Memberikan layanan teknologi yang cepat, handal, dan tepat guna</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-400 mt-2 flex-shrink-0" />
          <span>Menciptakan solusi inovatif untuk kebutuhan personal dan bisnis</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-400 mt-2 flex-shrink-0" />
          <span>Membangun hubungan jangka panjang dengan pelanggan</span>
        </li>
      </ul>
    ),
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: Infinity,
    title: "Filosofi",
    content:
      "Logo infinity merepresentasikan inovasi tanpa batas, adaptif terhadap perkembangan zaman, dan komitmen kami pada kualitas. Kami percaya teknologi harus menjadi jembatan menuju masa depan yang lebih baik.",
    color: "from-emerald-500 to-teal-400",
  },
];

const VisionMissionSection = () => {
  return (
    <section id="tentang" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/20 rounded-2xl rotate-45 animate-float" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Visi, Misi &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-1">
              Filosofi
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mengenal lebih dekat nilai-nilai yang menjadi fondasi ITNEX dalam memberikan layanan terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                  <item.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-5 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="text-muted-foreground leading-relaxed">
                  {item.content}
                </div>

                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${item.color} opacity-5 rounded-full group-hover:opacity-10 group-hover:scale-150 transition-all duration-500`} />
              </div>

              {/* Number indicator */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold shadow-lg">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
