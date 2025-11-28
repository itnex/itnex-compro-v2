import { Monitor, Server, Shield, Cloud, Smartphone, Laptop, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: Monitor,
    title: "Smart Display Systems",
    description: "Sistem display pintar untuk presentasi dan digital signage.",
    category: "Hardware",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Server,
    title: "Enterprise Server Solutions",
    description: "Solusi server enterprise untuk kebutuhan bisnis skala besar.",
    category: "Infrastructure",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Shield,
    title: "Cyber Security Suite",
    description: "Paket keamanan siber komprehensif untuk proteksi data.",
    category: "Security",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Cloud,
    title: "Cloud Integration Platform",
    description: "Platform integrasi cloud untuk transformasi digital.",
    category: "Cloud",
    gradient: "from-sky-500 to-blue-400",
  },
  {
    icon: Smartphone,
    title: "IoT Smart Devices",
    description: "Perangkat IoT untuk otomatisasi rumah dan industri.",
    category: "IoT",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Laptop,
    title: "Custom Software Development",
    description: "Pengembangan software custom sesuai kebutuhan bisnis.",
    category: "Software",
    gradient: "from-pink-500 to-rose-400",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-1">
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
              {/* Image/Icon area */}
              <div className={`relative h-52 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }} />
                
                <product.icon className="w-20 h-20 text-primary-foreground relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                
                {/* Floating circles */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-4 py-1.5 text-xs font-semibold text-primary-foreground bg-gradient-to-r ${product.gradient} rounded-full`}>
                    {product.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
