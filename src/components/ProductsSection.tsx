import { Monitor, Server, Shield, Cloud, Smartphone, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    icon: Monitor,
    title: "Smart Display Systems",
    description: "Sistem display pintar untuk presentasi dan digital signage.",
    category: "Hardware",
  },
  {
    icon: Server,
    title: "Enterprise Server Solutions",
    description: "Solusi server enterprise untuk kebutuhan bisnis skala besar.",
    category: "Infrastructure",
  },
  {
    icon: Shield,
    title: "Cyber Security Suite",
    description: "Paket keamanan siber komprehensif untuk proteksi data.",
    category: "Security",
  },
  {
    icon: Cloud,
    title: "Cloud Integration Platform",
    description: "Platform integrasi cloud untuk transformasi digital.",
    category: "Cloud",
  },
  {
    icon: Smartphone,
    title: "IoT Smart Devices",
    description: "Perangkat IoT untuk otomatisasi rumah dan industri.",
    category: "IoT",
  },
  {
    icon: Laptop,
    title: "Custom Software Development",
    description: "Pengembangan software custom sesuai kebutuhan bisnis.",
    category: "Software",
  },
];

const ProductsSection = () => {
  return (
    <section id="produk" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Produk & Solusi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produk Unggulan Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rangkaian produk dan solusi teknologi terkini yang dirancang untuk memenuhi berbagai kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group bg-background border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center group-hover:from-primary/20 transition-all duration-300">
                  <product.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
