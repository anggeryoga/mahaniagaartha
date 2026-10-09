import { ArrowRight, BadgeCheck } from "lucide-react";
import aboutImage from "@/assets/about-meeting.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section section--paper">
      <div className="wrap">
        <div className="sec-head sec-head--rule reveal">
          <span className="sec-index">03</span>
          <div className="sec-head__main">
            <span className="eyebrow">Partner Usaha Terpercaya</span>
            <h2 className="sec-title">Solusi Lengkap Paket Usaha Siap Jalan</h2>
          </div>
        </div>

        <div className="grid gap-[var(--gap)] lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative reveal">
            <img
              src={aboutImage}
              alt="Mitra usaha makanan dan minuman"
              className="photo aspect-[4/3.2]"
              loading="lazy"
              width={960}
              height={768}
            />

            <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-white border border-[var(--border)] rounded-[var(--r-lg)] px-5 py-3 shadow-[var(--sh-md)]">
              <BadgeCheck size={22} className="text-indigo" />
              <span className="font-semibold text-indigo">4500+ Mitra</span>
            </div>
          </div>

          <div className="reveal d1">
            <p className="lead mb-7">
              CV Maha Niaga Artha membantu Anda memulai usaha makanan dan
              minuman tanpa ribet. Mulai dari brand, bahan baku, hingga sistem
              penjualan sudah kami siapkan, sehingga Anda bisa langsung fokus
              menjalankan dan mengembangkan usaha.
            </p>

            <a href="#contact" className="btn btn--primary">
              Konsultasi Gratis
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
