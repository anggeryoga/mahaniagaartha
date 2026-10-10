import { useState } from "react";
import { ChevronDown, Clock, MapPin, Mail, ListChecks } from "lucide-react";

type Props = {
  job: {
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    type: string;
    location: string;
    description: string;
    qualifications: string[];
    responsibilities: string[];
    extra?: string;
    subject: string;
  };
  mailto: string;
  /** Dibuka sejak awal agar posisi pertama langsung terlihat detailnya */
  defaultOpen?: boolean;
};

/**
 * Satu lowongan sebagai baris lebar yang bisa dibuka-tutup.
 * Sebelumnya tiap lowongan berupa kartu setinggi 1400px sehingga tombol
 * lamaran terkubur jauh di bawah layar.
 */
const JobRow = ({ job, mailto, defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = job.icon;

  return (
    <article className="loker reveal" data-open={open}>
      <button
        type="button"
        className="loker__head"
        aria-expanded={open}
        aria-controls={`loker-${job.subject}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="loker__icon" aria-hidden="true">
          <Icon size={22} />
        </span>

        <span>
          <span className="loker__title block">{job.title}</span>
          <span className="loker__meta">
            <span>
              <Clock size={13} />
              {job.type}
            </span>
            <span>
              <MapPin size={13} />
              {job.location}
            </span>
            <span className="loker__count mt-1 sm:mt-0">
              <ListChecks size={12} />
              {job.qualifications.length} kualifikasi
            </span>
          </span>
        </span>

        <span className="loker__toggle" aria-hidden="true">
          <ChevronDown size={19} />
        </span>
      </button>

      <div className="loker__body" id={`loker-${job.subject}`}>
        <div>
          <div className="loker__inner">
            <p className="loker__summary !pt-0">{job.description}</p>

            <div className="loker__block">
              <h4>Kualifikasi</h4>
              <ul>
                {job.qualifications.map((item) => (
                  <li key={item}>
                    <span className="loker__dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="loker__block">
              <h4>Tanggung Jawab</h4>
              <ul>
                {job.responsibilities.map((item) => (
                  <li key={item}>
                    <span className="loker__dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {job.extra && (
              <div className="loker__tag">
                <span>Kami mencari kamu yang</span>
                <p>{job.extra}</p>
              </div>
            )}

            <div className="loker__cta">
              <p className="loker__subject">
                Subject email: <b>{job.subject}</b>
              </p>
              <a href={mailto} className="btn btn--primary">
                <Mail size={16} />
                Kirim Lamaran via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobRow;
