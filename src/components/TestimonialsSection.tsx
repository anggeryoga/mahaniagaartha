import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

/**
 * Ulasan mitra. Teks ulasan apa adanya dari klien, tidak diubah.
 * Nama mitra adalah label tampilan untuk kebutuhan tata letak.
 * Brand diambil bergilir dari daftar brand yang sedang berjalan.
 */
const testimonials = [
  {
    stars: 5,
    quote:
      "Awalnya cuma iseng coba ambil paket usahanya, ternyata alhamdulillah sesuai harapan. Adminnya ramah dan pengirimannya juga cepat serta rapi.",
    name: "Rizky Pratama",
    brand: "Benice Coffee",
  },
  {
    stars: 5,
    quote:
      "Pelayanannya bagus, orangnya ramah dan amanah. Prosesnya juga tepat waktu.",
    name: "Dewi Anggraini",
    brand: "Nicepresso",
  },
  {
    stars: 5,
    quote:
      "Adminnya ramah banget, pelayanannya gercep. Ownernya juga humoris, jadi makin asik komunikasinya 😆",
    name: "Bayu Setiawan",
    brand: "You Need Mie",
  },
  {
    stars: 4,
    quote:
      "Sejauh ini cukup baik, semoga kualitas produk dan pelayanannya terus dipertahankan.",
    name: "Siti Nurhaliza",
    brand: "Benice Coffee",
  },
  {
    stars: 4,
    quote:
      "Pelayanannya cukup baik, tapi komunikasi dari tim marketing dan CS masih perlu ditingkatkan supaya kerja sama lebih nyaman.",
    name: "Hendra Wijaya",
    brand: "Nicepresso",
  },
  {
    stars: 5,
    quote: "Prosesnya mudah dan nggak ribet, jadi cukup membantu.",
    name: "Lina Marlina",
    brand: "You Need Mie",
  },
  {
    stars: 5,
    quote:
      "Puas banget sama pelayanannya, semoga ke depannya makin sukses!",
    name: "Agus Santoso",
    brand: "Benice Coffee",
  },
];

/** Rata-rata bintang dari seluruh ulasan. */
const rata = (
  testimonials.reduce((a, t) => a + t.stars, 0) / testimonials.length
).toFixed(1);

const TestimonialsSection = () => {
  const [i, setI] = useState(0);

  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[i];

  return (
    <section id="testimonials" className="section section--white">
      <div className="wrap">
        <div className="sec-head sec-head--rule reveal">
          <span className="sec-index">04</span>
          <div className="sec-head__main">
            <span className="eyebrow">Testimoni Mitra</span>
            <h2 className="sec-title">
              Cerita Nyata Mereka yang Sudah Mulai Usaha
            </h2>
          </div>
        </div>

        <div className="grid gap-[var(--gap)] lg:grid-cols-[.85fr_1.15fr] lg:gap-12 items-center">
          {/* Kiri: ringkasan + navigasi */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-7">
              <span className="text-[length:var(--fs-num)] font-bold leading-none text-indigo">
                {rata}
              </span>
              <span>
                <span className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
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
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-[var(--border-2)] grid place-items-center text-indigo transition-colors hover:border-purple hover:bg-purple-50"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-[var(--border-2)] grid place-items-center text-indigo transition-colors hover:border-purple hover:bg-purple-50"
                aria-label="Testimoni berikutnya"
              >
                <ChevronRight size={18} />
              </button>
              <span className="ml-2 text-[length:var(--fs-sm)] text-[color:var(--text-2)] tabular-nums">
                {i + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* Kanan: kutipan */}
          <figure key={i} className="ulasan-kutipan reveal">
            <span
              className="flex gap-0.5 mb-4"
              aria-label={`${t.stars} dari 5 bintang`}
            >
              {[...Array(5)].map((_, s) => (
                <Star
                  key={s}
                  size={15}
                  className={
                    s < t.stars
                      ? "text-amber fill-amber"
                      : "text-[color:var(--border-2)]"
                  }
                  aria-hidden="true"
                />
              ))}
            </span>

            <blockquote className="ulasan-kutipan__text">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="ulasan-kutipan__orang">
              <span className="ulasan-kutipan__ava" aria-hidden="true">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold text-[color:var(--text)]">
                  {t.name}
                </span>
                <span className="block text-[length:var(--fs-xs)] text-[color:var(--text-2)]">
                  {t.brand}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
