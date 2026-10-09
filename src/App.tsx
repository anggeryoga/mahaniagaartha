import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // 🔥 TAMBAHAN UNTUK SEO
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  useScrollToSectionOnMount,
  tampilkanYangTerlihat,
} from "@/hooks/useSectionNav";

import Index from "./pages/Index.tsx";
import Career from "./pages/Career.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import CekStatus from "./pages/CekStatus.tsx";
import About from "./pages/About.tsx"; 

const queryClient = new QueryClient();

/** Menerapkan gulir ke section setelah navigasi antar-halaman */
const SectionScroller = () => {
  useScrollToSectionOnMount();
  return null;
};

/**
 * Mengaktifkan animasi "muncul saat di-scroll".
 * Kelas .js-reveal ditambahkan dari JS agar konten tetap terlihat
 * kalau JavaScript gagal jalan (progressive enhancement).
 */
const RevealOnScroll = () => {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");

    const els = document.querySelectorAll<HTMLElement>(".reveal");

    // Tidak ada IntersectionObserver? Tampilkan semuanya.
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      {
        // Ambang longgar: elemen yang baru menyentuh tepi bawah layar
        // langsung ditampilkan, supaya tidak ada kartu tertinggal transparan.
        rootMargin: "0px 0px 12% 0px",
        threshold: 0,
      }
    );

    els.forEach((el) => io.observe(el));

    // Apa pun yang sudah terlihat saat halaman dibuka, tampilkan langsung.
    // Menutup kasus "buka #services langsung" dan "sudah berhenti di posisi itu".
    tampilkanYangTerlihat();
    window.setTimeout(() => tampilkanYangTerlihat(), 600);

    // Halaman baru yang dipasang lewat navigasi klien tidak pernah disentuh
    // observer yang sama, jadi elemennya bisa tertinggal transparan. Periksa
    // ulang setiap kali DOM berubah, lalu tampilkan yang ada di area layar.
    const mo = new MutationObserver(() => {
      io.disconnect();
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (el.classList.contains("is-in")) return;
        io.observe(el);
      });
      tampilkanYangTerlihat();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Jaring pengaman terakhir: apa pun yang berada dekat area layar tetap
    // ditampilkan. Konten tidak boleh tersembunyi hanya karena animasi gagal.
    const jaring = window.setTimeout(() => {
      tampilkanYangTerlihat(1.2);
    }, 1600);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(jaring);
    };
  }, []);

  return null;
};

const App = () => (
  // 🔥 Bungkus aplikasi dengan HelmetProvider di sini
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SectionScroller />
          <RevealOnScroll />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/career" element={<Career />} />
            <Route path="/cek-status" element={<CekStatus />} />
            <Route path="/admin-hrd" element={<AdminDashboard />} />


            <Route path="/tentang" element={<About />} />



            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;