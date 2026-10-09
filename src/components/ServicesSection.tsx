import { BarChart3, PiggyBank, LineChart, Briefcase } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Paket Usaha Siap Jual",
    description:
      "Semua sudah disiapkan dari konsep, bahan baku, hingga branding. Anda tinggal mulai jualan tanpa ribet.",
  },
  {
    icon: PiggyBank,
    title: "Modal Terjangkau",
    description:
      "Mulai usaha dengan biaya yang realistis dan terukur, cocok untuk pemula hingga yang ingin ekspansi bisnis.",
  },
  {
    icon: LineChart,
    title: "Potensi Cuan Harian",
    description:
      "Produk sudah terbukti laku di pasaran dengan peluang penjualan harian yang stabil dan menjanjikan.",
  },
  {
    icon: Briefcase,
    title: "Pendampingan Usaha",
    description:
      "Dapatkan panduan mulai dari awal hingga berjalan, agar usaha Anda berkembang dengan lebih terarah.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section section--paper">
      <div className="wrap">
        {/* Varian majalah: judul kiri, keterangan di kolom kanan */}
        <div className="sec-head sec-head--split reveal">
          <div>
            <span className="eyebrow">Solusi Kami</span>
            <h2 className="sec-title">
              Semua yang Anda Butuhkan untuk Memulai Usaha
            </h2>
          </div>
          <p className="sec-sub">
            Empat hal inti yang kami siapkan supaya Anda bisa langsung
            berjualan, tanpa harus memikirkan hal teknis dari nol.
          </p>
        </div>

        <div className="grid gap-[var(--gap)] md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="card card--hover reveal">
              <span className="card__icon">
                <service.icon size={20} />
              </span>
              <h3 className="card__title">{service.title}</h3>
              <p className="card__text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
