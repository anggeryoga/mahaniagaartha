import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Tampilkan elemen .reveal yang sudah menyentuh area layar.
 *
 * Dipakai sebagai jaring pengaman: kalau pengunjung berhenti tepat di posisi
 * di mana sebuah kartu cuma "mengintip" dari bawah lipatan, observer bisa
 * tidak pernah menganggapnya masuk layar. Akibatnya kartu tetap transparan
 * dan section tampak kosong. Fungsi ini menutup celah itu.
 */
export const tampilkanYangTerlihat = (ambang = 0.95) => {
  const tinggi = window.innerHeight;
  document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < tinggi * ambang && r.bottom > 0) {
      el.classList.add("is-in");
    }
  });
};

/** Jalankan pemeriksaan beberapa kali setelah gulir selesai */
export const pastikanTampil = (jeda: number[] = [400, 900]) => {
  jeda.forEach((ms) => window.setTimeout(() => tampilkanYangTerlihat(), ms));
};

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
          window.history.replaceState(null, "", selector);
          pastikanTampil();
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

    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
      }
      pastikanTampil([500, 1100]);
    });

    return () => cancelAnimationFrame(raf);
  }, [location]);
};
