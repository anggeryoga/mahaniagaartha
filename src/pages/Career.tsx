import { Helmet } from "react-helmet-async";
import {
  Users,
  ShoppingCart,
  Video,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const HR_EMAIL = "cvmahaniagaartha.hrd@gmail.com";

const careers = [
  {
    icon: Users,
    title: "Sales Online",
    type: "Full-time",
    location: "Jepara, Jawa Tengah",
    description:
      "Bertanggung jawab menangani lead dan calon pelanggan melalui WhatsApp serta berbagai channel digital, membangun komunikasi, melakukan follow-up, hingga mencapai target penjualan.",
    qualifications: [
      "Memiliki kemampuan komunikasi yang baik, terutama melalui chat.",
      "Percaya diri dan nyaman berinteraksi dengan banyak orang.",
      "Memiliki kemampuan negosiasi dan persuasi.",
      "Berorientasi pada target dan hasil.",
      "Responsif, disiplin, dan mampu melakukan follow-up secara konsisten.",
      "Mampu bekerja secara individu maupun dalam tim.",
      "Pengalaman di bidang Sales / Customer Service / Telemarketing menjadi nilai tambah.",
    ],
    responsibilities: [
      "Menangani dan merespons lead/calon pelanggan melalui WhatsApp dan channel digital.",
      "Membangun komunikasi dan menggali kebutuhan calon pelanggan.",
      "Menjaga hubungan dengan calon pelanggan dan melakukan follow-up database.",
      "Melakukan konsultasi, follow-up, dan handling objection hingga proses closing.",
      "Menjelaskan produk, program, dan penawaran kepada calon pelanggan.",
      "Mengelola dan memperbarui data serta aktivitas lead di CRM.",
      "Mencapai target penjualan yang telah ditentukan.",
    ],
    extra: "Komunikatif | Proaktif | Pantang Menyerah | Target Oriented",
    subject: "Nama_Sales Online",
  },
  {
    icon: ShoppingCart,
    title: "Purchasing",
    type: "Full-time",
    location: "Jepara, Jawa Tengah",
    description:
      "Mengelola proses purchasing mulai dari pengadaan, sourcing supplier, negosiasi, penerimaan barang hingga koordinasi dengan berbagai departemen untuk memastikan kebutuhan operasional terpenuhi.",
    qualifications: [
      "Minimal D3/S1 semua jurusan.",
      "Pengalaman 1-2 tahun di Purchasing / Procurement / GA.",
      "Memahami alur PR - PO - Purchasing - Receiving - Delivery - Invoice.",
      "Mampu sourcing & negosiasi supplier.",
      "Teliti, komunikatif, disiplin & bertanggung jawab.",
      "Menguasai Microsoft Office / Google Spreadsheet.",
      "Memahami Accurate/ERP menjadi nilai tambah.",
      "Pengalaman F&B/Retail/Distribusi menjadi nilai tambah.",
      "Mampu bekerja dengan target & deadline.",
      "Bersedia mobile sesuai kebutuhan operasional.",
    ],
    responsibilities: [
      "Mengelola proses PR, PO, pembelian hingga penerimaan barang.",
      "Sourcing, evaluasi & negosiasi dengan supplier/vendor.",
      "Memastikan seluruh proses berjalan sesuai SOP dan cost control perusahaan.",
      "Koordinasi dengan Logistik, Finance, Sales & Department terkait.",
      "Mengelola database dan menganalisa data stock.",
      "Monitoring harga, kualitas, quantity & delivery.",
      "Mengelola kebutuhan General Affair & fasilitas perusahaan.",
      "Monitoring aset, perlengkapan dan kebutuhan operasional.",
      "Membuat laporan purchasing, vendor & GA.",
    ],
    subject: "Nama_Purchasing",
  },
  {
    icon: Video,
    title: "Content Creator",
    type: "Full-time",
    location: "Jepara, Jawa Tengah",
    description:
      "Membuat konten kreatif untuk kebutuhan promosi dan branding perusahaan, mulai dari perencanaan konsep, pengambilan gambar, hingga editing dan publikasi di berbagai platform digital.",
    qualifications: [
      "Memiliki portofolio konten (wajib dilampirkan).",
      "Menguasai editing foto & video (CapCut, Premiere, atau sejenisnya).",
      "Paham tren konten media sosial (Instagram, TikTok, YouTube).",
      "Kreatif, inisiatif tinggi, dan mampu bekerja dengan deadline.",
      "Mampu bekerja secara individu maupun dalam tim.",
      "Pengalaman membuat konten F&B menjadi nilai tambah.",
    ],
    responsibilities: [
      "Merencanakan konsep dan ide konten untuk kebutuhan promosi.",
      "Melakukan pengambilan gambar/foto produk dan aktivitas perusahaan.",
      "Melakukan editing foto dan video agar layak publikasi.",
      "Mengelola dan menjadwalkan publikasi konten di media sosial.",
      "Memantau performa konten dan memberikan rekomendasi perbaikan.",
      "Berkolaborasi dengan tim Sales dan Marketing.",
    ],
    extra: "Kreatif | Update Tren | Detail | Konsisten",
    subject: "Nama_Content Creator",
  },
];

const benefits = [
  "Gaji pokok",
  "THR & Tunjangan",
  "BPJS Kesehatan",
  "Makan Siang Gratis",
  "Lingkungan kerja yang nyaman & positif",
];

const steps = [
  "Siapkan CV dan dokumen pendukung.",
  "Gunakan subject email sesuai posisi yang dilamar.",
  "Untuk Content Creator, sertakan portofolio.",
  "Kirim lamaran ke email HRD.",
];

const generateJobSchema = () =>
  JSON.stringify(
    careers.map((job) => ({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: job.title,
      description: `${job.description} Kualifikasi: ${job.qualifications.join(
        ". "
      )}`,
      hiringOrganization: {
        "@type": "Organization",
        name: "CV Maha Niaga Artha",
        sameAs: "https://mahaniagaartha.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jepara",
          addressRegion: "Jawa Tengah",
          addressCountry: "ID",
        },
      },
      employmentType: "FULL_TIME",
      datePosted: "2026-10-01",
      validThrough: "2026-12-31T23:59:59+07:00",
    }))
  );

