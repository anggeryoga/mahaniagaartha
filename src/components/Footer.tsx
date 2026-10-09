import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo text-white/75">
      <div className="wrap py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-[var(--r-md)] bg-white shrink-0">
                <img
                  src="/logo.svg"
                  alt=""
                  className="w-7 h-7 object-contain"
                  width={28}
                  height={28}
                />
              </span>
              <span className="font-semibold text-lg text-white">
                Maha Niaga Artha
              </span>
            </div>

            <p className="text-[length:var(--fs-sm)] leading-[var(--lh-quiet)] mb-5 max-w-[38ch]">
              Partner terbaik untuk memulai usaha makanan &amp; minuman. Paket
              lengkap, siap jual, dan sudah terbukti menghasilkan.
            </p>

            <div className="space-y-2.5 text-[length:var(--fs-sm)]">
              <a
                href="mailto:cvmahaniagaartha.hrd@gmail.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-amber shrink-0" />
                <span className="break-all">
                  cvmahaniagaartha.hrd@gmail.com
                </span>
              </a>
              <a
                href="tel:+6281212125422"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-amber shrink-0" />
                0812-1212-5422
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin size={14} className="text-amber shrink-0" />
                Jepara, Jawa Tengah
              </span>
            </div>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-[length:var(--fs-sm)] font-semibold text-white mb-4">
              Perusahaan
            </h4>
            <ul className="space-y-2.5 text-[length:var(--fs-sm)]">
              <li>
                <Link to="/tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <a href="/#team" className="hover:text-white transition-colors">
                  Tim Kami
                </a>
              </li>
              <li>
                <Link to="/career" className="hover:text-white transition-colors">
                  Karir
                </Link>
              </li>
              <li>
                <Link
                  to="/cek-status"
                  className="hover:text-white transition-colors"
                >
                  Cek Status Lamaran
                </Link>
              </li>
            </ul>
          </div>
          {/* Produk */}
          <div>
            <h4 className="text-[length:var(--fs-sm)] font-semibold text-white mb-4">
              Produk Usaha
            </h4>
            <ul className="space-y-2.5 text-[length:var(--fs-sm)]">
              {[
                "Paket Minuman",
                "Paket Makanan",
                "Brand Kemitraan",
                "Paket Custom Usaha",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/#partners"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h4 className="text-[length:var(--fs-sm)] font-semibold text-white mb-4">
              Bantuan
            </h4>
            <ul className="space-y-2.5 text-[length:var(--fs-sm)]">
              <li>
                <a
                  href="/#contact"
                  className="hover:text-white transition-colors"
                >
                  Kontak
                </a>
              </li>
              <li>
                <a
                  href="/#partners"
                  className="hover:text-white transition-colors"
                >
                  Brand Kemitraan
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/6281212125422"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary mt-5 !py-2.5 !px-5 !text-[13px]"
            >
              Konsultasi Gratis
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 text-[length:var(--fs-xs)]">
          <p>© 2026 CV Maha Niaga Artha. All rights reserved.</p>
          <p>Solusi Paket Usaha Siap Jalan untuk Semua</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
