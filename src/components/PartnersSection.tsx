const partners = [
  { name: "Mybestea", logo: "/logos/1.webp" },
  { name: "You Need Mie", logo: "/logos/2.webp" },
  { name: "Mentoast", logo: "/logos/3.webp" },
  { name: "Kopi Ibukota", logo: "/logos/4.webp" },
  { name: "Esteh Ibukota", logo: "/logos/5.webp" },
  { name: "Kentang Gantenk", logo: "/logos/6.webp" },
  { name: "Raja Steak", logo: "/logos/7.webp" },
  { name: "Nice Coffee", logo: "/logos/8.webp" },
  { name: "Seblak Express", logo: "/logos/9.webp" },
  { name: "Chick Ichick", logo: "/logos/10.webp" },
  { name: "Merlumer", logo: "/logos/11.webp" },
  { name: "Chickuruyuk", logo: "/logos/12.webp" },
  { name: "Tahu Nyonyor", logo: "/logos/13.webp" },
];

const PartnersSection = () => {
  return (
    <section className="py-14 border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Brand Usaha Kami
        </p>

        {/* Grid Logo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="
                group
                flex items-center justify-center
                h-24
                rounded-xl
                border border-border
                bg-muted/40
                hover:bg-background
                hover:shadow-md
                transition-all duration-300
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="
                  max-h-10
                  object-contain
                  grayscale
                  opacity-70
                  group-hover:grayscale-0
                  group-hover:opacity-100
                  transition-all duration-300
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;