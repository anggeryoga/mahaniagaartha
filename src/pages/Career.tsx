import { motion } from "framer-motion";
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
      "Pengalaman 1–2 tahun di Purchasing / Procurement / GA.",
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
      "Bergabung sebagai Content Creator untuk mengembangkan konten kreatif, mengikuti tren media sosial, serta membantu membangun komunikasi brand melalui konten digital.",
    qualifications: [
      "Perempuan.",
      "Wajib kreatif.",
      "Pede level max.",
      "Skill Edit & Copywriting.",
      "Mengikuti trend sosmed.",
      "Di-jelasin cepat nangkep.",
      "Domisili Jepara dan sekitarnya.",
    ],
    responsibilities: [
      "Membuat dan mengembangkan ide konten untuk media sosial.",
      "Mengikuti perkembangan tren media sosial.",
      "Melakukan editing konten sesuai kebutuhan.",
      "Membuat copywriting untuk kebutuhan konten.",
      "Berpartisipasi dalam proses produksi konten.",
      "Membantu mengembangkan konsep komunikasi brand.",
    ],
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

// Google Jobs Schema
const generateJobSchema = () => {
  const jobSchemas = careers.map((job) => ({
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
    datePosted: "2026-09-30",
    validThrough: "2026-09-30T23:59:59+07:00",
  }));

  return JSON.stringify(jobSchemas);
};

