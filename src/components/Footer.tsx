import { Infinity } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Layanan", href: "#layanan" },
    { name: "Produk", href: "#produk" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <footer className="relative bg-secondary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="py-16 border-b border-secondary-foreground/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Logo & Description */}
            <div className="text-center lg:text-left max-w-md">
              <a href="#beranda" className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center">
                  <Infinity className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-3xl font-bold text-secondary-foreground">
                  ITNEX
                </span>
              </a>
              <p className="text-secondary-foreground/70 leading-relaxed">
                Infinity Tech Next Solution — Solusi teknologi tanpa batas untuk masa depan yang lebih baik.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-foreground/70 hover:text-secondary-foreground font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} ITNEX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
