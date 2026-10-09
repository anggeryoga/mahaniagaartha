import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        /* Palet klien — solid, tanpa gradient.
           Komposisi: off-white 65% · indigo 25% · purple 8% · amber 2% */
        indigo: {
          DEFAULT: "#252653",
          700: "#1b1c3e",
          500: "#3a3b6e",
          100: "#e3e4ef",
          50: "#f4f4f9",
        },
        purple: {
          DEFAULT: "#6554c0",
          700: "#5344a8",
          100: "#e6e3f5",
          50: "#f2f0fa",
        },
        amber: {
          DEFAULT: "#e9a23b",
          600: "#d18c26",
          100: "#fdf3e0",
          text: "#7a5410",
        },

        /* Skala warna shadcn/ui — dipetakan ke palet klien supaya
           komponen bawaan tetap konsisten. Semua solid. */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      fontFamily: {
        /* Satu keluarga font, seperti referensi */
        sans: [
          "DM Sans",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },

      borderRadius: {
        sm: "10px",
        md: "12px",
        lg: "16px",
        xl: "22px",
        pill: "999px",
      },

      boxShadow: {
        xs: "0 1px 2px rgba(23,43,99,.05)",
        sm: "0 2px 6px rgba(23,43,99,.04), 0 6px 16px rgba(23,43,99,.04)",
        md: "0 4px 12px rgba(23,43,99,.05), 0 12px 32px rgba(23,43,99,.06)",
        lg: "0 8px 24px rgba(23,43,99,.07), 0 24px 60px rgba(23,43,99,.08)",
      },

      maxWidth: {
        wrap: "1320px",
        narrow: "900px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,.61,.36,1)",
        "out-quint": "cubic-bezier(.16,1,.3,1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