// Generate email application
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
    <div className="min-h-screen bg-white text-[#132b26]">
      <Helmet>
        <title>
          Lowongan Kerja Jepara Terbaru | Karir CV Maha Niaga Artha
        </title>

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

        <script type="application/ld+json">
          {generateJobSchema()}
        </script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#c2f21f] text-[#132b26] font-bold text-xs md:text-sm tracking-wide uppercase">
              We Are Hiring
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-6 tracking-tight leading-[1.1] text-[#132b26]">
              Bergabung Bersama
              <br className="hidden md:block" /> CV Maha Niaga Artha
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
              CV Maha Niaga Artha adalah perusahaan yang bergerak di bidang
              F&B. Kami membuka kesempatan bagi individu yang memiliki
              semangat, kemampuan, dan keinginan untuk berkembang bersama tim
              kami di Jepara.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFIT */}
      <section className="py-16 lg:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#132b26]">
              Benefit
            </h2>

            <p className="text-slate-500 mt-3">
              Benefit yang tersedia untuk posisi yang sedang dibuka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white border border-slate-200 rounded-[1.5rem] p-6 text-center"
              >
                <CheckCircle2
                  className="mx-auto mb-4 text-[#132b26]"
                  size={28}
                />

                <p className="font-bold text-[#132b26] text-sm">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POSISI TERBUKA */}
      <section
        className="py-20 lg:py-28 bg-white"
        id="daftar-lowongan"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#c2f21f]/30 text-[#132b26] text-xs font-extrabold uppercase tracking-wider mb-4">
                Career Opportunity
              </div>

              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#132b26] tracking-tight">
                Posisi yang Sedang Dibuka
              </h2>

              <p className="text-slate-500 mt-2 text-lg">
                Temukan posisi yang sesuai dengan kemampuan dan pengalaman
                Anda.
              </p>
            </div>

            <div className="px-5 py-2.5 bg-[#c2f21f] rounded-full">
              <span className="text-sm font-bold text-[#132b26]">
                {careers.length} Posisi Terbuka
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {careers.map((career, index) => {
              const Icon = career.icon;

              return (
                <motion.article
                  key={career.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-7 md:p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-[#c2f21f] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
                >
                  {/* HEADER */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 shrink-0 rounded-[1.1rem] bg-[#c2f21f]/20 text-[#132b26] flex items-center justify-center group-hover:bg-[#c2f21f] transition-colors duration-300">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-[#132b26]">
                        {career.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm font-medium text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Clock
                            size={15}
                            className="text-[#132b26]"
                          />
                          {career.type}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <MapPin
                            size={15}
                            className="text-[#132b26]"
                          />
                          {career.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-[15px] text-slate-500 mb-8 leading-relaxed">
                    {career.description}
                  </p>

                  {/* KUALIFIKASI */}
                  <div className="mb-8">
                    <h4 className="text-lg font-extrabold text-[#132b26] mb-4">
                      Kualifikasi
                    </h4>

                    <ul className="space-y-3">
                      {career.qualifications.map((item, i) => (
                        <li
                          key={i}
                          className="text-[14px] text-slate-500 flex items-start gap-3 leading-relaxed"
                        >
                          <span className="w-6 h-6 shrink-0 rounded-md bg-[#c2f21f] text-[#132b26] flex items-center justify-center text-[11px] font-extrabold">
                            {i + 1}
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* JOB DESK */}
                  <div className="mb-8">
                    <h4 className="text-lg font-extrabold text-[#132b26] mb-4">
                      Job Desk
                    </h4>

                    <ul className="space-y-3">
                      {career.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="text-[14px] text-slate-500 flex items-start gap-3 leading-relaxed"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#c2f21f] mt-2 shrink-0" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* EXTRA UNTUK SALES */}
                  {career.extra && (
                    <div className="mb-8 rounded-xl bg-[#132b26] p-4">
                      <p className="text-xs uppercase tracking-wider font-bold text-[#c2f21f] mb-1">
                        Kami Mencari Kamu yang
                      </p>

                      <p className="text-sm text-white font-semibold">
                        {career.extra}
                      </p>
                    </div>
                  )}

                  {/* APPLY */}
                  <div className="mt-auto">
                    <a
                      href={createMailto(career)}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#c2f21f] text-[#132b26] text-sm font-bold hover:bg-[#b5e519] transition-all duration-300"
                    >
                      <Mail size={18} />
                      Kirim Lamaran via Email
                    </a>

                    <p className="text-center text-xs text-slate-400 mt-3">
                      Subject: {career.subject}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARA MELAMAR */}
      <section className="py-20 lg:py-24 bg-slate-50/70">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-[2rem] border border-slate-200 p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#c2f21f] flex items-center justify-center mx-auto mb-6">
              <Mail size={30} className="text-[#132b26]" />
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#132b26] mb-4">
              Cara Melamar
            </h2>

            <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8">
              Tidak perlu mengisi formulir di website. Kirimkan lamaran
              langsung melalui email HRD kami dengan melampirkan dokumen yang
              dibutuhkan sesuai posisi yang Anda lamar.
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 mb-8">
              <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                Email HRD
              </p>

              <a
                href={`mailto:${HR_EMAIL}`}
                className="text-lg md:text-xl font-extrabold text-[#132b26] hover:text-[#587000] transition-colors break-all"
              >
                {HR_EMAIL}
              </a>
            </div>

            <div className="text-left max-w-xl mx-auto space-y-3 text-sm text-slate-600">
              <p>
                <strong className="text-[#132b26]">1.</strong> Siapkan CV dan
                dokumen pendukung.
              </p>

              <p>
                <strong className="text-[#132b26]">2.</strong> Gunakan subject
                email sesuai posisi yang dilamar.
              </p>

              <p>
                <strong className="text-[#132b26]">3.</strong> Untuk Content
                Creator, sertakan portofolio.
              </p>

              <p>
                <strong className="text-[#132b26]">4.</strong> Kirim lamaran
                ke email HRD.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="font-bold text-[#132b26]">
                Penempatan: Jepara, Jawa Tengah
              </p>

              <p className="text-sm text-slate-400 mt-2">
                Deadline: 30 September 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="py-16 bg-[#132b26]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            CV Maha Niaga Artha
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Perusahaan yang bergerak di bidang F&B dan terus berkembang
            bersama orang-orang terbaik di dalamnya.
          </p>

          <a
            href="https://mahaniagaartha.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[#c2f21f] text-[#132b26] font-bold text-sm"
          >
            Kunjungi Website
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;