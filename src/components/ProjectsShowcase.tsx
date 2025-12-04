import { ArrowRight, Clock, CheckCircle2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart Office Automation – PT Maju Sejahtera",
    client: "PT Maju Sejahtera",
    problem: "Lampu & AC kantor sering lupa dimatikan, tagihan listrik membengkak",
    solution: "Implementasi sensor IoT + dashboard monitoring + automasi jadwal",
    result: "Hemat listrik 32% per bulan",
    status: "completed",
    progress: 100,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
    tags: ["IoT", "Automation", "Enterprise"],
  },
  {
    title: "E-Commerce Integration – Toko Online ABC",
    client: "Toko Online ABC",
    problem: "Stok tidak sinkron antara marketplace, sering overselling",
    solution: "Integrasi multi-channel dengan sistem inventory terpusat",
    result: "Zero overselling, efisiensi 5x lipat",
    status: "completed",
    progress: 100,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
    tags: ["Web App", "E-Commerce", "Integration"],
  },
  {
    title: "Network Upgrade – Kantor Cabang XYZ",
    client: "PT XYZ Indonesia",
    problem: "Internet lambat, sering disconnect, menghambat produktivitas",
    solution: "Upgrade infrastruktur + load balancing + monitoring 24/7",
    result: "Speed 10x lipat, uptime 99.9%",
    status: "completed",
    progress: 100,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
    tags: ["Network", "Security", "Infrastructure"],
  },
  {
    title: "Mobile App Inventory – CV Berkah",
    client: "CV Berkah Mandiri",
    problem: "Tracking stok manual, sering terjadi selisih dan kehilangan",
    solution: "Aplikasi mobile dengan barcode scanner + real-time sync",
    result: "Akurasi stok 99.8%",
    status: "ongoing",
    progress: 75,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80",
    tags: ["Mobile", "Android", "iOS"],
  },
  {
    title: "Cloud Migration – Startup Fintech",
    client: "PT Fintech Nusantara",
    problem: "Server on-premise mahal dan sulit di-scale saat traffic tinggi",
    solution: "Migrasi ke cloud AWS dengan auto-scaling",
    result: "Hemat 40% biaya server",
    status: "ongoing",
    progress: 60,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&q=80",
    tags: ["Cloud", "Migration", "AWS"],
  },
  {
    title: "Digital Signage – Mall Premium",
    client: "Premium Mall Jakarta",
    problem: "Informasi promo tidak update, display statis membosankan",
    solution: "Sistem digital signage dengan CMS dan konten dinamis",
    result: "Engagement pengunjung +45%",
    status: "ongoing",
    progress: 40,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop&q=80",
    tags: ["Hardware", "Display", "Interactive"],
  },
];

const statusConfig = {
  ongoing: {
    label: "Sedang Berjalan",
    icon: Clock,
    color: "bg-amber-500",
    textColor: "text-white",
    bgColor: "bg-amber-500",
  },
  completed: {
    label: "Selesai",
    icon: CheckCircle2,
    color: "bg-emerald-500",
    textColor: "text-white",
    bgColor: "bg-emerald-500",
  },
  upcoming: {
    label: "Akan Datang",
    icon: Rocket,
    color: "bg-blue-500",
    textColor: "text-white",
    bgColor: "bg-blue-500",
  },
};

const ProjectsShowcase = () => {
  return (
    <section id="proyek" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proyek{" "}
            <span className="text-primary">
              Kami
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Lihat proyek-proyek yang sedang kami kerjakan dan yang akan datang. Kami berkomitmen memberikan solusi terbaik.
          </p>
        </div>

        {/* Status Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.entries(statusConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${config.color}`} />
              <span className="text-sm text-muted-foreground">{config.label}</span>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const status = statusConfig[project.status as keyof typeof statusConfig];
            const StatusIcon = status.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full ${status.bgColor} shadow-md`}>
                    <StatusIcon className={`w-3.5 h-3.5 ${status.textColor}`} />
                    <span className={`text-xs font-semibold ${status.textColor}`}>{status.label}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Progress bar for ongoing projects */}
                  {project.status === "ongoing" && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-muted-foreground">Progress</span>
                        <span className="text-xs font-semibold text-primary">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-chart-1 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Case Study Format */}
                  <div className="space-y-3 mb-4">
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded flex-shrink-0">Masalah</span>
                      <p className="text-xs text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded flex-shrink-0">Solusi</span>
                      <p className="text-xs text-muted-foreground">{project.solution}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded flex-shrink-0">Hasil</span>
                      <p className="text-xs font-semibold text-emerald-600">{project.result}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Tertarik untuk berkolaborasi dengan kami?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="group text-base px-8 py-6 rounded-xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              Lihat Portfolio Lainnya
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" asChild className="group text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              <a href="#kontak">
                Diskusikan Proyek Anda
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;

