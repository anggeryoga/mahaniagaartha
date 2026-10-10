const partners = [
  { name: "Mybestea", logo: "/logos/mybestea.webp" },
  { name: "You Need Mie", logo: "/logos/youneedmie.webp" },
  { name: "Mentoast", logo: "/logos/mentoast.webp" },
  { name: "Esteh Ibukota", logo: "/logos/estehibukota.webp" },
  { name: "Kentang Gantenk", logo: "/logos/kentang-gantenk.webp" },
  { name: "K-Mie", logo: "/logos/k-mie.webp" },
  { name: "Benice Coffee", logo: "/logos/benicecoffee.webp" },
  { name: "Breadcoin", logo: "/logos/breadcoin.webp" },
  { name: "Chickuruyuk", logo: "/logos/chickuruyuk.webp" },
  { name: "El Choco", logo: "/logos/elchoco.webp" },
  { name: "Merlumer", logo: "/logos/merlumer.webp" },
  { name: "Nicepresso", logo: "/logos/nicepresso.webp" },
  { name: "Nyemilin", logo: "/logos/nyemilin.webp" },
  { name: "Xuancha", logo: "/logos/xuancha.webp" },
];

const row1 = partners.slice(0, Math.ceil(partners.length / 2));
const row2 = partners.slice(Math.ceil(partners.length / 2));

const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="section section--paper section--edge !pb-0 overflow-hidden"
    >
      <div className="wrap">
        <div className="sec-head sec-head--split reveal">
          <div>
            <span className="eyebrow">Brand Usaha Kami</span>
            <h2 className="sec-title">Empat Belas Brand, Satu Sistem</h2>
          </div>
          <p className="sec-sub">
            Semua brand di bawah ini sudah beroperasi dan bisa Anda pilih
            sesuai target pasar dan lokasi usaha.
          </p>
        </div>
      </div>

      {/* Dua baris marquee berlawanan arah */}
      <div className="overflow-hidden mb-4 sm:mb-5">
        <div className="flex gap-4 sm:gap-6 w-max marquee items-center">
          {[...row1, ...row1].map((p, i) => (
            <div key={`a${i}`} className="logo-box logo-box--marquee">
              <img src={p.logo} alt={p.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden pb-12 sm:pb-14">
        <div className="flex gap-4 sm:gap-6 w-max marquee-reverse items-center">
          {[...row2, ...row2].map((p, i) => (
            <div key={`b${i}`} className="logo-box logo-box--marquee">
              <img src={p.logo} alt={p.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
