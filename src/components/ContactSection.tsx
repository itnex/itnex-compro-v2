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
      value: "infinitytechnextsolution@gmail.com",
      href: "mailto:infinitytechnextsolution@gmail.com",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 895-3608-38458",
      href: "tel:+62895360838458",
      gradient: "from-violet-500 to-purple-400",
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Tangerang Selatan, Indonesia",
      href: "#",
      gradient: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section id="kontak" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full">
            Kontak
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Mari{" "}
            <span className="text-primary">
              Terhubung
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Siap membantu Anda dengan solusi teknologi terbaik. Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">{item.label}</p>
                    <p className="text-sm sm:text-base text-foreground font-semibold group-hover:text-primary transition-colors duration-200 truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.259508751018!2d106.6566583747533!3d-6.238701361577383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59945e69fb3%3A0x5e7aff06e79fe417!2sTangerang%20Selatan%2C%20Tangerang%20Selatan%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1733280416311!5m2!1sen!2sid"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ITNEX Location"
                className="transition-all duration-500 sm:h-[200px]"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative bg-card rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
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
