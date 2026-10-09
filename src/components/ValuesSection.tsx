import { Shield, Users, TrendingUp, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Aman & Terpercaya",
    description:
      "Konsep usaha sudah teruji dan digunakan oleh banyak mitra, sehingga lebih aman untuk memulai bisnis.",
  },
  {
    icon: Users,
    title: "Cocok untuk Pemula",
    description:
      "Tanpa pengalaman pun bisa mulai. Sistem dibuat sederhana dan mudah dijalankan sehari-hari.",
  },
  {
    icon: TrendingUp,
    title: "Potensi Berkembang",
    description:
      "Produk mengikuti tren pasar dan memiliki peluang berkembang seiring meningkatnya permintaan.",
  },
  {
    icon: Award,
    title: "Brand Siap Pakai",
    description:
      "Tidak perlu bangun dari nol. Anda langsung menggunakan brand yang sudah siap jual dan dikenal.",
  },
];

const ValuesSection = () => {
  return (
    <section id="services" className="section section--white">
      <div className="wrap">
        <div className="sec-head sec-head--rule reveal">
          <span className="sec-index">01</span>
          <div className="sec-head__main">
            <span className="eyebrow">Kenapa Pilih Kami</span>
            <h2 className="sec-title">
              Dibuat untuk Memudahkan Anda Memulai Usaha
            </h2>
          </div>
        </div>

        <div className="grid gap-[var(--gap)] sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="card card--hover reveal">
              <span className="card__icon">
                <value.icon size={20} />
              </span>
              <h3 className="card__title">{value.title}</h3>
              <p className="card__text">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
