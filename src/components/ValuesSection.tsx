import { Shield, Users, TrendingUp, Award } from "lucide-react";

/** Poin unggulan — ditonjolkan sebagai kartu utama. */
const utama = {
  icon: Shield,
  title: "Aman & Terpercaya",
  description:
    "Konsep usaha sudah teruji dan digunakan oleh banyak mitra, sehingga lebih aman untuk memulai bisnis. Anda tidak perlu mencoba-coba konsep yang belum terbukti di pasar.",
};

/** Tiga poin pendukung — ditampilkan sebagai baris kartu. */
const pendukung = [
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

/** Satu kartu unggulan + tiga baris pendukung, dibedakan dari Solusi Kami. */
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

        <div className="alasan">
          {/* Kartu unggulan — panel indigo */}
          <div className="alasan-utama reveal">
            <span className="alasan-utama__ring" aria-hidden="true" />
            <span className="alasan-utama__badge">
              <utama.icon size={24} aria-hidden="true" />
            </span>
            <div className="relative">
              <h3>{utama.title}</h3>
              <p>{utama.description}</p>
            </div>
          </div>

          {/* Tiga baris pendukung */}
          <div className="alasan-pendukung">
            {pendukung.map((item) => (
              <div key={item.title} className="alasan-bar reveal">
                <span className="alasan-bar__icon">
                  <item.icon size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