const createMailto = (job: (typeof careers)[number]) => {
  const subject = encodeURIComponent(`Lamaran ${job.title} - `);
  const body = encodeURIComponent(
    `Yth. Tim HRD CV Maha Niaga Artha,

Saya bermaksud mengajukan lamaran untuk posisi ${job.title} di CV Maha Niaga Artha.

Nama:
No. WhatsApp:
Domisili:

Saya melampirkan CV dan dokumen pendukung untuk menjadi bahan pertimbangan.

Terima kasih atas waktu dan kesempatan yang diberikan.

Hormat saya,
[Nama Lengkap]`
  );
  return `mailto:${HR_EMAIL}?subject=${subject}&body=${body}`;
};

const Career = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Helmet>
        <title>Lowongan Kerja Jepara Terbaru | Karir CV Maha Niaga Artha</title>
        <meta
          name="description"
          content="CV Maha Niaga Artha membuka lowongan Sales Online, Purchasing, dan Content Creator. Penempatan Jepara, Jawa Tengah. Kirim lamaran melalui email HRD."
        />
        <meta
          name="keywords"
          content="Lowongan kerja Jepara, Loker Jepara, Loker Jepara terbaru, CV Maha Niaga Artha, Sales Online Jepara, Purchasing Jepara, Content Creator Jepara"
        />
        <meta
          property="og:title"
          content="Lowongan Kerja di CV Maha Niaga Artha Jepara"
        />
        <meta
          property="og:description"
          content="CV Maha Niaga Artha membuka kesempatan karir untuk Sales Online, Purchasing, dan Content Creator di Jepara."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mahaniagaartha.com/career" />
        <script type="application/ld+json">{generateJobSchema()}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO HALAMAN ── */}
      <PageHero
        eyebrow="We Are Hiring"
        title="Bergabung Bersama CV Maha Niaga Artha"
        lead="CV Maha Niaga Artha adalah perusahaan yang bergerak di bidang F&B. Kami membuka kesempatan bagi individu yang memiliki semangat, kemampuan, dan keinginan untuk berkembang bersama tim kami di Jepara."
        facts={[
          { num: "3", label: "Posisi terbuka" },
          { num: "5", label: "Benefit karyawan" },
          { num: "Jepara", label: "Lokasi penempatan" },
        ]}
      />

      {/* ── BENEFIT ── */}
      <section className="section section--white">
        <div className="wrap">
          <div className="sec-head sec-head--split reveal">
            <div>
              <span className="eyebrow">Benefit</span>
              <h2 className="sec-title">Yang Anda Dapatkan</h2>
            </div>
            <p className="sec-sub">
              Benefit yang tersedia untuk posisi yang sedang dibuka.
            </p>
          </div>

          <div className="grid gap-[var(--gap)] sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit) => (
              <div key={benefit} className="card reveal text-center">
                <CheckCircle2 className="mx-auto mb-3.5 text-indigo" size={24} />
                <p className="font-semibold text-[length:var(--fs-sm)] text-[color:var(--text)]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSISI TERBUKA ── */}
      <section className="section section--paper" id="daftar-lowongan">
        <div className="wrap">
          <div className="sec-head sec-head--rule reveal">
            <span className="sec-index">01</span>
            <div className="sec-head__main">
              <span className="eyebrow">Career Opportunity</span>
              <h2 className="sec-title">Posisi yang Sedang Dibuka</h2>
              <p className="sec-sub">
                Temukan posisi yang sesuai dengan kemampuan dan pengalaman
                Anda. Tersedia {careers.length} posisi.
              </p>
            </div>
          </div>

          <div className="grid gap-[var(--gap)] md:grid-cols-2 xl:grid-cols-3">
            {careers.map((career) => {
              const Icon = career.icon;
              return (
                <article key={career.title} className="card card--hover reveal">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="card__icon !mb-0">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="card__title !mb-1.5">{career.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-[length:var(--fs-xs)] text-[color:var(--text-2)]">
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-indigo" />
                          {career.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-indigo" />
                          {career.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="card__text mb-6">{career.description}</p>

                  <div className="mb-6">
                    <h4 className="text-[length:var(--fs-sm)] font-bold text-[color:var(--text)] mb-3">
                      Kualifikasi
                    </h4>
                    <ul className="space-y-2.5">
                      {career.qualifications.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[length:var(--fs-sm)] leading-[var(--lh-quiet)] text-[color:var(--text-2)]"
                        >
                          <span className="shrink-0 w-5 h-5 mt-0.5 rounded-[6px] bg-purple-50 text-indigo grid place-items-center text-[10px] font-bold">
                            {i + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-[length:var(--fs-sm)] font-bold text-[color:var(--text)] mb-3">
                      Job Desk
                    </h4>
                    <ul className="space-y-2.5">
                      {career.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[length:var(--fs-sm)] leading-[var(--lh-quiet)] text-[color:var(--text-2)]"
                        >
                          <span className="shrink-0 w-1.5 h-1.5 mt-[9px] rounded-full bg-indigo" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {career.extra && (
                    <div className="mb-6 rounded-[var(--r-md)] bg-purple-50 border border-purple-100 p-4">
                      <p className="text-[length:var(--fs-xs)] uppercase tracking-wider font-bold text-indigo mb-1">
                        Kami Mencari Kamu yang
                      </p>
                      <p className="text-[length:var(--fs-sm)] font-semibold text-[color:var(--text)]">
                        {career.extra}
                      </p>
                    </div>
                  )}

                  <div className="mt-auto">
                    <a
                      href={createMailto(career)}
                      className="btn btn--primary btn--block"
                    >
                      <Mail size={16} />
                      Kirim Lamaran via Email
                    </a>
                    <p className="text-center text-[length:var(--fs-xs)] text-[color:var(--text-2)] mt-2.5">
                      Subject: {career.subject}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CARA MELAMAR ── */}
      <section className="section section--white">
        <div className="wrap-narrow">
          <div className="card reveal !p-8 lg:!p-12 text-center">
            <span className="card__icon !mx-auto">
              <Mail size={20} />
            </span>

            <h2 className="sec-title mb-4">Cara Melamar</h2>

            <p className="card__text max-w-[52ch] mx-auto mb-8">
              Tidak perlu mengisi formulir di website. Kirimkan lamaran
              langsung melalui email HRD kami dengan melampirkan dokumen yang
              dibutuhkan sesuai posisi yang Anda lamar.
            </p>

            <div className="bg-purple-50 rounded-[var(--r-md)] p-5 mb-8">
              <p className="text-[length:var(--fs-xs)] uppercase tracking-wider font-bold text-[color:var(--text-2)] mb-1.5">
                Email HRD
              </p>
              <a
                href={`mailto:${HR_EMAIL}`}
                className="font-bold text-indigo hover:underline break-all"
              >
                {HR_EMAIL}
              </a>
            </div>

            <ol className="text-left max-w-[52ch] mx-auto space-y-3 mb-8">
              {steps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[length:var(--fs-sm)] leading-[var(--lh-quiet)] text-[color:var(--text-2)]"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-indigo text-white grid place-items-center text-[11px] font-bold">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="pt-7 border-t border-[var(--border)]">
              <p className="font-semibold text-[color:var(--text)] mb-2">
                Penempatan: Jepara, Jawa Tengah
              </p>
              <p className="text-[length:var(--fs-sm)] text-[color:var(--text-2)] max-w-[46ch] mx-auto">
                Seluruh proses lamaran hanya melalui email HRD di atas. Kami
                tidak menerima lamaran melalui WhatsApp atau formulir
                lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
