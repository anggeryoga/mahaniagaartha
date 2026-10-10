import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-meeting.jpg";

const stats = [
  { num: "4500+", label: "Mitra usaha aktif" },
  { num: "9", label: "Brand siap pakai" },
  { num: "100%", label: "Pendampingan usaha" },
];

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-24 pb-14 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Aksen geometris: satu blok diagonal tipis di sudut kanan atas */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-[min(38vw,460px)] bg-purple-50 hidden lg:block"
        style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="wrap relative">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.06fr_.94fr] items-center">
          {/* ── SALINAN ── */}
          <div className="max-w-[720px]">
            <span className="eyebrow eyebrow--plain">Peluang Usaha</span>

            <h1 className="text-indigo mb-3 max-w-[15ch]">
              Mulai Usaha Tanpa Ribet,{" "}
              <span className="text-purple">Langsung Siap Jual</span>
            </h1>

            <p className="lead max-w-[54ch] mb-7">
              Paket usaha makanan &amp; minuman lengkap dengan brand, bahan, dan
              sistem. Tinggal jalan, langsung berpotensi cuan.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              <a href="#contact" className="btn btn--primary btn--lg">
                Konsultasi Gratis
                <ArrowRight size={16} />
              </a>
              {/* Halaman /produk sudah dihapus, tombol diarahkan ke
                  section brand di Beranda agar tidak 404. */}
              <a href="#partners" className="btn btn--outline btn--lg">
                Lihat Brand Kami
              </a>
            </div>

            {/* Statistik ringkas — kartu berisi, pemisah antar kolom */}
            <div className="grid grid-cols-3 bg-[var(--bg)] border border-[var(--border)] rounded-[var(--r-lg)] px-5 py-4 sm:px-6 max-w-[560px]">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={
                    i > 0
                      ? "border-l border-[var(--border)] pl-4 sm:pl-6"
                      : "pr-3 sm:pr-4"
                  }
                >
                  <span className="block text-[length:var(--fs-num)] font-bold leading-[1.05] tracking-[-0.02em] text-indigo">
                    {s.num}
                  </span>
                  <span className="block mt-1 text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] leading-snug text-[color:var(--text-2)]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── MEDIA ── */}
          <div className="relative">
            {/* Aksen: pil kuning vertikal di kanan */}
            <div
              className="hidden sm:block absolute z-0 right-[-14px] top-7 bottom-7 w-[14px] bg-amber rounded-full"
              aria-hidden="true"
            />
            {/* Aksen: siku biru di kiri atas */}
            <div
              className="hidden sm:block absolute z-0 left-[-16px] top-[-16px] w-[76px] h-[76px] border-t-4 border-l-4 border-purple rounded-tl-[var(--r-xl)]"
              aria-hidden="true"
            />

            <img
              src={heroImage}
              alt="Peluang usaha makanan dan minuman siap jual"
              className="photo relative z-10 aspect-[4/3.5] object-[center_30%]"
              width={1280}
              height={1120}
              loading="eager"
            />

            {/* Kartu info — datar, bukan glassmorphism */}
            <div className="absolute z-20 left-4 bottom-4 sm:left-[18px] sm:bottom-[18px] flex items-center gap-3.5 bg-white border border-[var(--border)] rounded-[var(--r-lg)] px-3.5 py-3 sm:px-4 sm:py-3.5 shadow-[var(--sh-md)] max-w-[250px] sm:max-w-[320px]">
              <span className="shrink-0 w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full grid place-items-center bg-amber text-indigo">
                <ShieldCheck size={18} />
              </span>
              <span>
                <span className="block text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] font-semibold leading-tight text-indigo">
                  Konsep Teruji
                </span>
                <span className="block text-[length:var(--fs-xs)] leading-snug text-[color:var(--text-2)]">
                  Dipakai ribuan mitra di seluruh Indonesia.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
