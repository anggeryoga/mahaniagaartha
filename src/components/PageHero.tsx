import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  /** Contoh chip di kanan — opsional */
  facts?: { num: string; label: string }[];
};

/**
 * Hero halaman dalam — panel biru solid.
 * Teks di kiri, kartu fakta di kanan supaya komposisinya tidak berat sebelah.
 */
const PageHero = ({ eyebrow, title, lead, facts }: Props) => (
  <section className="bg-indigo text-white pt-28 pb-14 lg:pt-32 lg:pb-16 relative overflow-hidden">
    <span
      className="pointer-events-none absolute -top-2/5 -right-24 w-[380px] h-[380px] rounded-full border border-white/15"
      aria-hidden="true"
    />

    <div className="wrap relative">
      <div
        className={
          facts?.length
            ? "grid gap-10 lg:gap-14 lg:grid-cols-[1.15fr_.85fr] items-center"
            : "max-w-[820px]"
        }
      >
        <div className="max-w-[820px]">
          <span className="eyebrow eyebrow--plain eyebrow--light">{eyebrow}</span>
          <h1 className="text-white mb-5 max-w-[18ch] text-balance">{title}</h1>
          <p className="text-white/80 text-[length:var(--fs-lead)] leading-[var(--lh-quiet)] max-w-[56ch]">
            {lead}
          </p>
        </div>

        {facts?.length ? (
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-[var(--r-lg)] border border-white/15 bg-white/10 px-4 py-4 lg:px-5 lg:py-5"
              >
                <span className="block text-[length:var(--fs-num)] font-bold leading-none mb-1.5">
                  {f.num}
                </span>
                <span className="block text-[length:var(--fs-xs)] leading-snug text-white/70">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  </section>
);

export default PageHero;
