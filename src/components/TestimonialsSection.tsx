import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import testimonialAvatar from "@/assets/testimonial-avatar.jpg";

const testimonials = [
  {
    quote:
      "Awalnya saya ragu mulai usaha, tapi setelah ambil paket dari Maha Niaga Artha ternyata langsung bisa jualan. Alat dan bahan sudah lengkap, tinggal jalan saja.",
    name: "Rizky Pratama",
    role: "Mitra Mybestea",
    avatar: testimonialAvatar,
  },
  {
    quote:
      "Saya mulai dari nol tanpa pengalaman. Dibimbing dari awal sampai bisa jualan tiap hari. Sekarang sudah punya pelanggan tetap.",
    name: "Dewi Lestari",
    role: "Mitra Seblak Express",
    avatar: testimonialAvatar,
  },
  {
    quote:
      "Enaknya pakai sistem dari sini itu sudah siap semua. Brand sudah dikenal, jadi lebih mudah dapat pembeli dibanding mulai sendiri.",
    name: "Andi Saputra",
    role: "Mitra Kopi Ibukota",
    avatar: testimonialAvatar,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

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
                4.9
              </span>
              <span>
                <span className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="text-amber fill-amber"
                    />
                  ))}
                </span>
                <span className="block text-[length:var(--fs-xs)] uppercase tracking-wider text-[color:var(--text-2)]">
                  Review Mitra
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
                {current + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* Kanan: kutipan */}
          <figure
            key={current}
            className="card reveal !p-8 lg:!p-10 border-l-4 !border-l-blue"
          >
            <blockquote className="text-[length:var(--fs-lead)] leading-[var(--lh-quiet)] text-[color:var(--text)] mb-7">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="flex items-center gap-3.5 pt-6 border-t border-[var(--border)]">
              <img
                src={t.avatar}
                alt=""
                className="w-11 h-11 object-cover photo--circle"
                loading="lazy"
                width={44}
                height={44}
              />
              <span>
                <span className="block font-semibold text-[color:var(--text)]">
                  {t.name}
                </span>
                <span className="block text-[length:var(--fs-xs)] text-[color:var(--text-2)]">
                  {t.role}
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
