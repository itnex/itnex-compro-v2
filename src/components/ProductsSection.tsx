import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Smart Display Systems",
    description: "Tampilan digital interaktif untuk presentasi yang memukau dan signage profesional.",
    benefit: "Tingkatkan engagement",
    category: "Hardware",
    gradient: "from-blue-500 to-cyan-400",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Enterprise Server Solutions",
    description: "Server berperforma tinggi untuk bisnis yang membutuhkan reliability maksimal.",
    benefit: "99.9% uptime",
    category: "Infrastructure",
    gradient: "from-violet-500 to-purple-400",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Cyber Security Suite",
    description: "Lindungi data bisnis Anda dari ancaman siber dengan proteksi berlapis.",
    benefit: "Data aman 100%",
    category: "Security",
    gradient: "from-emerald-500 to-teal-400",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Cloud Integration Platform",
    description: "Akses data Anda kapan saja, dari mana saja dengan sistem cloud terintegrasi.",
    benefit: "Akses anywhere",
    category: "Cloud",
    gradient: "from-sky-500 to-blue-400",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "IoT Smart Devices",
    description: "Otomatisasi cerdas untuk rumah dan industri yang meningkatkan efisiensi.",
    benefit: "Hemat 30% energi",
    category: "IoT",
    gradient: "from-orange-500 to-amber-400",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Custom Software Development",
    description: "Aplikasi khusus yang dibuat sesuai alur bisnis unik Anda.",
    benefit: "Sesuai kebutuhan",
    category: "Software",
    gradient: "from-pink-500 to-rose-400",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&q=80",
  },
];

const ProductsSection = () => {
  return (
    <section id="produk" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Produk & Solusi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Produk{" "}
            <span className="text-primary">
              Unggulan
            </span>{" "}
            Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Rangkaian produk dan solusi teknologi terkini yang dirancang untuk memenuhi berbagai kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image area */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 mix-blend-overlay`} />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r ${product.gradient} rounded-full`}>
                    {product.category}
                  </span>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {product.benefit}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild 
                  className="w-full rounded-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <a href="#kontak">Minta Penawaran</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
