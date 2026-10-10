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

/** Daftar bernomor, bukan grid kartu — sengaja dibedakan dari section alasan. */
const ServicesSection = () => {
  return (
    <section className="section section--blue">
      <div className="wrap">
        {/* Varian majalah: judul kiri, keterangan di kolom kanan */}
        <div className="sec-head sec-head--split reveal">
          <div>
            <span className="eyebrow eyebrow--light">Solusi Kami</span>
            <h2 className="sec-title">
              Semua yang Anda Butuhkan untuk Memulai Usaha
            </h2>
          </div>
          <p className="sec-sub !text-white/65">
            Empat hal inti yang kami siapkan supaya Anda bisa langsung
            berjualan, tanpa harus memikirkan hal teknis dari nol.
          </p>
        </div>

        <div className="solusi-list">
          {services.map((service, i) => (
            <div key={service.title} className="solusi-row reveal">
              <span className="solusi-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="solusi-body">
                <h3 className="solusi-head">
                  <service.icon size={19} aria-hidden="true" />
                  {service.title}
                </h3>
                <p className="solusi-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
