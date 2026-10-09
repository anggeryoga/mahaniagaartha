import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Navigasi ke section di halaman Beranda dari halaman mana pun.
 *
 * Masalah sebelumnya: <a href="/#about"> tidak menggulir di react-router.
 * Hook ini menangani: sudah di Beranda → gulir halus; di halaman lain →
 * pindah ke "/" dulu, lalu gulir setelah halaman siap.
 */
export const useSectionNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = useCallback(
    (id: string) => {
      if (id === "top" || id === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const selector = `#${id}`;

      // Sudah di Beranda: langsung gulir halus
      if (location.pathname === "/") {
        const el = document.querySelector(selector);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // Perbarui hash tanpa memicu lompatan kedua
          window.history.replaceState(null, "", selector);
        }
        return;
      }

      // Dari halaman lain: pindah ke Beranda lalu gulir
      navigate("/", { state: { scrollTo: id } });
    },
    [location.pathname, navigate]
  );

  return goToSection;
};

/**
 * Dipasang sekali di App. Menjalankan gulir setelah navigasi
 * antar-halaman selesai dan elemen target sudah ada di DOM.
 */
export const useScrollToSectionOnMount = () => {
  const location = useLocation();

  useEffect(() => {
    const id =
      (location.state as { scrollTo?: string } | null)?.scrollTo ||
      (location.hash ? location.hash.slice(1) : "");

    if (!id) return;

    // Tunggu halaman baru selesai render
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [location]);
};
