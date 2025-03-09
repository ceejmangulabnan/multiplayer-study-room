import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sunset: {
          50: '#fdf7ef',
          100: '#fbedd9',
          200: '#f7d8b1',
          300: '#f1bd80',
          400: '#eb984c',
          500: '#e67b29',
          600: '#df6620',
          700: '#b34b1b',
          800: '#8e3d1e',
          900: '#73331b',
          950: '#3e180c',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#df6620",
          "primary-content": "oklch(98% 0.003 247.858)",
          "base-100": "oklch(100% 0 0)",
          "base-200": "oklch(98% 0 0)",
          "base-300": "oklch(95% 0 0)",
          "base-content": "oklch(21% 0.006 285.885)",
          "accent": "oklch(98% 0.003 247.858)",
          "accent-content": "oklch(12% 0.042 264.695)",
          "neutral": "oklch(55% 0.027 264.364)",
          "neutral-content": "oklch(98% 0.003 247.858)",
        },
        dark: {
          primary: "#df6620",
          "primary-content": "oklch(98% 0.003 247.858)",
          "base-100": "oklch(25.33% 0.016 252.42)",
          "base-200": "oklch(23.26% 0.014 253.1)",
          "base-300": "oklch(21.15% 0.012 254.09)",
          "base-content": "oklch(97.807% 0.029 256.847)",
          "accent": "oklch(12% 0.042 264.695)",
          "accent-content": "oklch(98% 0.003 247.858)",
          "neutral": "oklch(55% 0.027 264.364)",
          "neutral-content": "oklch(98% 0.003 247.858)",
        },
      }
    ],
    darkTheme: "dark",
    styled: true,
    utils: true,
  },
} satisfies Config;
