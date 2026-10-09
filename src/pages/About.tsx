import { Helmet } from "react-helmet-async";
import {
  HeartHandshake,
  Rocket,
  ShieldCheck,
  ArrowRight,
  Store,
  Users,
  CheckCircle2,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

const brands = [
  "Mybestea",
  "You Need Mie",
  "Mentoast",
  "Kopi Ibukota",
  "Esteh Ibukota",
  "Kentang Gantenk",
  "Raja Steak",
  "Nice Coffee",
  "Seblak Express",
  "Chick Ichick",
  "Merlumer",
  "Chickuruyuk",
  "Tahu Nyonyor",
];

const metrics = [
  { icon: Store, val: "13+", label: "Brand portofolio" },
  { icon: Users, val: "500+", label: "Mitra aktif" },
  { icon: BarChart3, val: "95%", label: "Success rate" },
  { icon: CheckCircle2, val: "100%", label: "SOP standar" },
];

const bento = [
  {
    span: "lg:col-span-2",
    icon: HeartHandshake,
    title: "Konsultasi Bisnis Komprehensif",
    text: "Pendampingan dari pemilihan lokasi, strategi grand opening, hingga optimalisasi omset harian. Anda tidak pernah berjalan sendirian.",
  },
  {
    span: "",
    tone: "blue",
    icon: Rocket,
    title: "Inovasi R&D Berkelanjutan",
    text: "Tim kami terus memperbarui formulasi menu agar selalu relevan dengan tren pasar.",
  },
  {
    span: "",
    icon: ShieldCheck,
    title: "Standardisasi Mutu",
    text: "SOP operasional terstruktur yang sangat mudah diadaptasi oleh SDM tanpa pengalaman F&B sekalipun.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)]">      <Helmet>
        <title>Tentang Maha Niaga Artha | Ekosistem Bisnis F&B Terpadu</title>
        <meta
          name="description"
          content="Membangun bisnis F&B dengan sistem terarah bersama CV Maha Niaga Artha. Temukan paket usaha siap jalan dengan ROI tinggi dan SOP matang."
        />
        <meta
          name="keywords"
          content="paket usaha makanan, kemitraan minuman, franchise f&b indonesia, bisnis kuliner"
        />
        <link rel="canonical" href="https://mahaniagaartha.com/tentang" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CV Maha Niaga Artha",
            url: "https://mahaniagaartha.com",
            logo: "https://mahaniagaartha.com/logo.svg",
            description:
              "Penyedia ekosistem bisnis makanan dan minuman siap jalan untuk pengusaha di Indonesia.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jepara",
              addressRegion: "Jawa Tengah",
              addressCountry: "ID",
            },
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* ── HERO HALAMAN ── */}
      <PageHero
        eyebrow="Corporate F&B Ecosystem"
        title="Membangun Kesuksesan Bisnis Kuliner Anda"
        lead="Eksekusi bisnis lebih presisi, efisien, dan menguntungkan melalui standarisasi paket usaha yang telah teruji di pasaran."
        facts={[
          { num: "13+", label: "Brand portofolio" },
          { num: "500+", label: "Mitra aktif" },
          { num: "95%", label: "Success rate" },
        ]}
      />

      {/* ── VISI + METRICS ── */}
      <section className="section section--white">
        <div className="wrap">
          <div className="grid gap-[var(--gap)] lg:grid-cols-[1.1fr_.9fr] lg:gap-14 items-start">
            <div className="reveal">
              <span className="eyebrow">Visi Perusahaan</span>
              <h2 className="sec-title mb-6 max-w-[20ch]">
                Mendorong Ekonomi Melalui Inovasi Terukur
              </h2>

              <div className="space-y-4 text-[color:var(--text-2)] leading-[var(--lh-quiet)] measure">
                <p>
                  <strong className="text-[color:var(--text)]">
                    CV Maha Niaga Artha
                  </strong>{" "}
                  hadir sebagai inkubator dan penyedia solusi operasional bagi
                  pengusaha pemula. Kami mengeliminasi risiko kegagalan konsep
                  awal yang sering dialami bisnis baru.
                </p>
                <p>
                  Melalui sistem manajemen yang solid, suplai bahan baku
                  terintegrasi, dan riset pasar berkelanjutan, kami mendesain{" "}
                  <strong className="text-[color:var(--text)]">
                    kemitraan F&amp;B
                  </strong>{" "}
                  yang berorientasi pada Return of Investment (ROI) rasional
                  dan ekspansi jangka panjang.
                </p>
              </div>

              <span className="mt-7 inline-flex items-center gap-2 text-[length:var(--fs-sm)] font-semibold text-indigo">
                <TrendingUp size={16} />
                Terukur, terarah, dan berkelanjutan
              </span>
            </div>

            <div className="grid grid-cols-2 gap-[var(--gap)]">
              {metrics.map((m) => (
                <div key={m.label} className="card card--hover reveal text-center">
                  <span className="card__icon !mx-auto">
                    <m.icon size={20} />
                  </span>
                  <span className="block text-[length:var(--fs-num)] font-bold leading-none text-indigo mb-1.5">
                    {m.val}
                  </span>
                  <span className="block text-[length:var(--fs-xs)] font-semibold uppercase tracking-wider text-[color:var(--text-2)]">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE BRAND ── */}
      <section className="py-12 bg-indigo overflow-hidden">
        <p className="text-center text-[length:var(--fs-xs)] font-semibold uppercase tracking-[0.3em] text-white/55 mb-8">
          Dipercaya oleh berbagai brand kuliner
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-12 w-max marquee items-center">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-white/35 text-3xl md:text-4xl font-bold whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO EKOSISTEM ── */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="sec-head sec-head--split reveal">
            <div>
              <span className="eyebrow">Ekosistem</span>
              <h2 className="sec-title">Ekosistem Dukungan Penuh</h2>
            </div>
            <p className="sec-sub">
              Bukan sekadar kemitraan, kami memberikan framework bisnis utuh.
            </p>
          </div>

          <div className="grid gap-[var(--gap)] md:grid-cols-2 lg:grid-cols-3">
            {bento.map((b) => {
              const isBlue = b.tone === "blue";
              return (
                <div
                  key={b.title}
                  className={`card card--hover reveal ${b.span} ${
                    isBlue ? "!bg-indigo !border-purple" : ""
                  }`}
                >
                  <span
                    className={`card__icon ${
                      isBlue ? "!bg-white/15 !text-white" : ""
                    }`}
                  >
                    <b.icon size={20} />
                  </span>
                  <h3
                    className={`card__title ${isBlue ? "!text-white" : ""}`}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={`card__text ${
                      isBlue ? "!text-white/80" : ""
                    }`}
                  >
                    {b.text}
                  </p>
                </div>
              );
            })}

            {/* Kartu CTA dalam bento */}
            <div className="card card--hover reveal lg:col-span-2 !bg-[color:var(--text)] !border-[color:var(--text)] !flex-row items-center justify-between gap-6">
              <div>
                <h3 className="card__title !text-white mb-2">
                  Siap Membangun Aset{" "}
                  <span className="text-amber">Masa Depan?</span>
                </h3>
                <p className="card__text !text-white/65">
                  Hubungi representatif kami untuk diskusi lebih lanjut.
                </p>
              </div>
              <Link
                to="/produk"
                className="shrink-0 w-14 h-14 grid place-items-center rounded-full bg-amber text-indigo transition-transform hover:rotate-45"
                aria-label="Lihat paket usaha"
              >
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA PENUTUP ── */}
      <section className="section section--white">
        <div className="wrap">
          <div className="bg-indigo rounded-[var(--r-xl)] px-8 py-14 lg:px-16 lg:py-20 text-center relative overflow-hidden">
            <span
              className="pointer-events-none absolute -bottom-32 -left-20 w-[340px] h-[340px] rounded-full border border-white/15"
              aria-hidden="true"
            />
            <div className="relative max-w-[60ch] mx-auto">
              <h2 className="text-white mb-5 text-balance">
                Mulai Kemitraan Anda Hari Ini
              </h2>
              <p className="text-white/75 text-[length:var(--fs-lead)] leading-[var(--lh-quiet)] mb-9">
                Ribuan mitra telah membuktikan sistem kami. Ambil langkah
                pertama untuk mengamankan wilayah pemasaran di kota Anda.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link to="/produk" className="btn btn--primary btn--lg">
                  Lihat Paket Usaha
                </Link>
                <a
                  href="https://wa.me/6281212125422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost-light btn--lg"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
