import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        "gradient-x": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "electric-pulse": {
          "0%, 100%": {
            strokeDasharray: "0 50",
            strokeDashoffset: "0",
            opacity: "0.3",
          },
          "50%": {
            strokeDasharray: "30 50",
            strokeDashoffset: "-25",
            opacity: "0.8",
          },
        },
        "electric-flicker": {
          "0%, 100%": {
            opacity: "0.1",
            transform: "scale(0.8)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
            boxShadow: "0 0 10px 2px rgba(79, 139, 255, 0.7)",
          },
        },
        "electric-flow": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        "electric-flow-vertical": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-x": "gradient-x 3s ease infinite",
        "electric-pulse": "electric-pulse 3s ease-in-out infinite",
        "electric-pulse-delay": "electric-pulse 3s ease-in-out 1s infinite",
        "electric-pulse-delay-2": "electric-pulse 3s ease-in-out 2s infinite",
        "electric-flicker": "electric-flicker 2s ease-in-out infinite",
        "electric-flicker-delay": "electric-flicker 2s ease-in-out 0.7s infinite",
        "electric-flicker-delay-2": "electric-flicker 2s ease-in-out 1.4s infinite",
        "electric-flow": "electric-flow 4s linear infinite",
        "electric-flow-reverse": "electric-flow 4s linear 2s infinite reverse",
        "electric-flow-vertical": "electric-flow-vertical 4s linear infinite",
        "electric-flow-vertical-reverse": "electric-flow-vertical 4s linear 2s infinite reverse",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

