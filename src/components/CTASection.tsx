import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5980769613957!2d110.6806204!3d-6.5723027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e711f570d88e8b7%3A0xef17108ab63f4d5b!2sCV%20Maha%20Niaga%20Artha!5e0!3m2!1sen!2sid!4v1791561401024!5m2!1sen!2sid";

const CTASection = () => {
  return (
    <section id="contact" className="section section--white">
      <div className="wrap">
        <div className="bg-indigo rounded-[var(--r-xl)] px-8 py-12 lg:px-16 lg:py-16 text-center relative overflow-hidden">
          {/* Aksen geometris: lingkaran garis tipis di sudut */}
          <span
            className="pointer-events-none absolute -top-24 -right-16 w-[320px] h-[320px] rounded-full border border-white/15"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="text-white mb-4 max-w-[24ch] mx-auto text-balance">
              Mau Mulai Usaha Tapi Bingung Mulai Dari Mana?
            </h2>

            <p className="text-white/75 max-w-[52ch] mx-auto mb-9 text-[length:var(--fs-lead)] leading-[var(--lh-quiet)]">
              Konsultasi gratis bersama tim kami dan temukan paket usaha yang
              cocok untuk Anda. Semua sudah disiapkan, Anda tinggal mulai.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+6281212125422"
                className="btn btn--on-dark btn--lg"
              >
                <Phone size={16} />
                Telepon Sekarang
              </a>
              <a
                href="mailto:cvmahaniagaartha.hrd@gmail.com"
                className="btn btn--ghost-light btn--lg"
              >
                <Mail size={16} />
                Kirim Email
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 mt-9 pt-8 border-t border-white/15 text-white/70 text-[length:var(--fs-sm)]">
              <span className="flex items-center gap-2 min-w-0 break-all">
                <Mail size={14} className="shrink-0" />
                cvmahaniagaartha.hrd@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                0812-1212-5422
              </span>
            </div>
          </div>
        </div>

        {/* ── LOKASI KANTOR ── */}
        <div className="mt-8 sm:mt-10">
          <div className="sec-head sec-head--split reveal">
            <div>
              <span className="eyebrow">Lokasi Kami</span>
              <h2 className="sec-title">Kunjungi Kantor Kami</h2>
            </div>
            <p className="sec-sub flex items-start gap-2">
              <MapPin size={16} className="text-purple shrink-0 mt-1" />
              <span>
                CV Maha Niaga Artha, Jepara, Jawa Tengah. Silakan datang
                langsung atau hubungi kami untuk membuat janji terlebih dahulu.
              </span>
            </p>
          </div>

          <div className="map-frame reveal">
            <iframe
              src={MAPS_EMBED}
              title="Lokasi kantor CV Maha Niaga Artha di Jepara"
              className="map-frame__inner"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="text-center mt-5">
            <a
              href="https://maps.google.com/?q=CV+Maha+Niaga+Artha+Jepara"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              <ExternalLink size={15} />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
