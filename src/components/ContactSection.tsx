import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@itnex.co.id",
      href: "mailto:info@itnex.co.id",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 812-3456-7890",
      href: "tel:+6281234567890",
      gradient: "from-violet-500 to-purple-400",
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Jakarta, Indonesia",
      href: "#",
      gradient: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section id="kontak" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Kontak
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mari{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-1">
              Terhubung
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Siap membantu Anda dengan solusi teknologi terbaik. Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295081!2d106.6894306!3d-6.2293866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ITNEX Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative bg-card rounded-3xl border border-border p-8 lg:p-10 shadow-xl overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Kirim Pesan
                    </h3>
                    <p className="text-sm text-muted-foreground">Kami akan merespons dalam 24 jam</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Nama Lengkap</Label>
                      <Input
                        id="name"
                        placeholder="Masukkan nama Anda"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-background border-border h-12 rounded-xl focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Masukkan email Anda"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-background border-border h-12 rounded-xl focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Pesan</Label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-background border-border resize-none rounded-xl focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-base rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Mengirim...
                      </span>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
