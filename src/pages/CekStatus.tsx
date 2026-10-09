import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Search,
  ArrowLeft,
  CheckCircle2,
  Clock,
  XCircle,
  UserX,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

const CekStatus = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleCekStatus = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setHasSearched(false);

    const email = e.target.email.value;
    const whatsapp = e.target.whatsapp.value;

    try {
      const { data, error } = await supabase.rpc("cek_status_lamaran", {
        p_email: email,
        p_whatsapp: whatsapp,
      });

      if (error) throw error;

      setResult(data && data.length > 0 ? data[0] : null);
      setHasSearched(true);
    } catch (error: any) {
      alert("Terjadi kesalahan sistem: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case "accepted":
        return <CheckCircle2 className="w-14 h-14 text-[#1B7A45] mb-4" />;
      case "rejected":
        return <XCircle className="w-14 h-14 text-red-600 mb-4" />;
      default:
        return <Clock className="w-14 h-14 text-indigo mb-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col">
      <Helmet>
        <title>Cek Status Lamaran | CV Maha Niaga Artha</title>
        <meta
          name="description"
          content="Cek status lamaran kerja Anda di CV Maha Niaga Artha menggunakan email dan nomor WhatsApp yang digunakan saat melamar."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navbar />

      <main className="flex-1 px-5 pt-28 pb-16 grid place-items-center">
        <div className="card reveal !p-8 w-full max-w-[440px] !shadow-[var(--sh-lg)]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[length:var(--fs-sm)] text-[color:var(--text-2)] hover:text-purple mb-6 transition-colors"
          >
            <ArrowLeft size={15} /> Kembali ke Beranda
          </Link>

          <h1 className="text-[length:var(--fs-h3)] text-indigo mb-2">
            Cek Status Lamaran
          </h1>
          <p className="text-[length:var(--fs-sm)] text-[color:var(--text-2)] mb-7">
            Masukkan email dan no. WA yang Anda gunakan saat melamar.
          </p>

          <form onSubmit={handleCekStatus} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-[length:var(--fs-sm)] font-semibold text-[color:var(--text)] mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email Anda"
                className="w-full px-4 py-3 rounded-[var(--r-md)] border border-[var(--border-2)] bg-white text-[color:var(--text)] outline-none transition focus:border-purple focus:ring-2 focus:ring-blue/15"
              />
            </div>

            <div>
              <label
                htmlFor="whatsapp"
                className="block text-[length:var(--fs-sm)] font-semibold text-[color:var(--text)] mb-1.5"
              >
                No. WhatsApp
              </label>
              <input
                id="whatsapp"
                type="text"
                name="whatsapp"
                required
                placeholder="No WA Anda"
                className="w-full px-4 py-3 rounded-[var(--r-md)] border border-[var(--border-2)] bg-white text-[color:var(--text)] outline-none transition focus:border-purple focus:ring-2 focus:ring-blue/15"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn--primary btn--block !py-3.5 disabled:opacity-60"
            >
              {loading ? (
                "Mencari data..."
              ) : (
                <>
                  <Search size={17} /> Cek Status Saya
                </>
              )}
            </button>
          </form>

          {hasSearched && (
            <div className="mt-8 p-6 text-center rounded-[var(--r-lg)] bg-[var(--bg)] border border-[var(--border)]">
              {result ? (
                <div className="flex flex-col items-center">
                  {getStatusIcon(result.status_lamaran)}
                  <h2 className="text-[length:var(--fs-h4)] text-[color:var(--text)] mb-2">
                    {result.posisi_dilamar}
                  </h2>
                  <span className="inline-block px-4 py-1.5 rounded-[var(--r-pill)] bg-white border border-[var(--border)]">
                    <span className="text-[color:var(--text-2)]">
                      Status:{" "}
                    </span>
                    <span className="font-bold text-indigo">
                      {result.status_lamaran}
                    </span>
                  </span>
                  <p className="text-[length:var(--fs-xs)] text-[color:var(--text-2)] mt-4">
                    Update terakhir:{" "}
                    {new Date(result.tanggal_update).toLocaleDateString("id-ID")}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <UserX className="w-14 h-14 text-[color:var(--text-2)] mb-4" />
                  <p className="font-semibold text-[color:var(--text)]">
                    Data tidak ditemukan.
                  </p>
                  <p className="text-[length:var(--fs-sm)] text-[color:var(--text-2)] mt-1.5">
                    Pastikan Email dan No.WA sama persis dengan saat melamar.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CekStatus;
