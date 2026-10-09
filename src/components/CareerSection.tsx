import { Helmet } from "react-helmet-async";
import { TrendingUp, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HR_EMAIL = "cvmahaniagaartha.hrd@gmail.com";

const careers = [
  {
    icon: Users,
    title: "Manager Operasional",
    type: "Full-time",
    description:
      "Mengelola operasional harian, memastikan semua outlet berjalan lancar, serta mengawasi tim dan kualitas layanan.",
  },
  {
    icon: TrendingUp,
    title: "Staff Logistik",
    type: "Full-time",
    description:
      "Bertanggung jawab atas pengadaan, distribusi bahan baku, serta memastikan kebutuhan operasional tersedia tepat waktu.",
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="section section--paper">
      <div className="wrap">
        <div className="sec-head sec-head--split reveal">
          <div>
            <span className="eyebrow">Karir</span>
            <h2 className="sec-title">Bergabung Bersama Tim Kami</h2>
          </div>
          <p className="sec-sub">
            Kami membuka kesempatan bagi Anda yang ingin berkembang bersama CV
            Maha Niaga Artha dalam membangun dan mengelola bisnis makanan &amp;
            minuman.
          </p>
        </div>

        <div className="grid gap-[var(--gap)] md:grid-cols-2">
          {careers.map((career) => (
            <div key={career.title} className="card card--hover reveal">
              <span className="card__icon">
                <career.icon size={20} />
              </span>

              <span className="text-[length:var(--fs-xs)] font-bold uppercase tracking-wider text-indigo mb-2">
                {career.type}
              </span>

              <h3 className="card__title">{career.title}</h3>
              <p className="card__text flex-1">{career.description}</p>

              {/* Semua lamaran masuk lewat email HRD */}
              <a
                href={`mailto:${HR_EMAIL}`}
                className="mt-6 inline-flex items-center gap-1.5 text-[length:var(--fs-sm)] font-semibold text-indigo hover:underline break-all min-h-[44px]"
              >
                Lamar via Email
                <ArrowRight size={14} className="shrink-0" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link to="/career" className="btn btn--primary btn--lg">
            Lihat Semua Lowongan
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
