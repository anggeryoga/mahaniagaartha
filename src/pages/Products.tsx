import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ArrowLeft, Package, Truck, MapPin, Store } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// DATA BRAND (Saya gunakan 9 data dari Anda dengan tambahan deskripsi SEO-friendly)
const brands = [
  { name: "Mybestea", logo: "/logos/1.webp", desc: "Franchise minuman teh kekinian dengan varian rasa premium yang disukai milenial." },
  { name: "You Need Mie", logo: "/logos/2.webp", desc: "Waralaba mie pedas berlevel dengan topping melimpah dan bumbu rahasia otentik." },
  { name: "Mentoast", logo: "/logos/3.webp", desc: "Konsep bisnis roti bakar modern dengan isian manis dan gurih untuk segala suasana." },
  { name: "Kopi Ibukota", logo: "/logos/4.webp", desc: "Kopi susu gula aren dengan biji kopi pilihan nusantara. Cita rasa khas kopi senja." },
  { name: "Esteh Ibukota", logo: "/logos/5.webp", desc: "Es teh manis jumbo dengan racikan daun teh asli yang menyegarkan dahaga." },
  { name: "Kentang Gantenk", logo: "/logos/6.webp", desc: "Camilan french fries dengan bumbu tabur aneka rasa yang renyah dan gurih." },
  { name: "Raja Steak", logo: "/logos/7.webp", desc: "Paket usaha steak ayam dan sapi dengan harga kaki lima namun rasa bintang lima." },
  { name: "Nice Coffee", logo: "/logos/8.webp", desc: "Kedai kopi modern berkonsep minimalis, menyajikan espresso base dan frappe." },
  { name: "Seblak Express", logo: "/logos/9.webp", desc: "Peluang usaha seblak prasmanan pedas nampol dengan puluhan topping menarik." },
];

// DATA FAQ UNTUK SEO & AI READABILITY
const faqs = [
  {
    question: "Pengiriman paket usaha dan bahan baku dikirim dari mana?",
    answer: "Seluruh kelengkapan paket usaha, booth, dan bahan baku dikirim langsung dari gudang pusat Maha Niaga Artha yang berlokasi di **Jepara, Jawa Tengah**."
  },
  {
    question: "Apakah ada biaya ongkos kirim (ongkir) untuk pengiriman paket franchise?",
    answer: "Ya, biaya ongkos kirim ditanggung oleh mitra. Namun jangan khawatir, kami telah bekerja sama dengan ekspedisi kargo terpercaya untuk memberikan tarif pengiriman yang paling terjangkau ke seluruh Indonesia."
  },
  {
    question: "Berapa lama estimasi pengiriman paket usaha sampai ke lokasi mitra?",
    answer: "Untuk wilayah Pulau Jawa, estimasi pengiriman sekitar **2-4 hari kerja**. Sedangkan untuk luar Pulau Jawa (Sumatera, Kalimantan, Sulawesi, dll) estimasi menyesuaikan jadwal kapal kargo, rata-rata **7-14 hari kerja**."
  },
  {
    question: "Apakah saya bisa melakukan survey langsung ke kantor pusat?",
    answer: "Sangat bisa! Kami sangat terbuka jika Anda ingin berkunjung, mencicipi tester produk (food tasting), dan berkonsultasi langsung di kantor pusat kami di Jepara."
  }
];

// FUNGSI UNTUK MERUBAH **TEKS** MENJADI BOLD
const highlightText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-extrabold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

// GENERATE JSON-LD UNTUK SEO GOOGLE & AI
const generateSEOData = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": brands.map((brand, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Brand",
        "name": brand.name,
        "description": brand.desc,
        "logo": `https://domainkamu.com${brand.logo}` // Ganti dengan domain asli nanti
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\*\*/g, "") // Hilangkan markdown bintang untuk raw JSON
      }
    }))
  };

  return `[${JSON.stringify(itemListSchema)}, ${JSON.stringify(faqSchema)}]`;
};

const Products = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      {/* ================= SEO HELMET ================= */}
      <Helmet>
        <title>Daftar Brand Franchise F&B | Kemitraan Maha Niaga Artha</title>
        <meta 
          name="description" 
          content="Temukan berbagai pilihan paket usaha dan franchise makanan minuman (F&B) terlaris dari Maha Niaga Artha. Mulai dari Es Teh, Kopi, Mie Pedas, hingga Seblak." 
        />
        <meta name="keywords" content="daftar franchise F&B, paket usaha minuman, waralaba mie pedas, franchise es teh, maha niaga artha jepara, paket usaha makanan" />
        
        <meta property="og:title" content="Daftar Brand Franchise Terlaris - Maha Niaga Artha" />
        <meta property="og:description" content="Pilih brand kemitraan yang paling cocok dengan target pasarmu. Bergabunglah bersama ribuan mitra sukses kami di seluruh Indonesia." />
        <meta property="og:type" content="website" />
        
        {/* Inject JSON-LD Daftar Produk & FAQ */}
        <script type="application/ld+json">
          {generateSEOData()}
        </script>
      </Helmet>
      {/* ============================================= */}

      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center mx-auto"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Kembali ke Beranda
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Pilihan Brand Kemitraan F&B Terbaik
            </h1>

            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Maha Niaga Artha menaungi berbagai brand waralaba makanan dan minuman kekinian yang telah terbukti laris dan menguntungkan. Temukan peluang usahamu di sini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BRAND GRID SECTION */}
      <section className="py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3 block">
              Daftar Produk Kami
            </span>
            <h2 className="text-3xl font-bold text-foreground">
              Jelajahi Brand Kemitraan Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all flex flex-col"
              >
                {/* Image Area */}
                <div className="h-56 w-full bg-white flex items-center justify-center p-6 border-b border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={brand.logo} 
                    alt={`Logo Franchise ${brand.name}`} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 relative z-10 drop-shadow-sm"
                    loading="lazy"
                  />
                </div>
                
                {/* Content Area */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {brand.desc}
                    </p>
                  </div>
                  <button className="mt-6 w-full py-3 rounded-xl bg-primary/10 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Pelajari Paket Usaha
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION (SANGAT BAGUS UNTUK SEO PAA - People Also Ask) */}
      <section className="py-20 lg:py-24 bg-card border-t border-border" id="faq-pengiriman">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3 block">
              Informasi Operasional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pertanyaan Seputar Pengiriman & Kemitraan
            </h2>
            <p className="text-muted-foreground">
              Segala hal yang perlu Anda ketahui sebelum bergabung menjadi mitra bisnis kami.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${openFaq === index ? 'border-primary bg-primary/5' : 'border-border bg-background hover:border-primary/30'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openFaq === index}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${openFaq === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {index === 0 && <Store size={18} />}
                      {index === 1 && <Package size={18} />}
                      {index === 2 && <Truck size={18} />}
                      {index === 3 && <MapPin size={18} />}
                    </div>
                    <h3 className={`font-bold md:text-lg ${openFaq === index ? 'text-primary' : 'text-foreground'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-primary' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 pl-[4.5rem] text-muted-foreground text-sm leading-relaxed">
                        {highlightText(faq.answer)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;