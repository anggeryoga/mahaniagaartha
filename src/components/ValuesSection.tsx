import { Users, TrendingUp, Award } from "lucide-react";

/** Tiga poin, ditampilkan sebagai baris kartu. */
const alasan = [
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

        <div className="alasan-pendukung">
          {alasan.map((item) => (
            <div key={item.title} className="alasan-bar alasan-bar--tengah reveal">
              <span className="alasan-bar__icon" aria-hidden="true">
                <item.icon size={19} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
