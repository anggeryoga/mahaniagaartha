import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSectionNav } from "@/hooks/useSectionNav";

/** href: "#id" = section di Beranda · route: path halaman sendiri */
const navLinks = [
  { label: "Beranda", href: "#top" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Tim Sales", href: "#team" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Brand Kami", href: "#partners" },
  { label: "Kontak", href: "#contact" },
];

const pageLinks = [{ label: "Karir", route: "/career" }];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const goToSection = useSectionNav();

  // Kunci scroll latar saat drawer terbuka + tutup saat pindah halaman
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [location.pathname]);

  const linkCls =
    "text-[length:var(--fs-sm)] font-medium text-[color:var(--text)] transition-colors hover:text-purple";

  const isActive = (route: string) => location.pathname === route;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/92 backdrop-blur-md border-b border-[var(--border)]">
      <div className="wrap flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 min-w-0"
          aria-label="Maha Niaga Artha - Beranda"
        >
          <img
            src="/logo.svg"
            alt=""
            className="w-9 h-9 object-contain rounded-[var(--r-sm)] shrink-0"
            width={36}
            height={36}
          />
          <span className="font-semibold text-[17px] sm:text-lg leading-none tracking-tight text-indigo truncate">
            Maha Niaga Artha
          </span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              className={linkCls}
              onClick={() => goToSection(link.href.slice(1))}
            >
              {link.label}
            </button>
          ))}
          {pageLinks.map((link) => (
            <Link
              key={link.label}
              to={link.route}
              className={
                isActive(link.route)
                  ? "text-[length:var(--fs-sm)] font-semibold text-indigo"
                  : linkCls
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Aksi desktop — tanpa Login (halaman admin hanya lewat URL) */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => goToSection("contact")}
            className="btn btn--primary !py-2.5 !px-5 !text-[13.5px]"
          >
            <MessageCircle size={15} />
            Konsultasi Gratis
          </button>
        </div>

        {/* Tombol menu mobile */}
        <button
          className="lg:hidden grid place-items-center w-10 h-10 rounded-[var(--r-sm)] border border-[var(--border)] text-indigo"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        className={`lg:hidden bg-white overflow-hidden border-t transition-[grid-template-rows] duration-300 ${
          open
            ? "grid grid-rows-[1fr] border-[var(--border)]"
            : "grid grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="min-h-0 overflow-y-auto max-h-[calc(100dvh-4rem)]">
          <ul className="px-5 py-1">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className="border-b border-[var(--border)] last:border-b-0"
              >
                <button
                  type="button"
                  className="group flex w-full items-center gap-3.5 text-left py-4 text-[length:var(--fs-body)] font-medium text-[color:var(--text)]"
                  onClick={() => {
                    setOpen(false);
                    goToSection(link.href.slice(1));
                  }}
                >
                  <span className="nav-nomor" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{link.label}</span>
                </button>
              </li>
            ))}
            {pageLinks.map((link, i) => {
              const aktif = isActive(link.route);
              return (
                <li
                  key={link.label}
                  className="border-b border-[var(--border)] last:border-b-0"
                >
                  <Link
                    to={link.route}
                    className={`group flex items-center gap-3.5 py-4 text-[length:var(--fs-body)] ${
                      aktif ? "font-semibold text-indigo" : "font-medium text-[color:var(--text)]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className={`nav-nomor ${aktif ? "nav-nomor--aktif" : ""}`}
                      aria-hidden="true"
                    >
                      {String(navLinks.length + i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-2.5 p-5 pt-4">
            <button
              type="button"
              className="btn btn--primary btn--block"
              onClick={() => {
                setOpen(false);
                goToSection("contact");
              }}
            >
              <MessageCircle size={16} />
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
