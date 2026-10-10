import { ArrowUpRight, MessageCircle } from "lucide-react";

/* Foto asli tim sales — JANGAN diganti tanpa izin klien.
   Sumber: /public/dm/ */
const teamMembers = [
  {
    name: "Livya Ayu",
    role: "Sales Marketing",
    image: "/dm/dm%201.webp",
    phone: "6282124952606",
  },
  {
    name: "Berliiana",
    role: "Sales Marketing",
    image: "/dm/dm%202.webp",
    phone: "6285117276822",
  },
  {
    name: "Kristianti",
    role: "Sales Marketing",
    image: "/dm/dm%204.webp",
    phone: "6281234086100",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section section--white">
      <div className="wrap">
        <div className="sec-head sec-head--rule reveal">
          <span className="sec-index">02</span>
          <div className="sec-head__main">
            <span className="eyebrow">Team Sales Kami</span>
            <h2 className="sec-title">
              Siap Membantu Anda Memulai Usaha dari Nol Hingga Jalan
            </h2>
          </div>
        </div>

        <div className="grid gap-[var(--gap)] sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const message = encodeURIComponent(
              `Halo ${member.name}, saya tertarik untuk memulai usaha dari Website Perusahaan. Bisa dibantu?`
            );
            const waLink = `https://wa.me/${member.phone}?text=${message}`;

            return (
              <a
                key={member.name}
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card card--hover reveal group text-center"
              >
                <span className="relative block w-[104px] h-[104px] mx-auto mb-4">
                  <span
                    className="absolute inset-0 rounded-full bg-purple-50"
                    aria-hidden="true"
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover photo--circle"
                    loading="lazy"
                    width={104}
                    height={104}
                  />
                </span>

                <h3 className="card__title !mb-1">{member.name}</h3>
                <p className="text-[length:var(--fs-xs)] font-semibold uppercase tracking-wider text-[color:var(--text-2)]">
                  {member.role}
                </p>

                <span className="mt-3 inline-flex items-center justify-center gap-1.5 text-[length:var(--fs-sm)] font-semibold text-indigo opacity-0 group-hover:opacity-100 transition-opacity">
                  <MessageCircle size={14} />
                  Chat WhatsApp
                  <ArrowUpRight size={13} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
