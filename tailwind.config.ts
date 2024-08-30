import type { Config } from "tailwindcss";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "conversion-01": "linear-gradient(92deg, #FF6B00 0%, #F90 100%)",
        "conversion-02": "linear-gradient(92deg, #03AACE 0%, #49D8D8 100%)",
        "conversion-disabled":
          "linear-gradient(92deg, #D3D3D3 0%, #E2E2E2 100%)",
        "conversion-transparent":
          "linear-gradient(180deg, #DDE6ED 0%, rgba(217, 217, 217, 0.25) 100%)",
        "card-portfolio": "url('/images/bg-card.jpg')",
      },
      boxShadow: {
        circle: "0px 0px 5px #211e35",
      },
      colors: {
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
        text: {
          100: "#FFF",
          300: "#D2D2D2",
          400: "#626262",
          500: "#28282E",
        },
        bg: {
          100: "#FFF",
        },
        gray: {
          100: "#DDE6ED",
          200: "#9DB2BF",
          300: "#526D82",
          400: "#393E46",
          500: "#222831",
          600: "#f1f5f9",
        },
        blue: {
          200: "#31A8FF",
          500: "#ABC6FF",
          800: "#2950A3",
          900: "#477CEB",
        },
        yellow: {
          500: "#FEDBA2",
          800: "#FAC46B",
        },
        success: {
          100: "rgb(225, 245, 235)",
          200: "rgba(0, 221, 140, 0.40)",
        },
        orange: {
          100: "#FF9A00",
          200: "#FF8465",
          900: "#FCCE82",
        },
        pink: {
          300: "#FF61F6",
          500: "#FFB4E4",
          800: "#DA69B1",
          900: "#FA99D7",
        },
      },
      fontFamily: {
        mitr: ["Mitr"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        dash: {
          to: {
            "stroke-dashoffset": "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "shadow-discovery-card": (color) => ({
            boxShadow: `0px 0px 5px 0px rgba(240, 240, 240, 0.40) inset, 0px 0px 8px 0px ${color}`,
          }),
          "shadow-discovery-icon": (color) => ({
            boxShadow: `0px 0px 12px 0px ${color}`,
          }),
          "shadow-half-circle": (size) => ({
            boxShadow: `0px ${size} ${size} 0px rgba(0, 0, 0, 0.25)`,
          }),
          "shadow-tool-sp": (color) => ({
            boxShadow: `0px 0px 5.278px 0px ${color}`,
          }),
          "shadow-tool-tablet": (color) => ({
            boxShadow: `0px 0px 15px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 10px 0px ${color}`,
          }),
          "shadow-workflow": (color) => ({
            boxShadow: `0px 0px 10px 0px ${color}`,
          }),
        },
        { values: flattenColorPalette(theme("colors")) }
      );
    }),
    plugin(function ({ addVariant }) {
      addVariant(
        "mobile-only",
        "@media screen and (max-width: theme('screens.sm'))"
      ); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),
  ],
} satisfies Config;

export default config;
