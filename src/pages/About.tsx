import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Target, Rocket, HeartHandshake, 
  ShieldCheck, ArrowRight, Store, Users, 
  CheckCircle2, Sparkles, ChevronRight, BarChart3, TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const brands = [
  "Mybestea", "You Need Mie", "Mentoast", "Kopi Ibukota", "Esteh Ibukota", 
  "Kentang Gantenk", "Raja Steak", "Nice Coffee", "Seblak Express", 
  "Chick Ichick", "Merlumer", "Chickuruyuk", "Tahu Nyonyor"
];

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Parallax Values
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -120]);

  // Framer Motion Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    },
    viewport: { once: true, margin: "-50px" }
  };

  return (
    <div 
      className="min-h-screen bg-white text-[#132b26] selection:bg-[#c2f21f] selection:text-[#132b26] overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <Helmet>
        <title>Tentang Maha Niaga Artha | Ekosistem Bisnis F&B Terpadu</title>
        <meta name="description" content="Membangun bisnis F&B dengan sistem terarah bersama CV Maha Niaga Artha. Temukan paket usaha siap jalan dengan ROI tinggi dan SOP matang." />
        <meta name="keywords" content="paket usaha makanan, kemitraan minuman, franchise f&b indonesia, bisnis kuliner" />
        
        {/* Force Import DM Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CV Maha Niaga Artha",
            "url": "https://mahaniagaartha.com",
            "logo": "https://mahaniagaartha.com/logo.png",
            "description": "Penyedia ekosistem bisnis makanan dan minuman siap jalan untuk pengusaha di Indonesia.",
            "address": { "@type": "PostalAddress", "addressLocality": "Jepara", "addressRegion": "Jawa Tengah", "addressCountry": "ID" }
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* 1. HERO SECTION DENGAN PARALLAX & GLOW */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center bg-[#132b26] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        
        <motion.div style={{ opacity, scale, y }} className="container mx-auto px-6 z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#c2f21f] text-sm font-semibold tracking-wide mb-8 backdrop-blur-xl shadow-[0_0_30px_rgba(194,242,31,0.1)]"
          >
            <Sparkles size={16} className="animate-pulse" /> Corporate F&B Ecosystem
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] mb-8 tracking-tight"
          >
            Membangun <span className="text-[#c2f21f] inline-block relative">
              Kesuksesan
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#c2f21f]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"/></svg>
            </span> <br /> 
            Bisnis Kuliner Anda.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Eksekusi bisnis lebih presisi, efisien, dan menguntungkan melalui standarisasi paket usaha yang telah teruji di pasaran.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/produk" className="group px-8 py-4 bg-[#c2f21f] text-[#132b26] rounded-full font-bold text-lg hover:bg-white transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_rgba(194,242,31,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
              Eksplorasi Paket <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Ambient Moving Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ y: [0, -100, 0], x: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#c2f21f] opacity-5 blur-[120px]" />
          <motion.div animate={{ y: [0, 100, 0], x: [0, -50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500 opacity-5 blur-[100px]" />
        </div>
      </section>

      {/* 2. CORPORATE PHILOSOPHY & METRICS */}
      <section className="py-24 lg:py-32 bg-white relative z-20 rounded-t-[3rem] -mt-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeInUp} className="relative">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-sm mb-6">
                <TrendingUp size={18} /> Visi Perusahaan
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.2] text-[#132b26] tracking-tight">
                Mendorong Ekonomi Melalui <span className="text-slate-400">Inovasi Terukur.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  <strong>CV Maha Niaga Artha</strong> hadir sebagai inkubator dan penyedia solusi operasional bagi pengusaha pemula. Kami mengeliminasi risiko kegagalan konsep awal yang sering dialami bisnis baru.
                </p>
                <p>
                  Melalui sistem manajemen yang solid, suplai bahan baku terintegrasi, dan riset pasar berkelanjutan, kami mendesain <strong>kemitraan F&B</strong> yang berorientasi pada Return of Investment (ROI) rasional dan ekspansi jangka panjang.
                </p>
              </div>
            </motion.div>

            {/* METRICS GRID (Interactive) */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { icon: <Store />, label: "Brand Portofolio", val: "13+", bg: "bg-blue-50/50", text: "text-blue-600" },
                { icon: <Users />, label: "Mitra Aktif", val: "500+", bg: "bg-emerald-50/50", text: "text-emerald-600" },
                { icon: <BarChart3 />, label: "Success Rate", val: "95%", bg: "bg-amber-50/50", text: "text-amber-600" },
                { icon: <CheckCircle2 />, label: "SOP Standar", val: "100%", bg: "bg-purple-50/50", text: "text-purple-600" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${item.bg} border border-slate-100 p-8 rounded-[2rem] flex flex-col items-center text-center transition-shadow hover:shadow-xl hover:shadow-slate-200/50 cursor-default group`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center ${item.text} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-4xl font-black text-[#132b26] mb-2 tracking-tight">{item.val}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. INFINITE BRAND SCROLL (Smooth CSS Mask) */}
      <section className="py-20 bg-[#132b26] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#132b26] via-transparent to-[#132b26] z-10 w-full pointer-events-none"></div>
        <div className="mb-14 text-center relative z-20">
          <h3 className="text-white/40 font-bold uppercase tracking-[0.4em] text-xs">Dipercaya oleh berbagai brand kuliner</h3>
        </div>
        
        <div className="flex overflow-hidden whitespace-nowrap relative z-0">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center pr-16"
          >
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <span key={i} className="text-white/20 text-5xl md:text-6xl font-black hover:text-[#c2f21f] transition-colors duration-300 cursor-pointer">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. BENTO GRID: SUPPORT ECOSYSTEM */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-5 text-[#132b26] tracking-tight">Ekosistem Dukungan Penuh</h2>
            <p className="text-slate-500 text-xl font-medium">Bukan sekadar kemitraan, kami memberikan framework bisnis utuh.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Box 1 */}
            <motion.div 
              {...fadeInUp}
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#132b26]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#c2f21f]/20 transition-colors">
                  <HeartHandshake className="w-8 h-8 text-[#132b26]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#132b26] tracking-tight">Konsultasi Bisnis Komprehensif</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                  Pendampingan dari pemilihan lokasi, strategi *grand opening*, hingga optimalisasi omset harian. Anda tidak pernah berjalan sendirian.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700">
                <HeartHandshake size={300} />
              </div>
            </motion.div>

            {/* Bento Box 2 */}
            <motion.div 
              {...fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-[#c2f21f] p-12 rounded-[2.5rem] flex flex-col justify-between group overflow-hidden relative shadow-lg shadow-[#c2f21f]/20"
            >
              <div className="relative z-10">
                <Rocket className="w-12 h-12 text-[#132b26] mb-8 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500" />
                <h3 className="text-2xl font-bold mb-4 text-[#132b26] leading-tight">Inovasi R&D Berkelanjutan</h3>
                <p className="text-[#132b26]/70 font-medium">Tim kami terus memperbarui formulasi menu agar selalu relevan dengan tren pasar.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>

            {/* Bento Box 3 */}
            <motion.div 
              {...fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:border-emerald-200 transition-colors">
                <ShieldCheck className="w-8 h-8 text-[#132b26] group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#132b26]">Standardisasi Mutu</h3>
              <p className="text-slate-500 font-medium leading-relaxed">SOP operasional terstruktur yang sangat mudah diadaptasi oleh SDM tanpa pengalaman F&B sekalipun.</p>
            </motion.div>

            {/* Bento Box 4 - Mini CTA */}
            <motion.div 
              {...fadeInUp}
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-[#132b26] p-12 rounded-[2.5rem] text-white flex flex-col md:flex-row items-start md:items-center justify-between group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
              <div className="max-w-md relative z-10 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold mb-3 leading-tight">Siap Membangun Aset <span className="text-[#c2f21f]">Masa Depan?</span></h3>
                <p className="text-white/60 font-medium text-lg">Hubungi representatif kami untuk diskusi lebih lanjut.</p>
              </div>
              <Link to="/kontak" className="w-16 h-16 shrink-0 bg-[#c2f21f] rounded-full flex items-center justify-center text-[#132b26] hover:bg-white transition-colors relative z-10 group-hover:rotate-45 duration-300">
                <ArrowRight size={28} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. GRAND CTA SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 rounded-[3rem] p-12 md:p-24 text-center border border-slate-200 relative overflow-hidden shadow-2xl shadow-slate-200/50"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-gradient-to-b from-emerald-100/50 to-transparent blur-3xl pointer-events-none rounded-full"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-[#132b26] tracking-tight">Mulai Kemitraan Anda Hari Ini.</h2>
              <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed">
                Ribuan mitra telah membuktikan sistem kami. Ambil langkah pertama untuk mengamankan wilayah pemasaran di kota Anda.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link to="/kontak" className="px-10 py-5 bg-[#132b26] text-white rounded-full font-bold text-lg hover:shadow-[0_10px_30px_rgba(19,43,38,0.3)] hover:-translate-y-1 transition-all duration-300">
                  Konsultasi Gratis
                </Link>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="px-10 py-5 bg-white border-2 border-slate-200 text-[#132b26] rounded-full font-bold text-lg hover:border-[#132b26] hover:bg-slate-50 transition-all duration-300">
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;