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
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#beranda" className="text-2xl font-bold text-secondary-foreground">
              ITNEX
            </a>
            <p className="text-sm text-secondary-foreground/70 mt-2">
              Infinity Tech Next Solution
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10">
          <p className="text-center text-sm text-secondary-foreground/60">
            © {currentYear} ITNEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
