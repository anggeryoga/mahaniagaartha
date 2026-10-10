import { Star } from "lucide-react";

/**
 * Testimoni mitra. Teks apa adanya dari klien, tidak diubah.
 * Tidak ada nama atau brand mitra, jadi kartu dibuat tanpa identitas.
 */
const testimonials = [
  {
    stars: 5,
    quote:
      "Awalnya cuma iseng coba ambil paket usahanya, ternyata alhamdulillah sesuai harapan. Adminnya ramah dan pengirimannya juga cepat serta rapi.",
  },
  {
    stars: 5,
    quote:
      "Pelayanannya bagus, orangnya ramah dan amanah. Prosesnya juga tepat waktu.",
  },
  {
    stars: 5,
    quote:
      "Adminnya ramah banget, pelayanannya gercep. Ownernya juga humoris, jadi makin asik komunikasinya 😆",
  },
  {
    stars: 4,
    quote:
      "Sejauh ini cukup baik, semoga kualitas produk dan pelayanannya terus dipertahankan.",
  },
  {
    stars: 4,
    quote:
      "Pelayanannya cukup baik, tapi komunikasi dari tim marketing dan CS masih perlu ditingkatkan supaya kerja sama lebih nyaman.",
  },
  {
    stars: 5,
    quote: "Prosesnya mudah dan nggak ribet, jadi cukup membantu.",
  },
  {
    stars: 5,
    quote:
      "Puas banget sama pelayanannya, semoga ke depannya makin sukses!",
  },
];

/** Rata-rata bintang dari seluruh ulasan. */
const rata = (
  testimonials.reduce((a, t) => a + t.stars, 0) / testimonials.length
).toFixed(1);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section section--white">
      <div className="wrap">
        <div className="sec-head sec-head--split reveal">
          <div>
            <span className="eyebrow">Testimoni Mitra</span>
            <h2 className="sec-title">
              Cerita Nyata Mereka yang Sudah Mulai Usaha
            </h2>
          </div>

          <div className="sec-sub">
            <span className="flex items-center gap-3">
              <span className="text-[length:var(--fs-num)] font-bold leading-none text-indigo">
                {rata}
              </span>
              <span>
                <span className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="text-amber fill-amber"
                      aria-hidden="true"
                    />
                  ))}
                </span>
                <span className="block text-[length:var(--fs-xs)] uppercase tracking-wider text-[color:var(--text-2)]">
                  Dari {testimonials.length} ulasan mitra
                </span>
              </span>
            </span>
          </div>
        </div>

        <div className="ulasan-grid">
          {testimonials.map((t, i) => (
            <figure key={i} className="ulasan reveal">
              <span
                className="flex gap-0.5 mb-3"
                aria-label={`${t.stars} dari 5 bintang`}
              >
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className={
                      s < t.stars
                        ? "text-amber fill-amber"
                        : "text-[color:var(--border-2)]"
                    }
                    aria-hidden="true"
                  />
                ))}
              </span>
              <blockquote className="ulasan__text">{t.quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
