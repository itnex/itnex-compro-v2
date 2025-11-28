import { Eye, Target, Infinity } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Visi",
    content:
      "Menjadi perusahaan teknologi terdepan yang menghadirkan solusi elektronik dan digital tanpa batas, yang relevan, berkelanjutan, dan berdampak nyata.",
  },
  {
    icon: Target,
    title: "Misi",
    content: (
      <ul className="space-y-2 text-left">
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
          <span>Memberikan layanan teknologi yang cepat, handal, dan tepat guna</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
          <span>Menciptakan solusi inovatif untuk kebutuhan personal dan bisnis</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
          <span>Membangun hubungan jangka panjang dengan pelanggan</span>
        </li>
      </ul>
    ),
  },
  {
    icon: Infinity,
    title: "Filosofi",
    content:
      "Logo infinity merepresentasikan inovasi tanpa batas, adaptif terhadap perkembangan zaman, dan komitmen kami pada kualitas. Kami percaya teknologi harus menjadi jembatan menuju masa depan yang lebih baik.",
  },
];

const VisionMissionSection = () => {
  return (
    <section id="tentang" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visi, Misi & Filosofi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dekat nilai-nilai yang menjadi fondasi ITNEX dalam memberikan layanan terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <div className="text-muted-foreground text-sm leading-relaxed">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
