/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Instrument Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'DM Serif Display', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'DM Mono', 'Courier New', 'monospace'],
      },
      colors: {
        // Warm institutional palette (inspired from prior Asplenz site).
        bg: {
          primary: '#F5F2EC',
          secondary: '#EAE6DC',
          card: '#FFFFFF',
          cardHover: '#F0EDE6',
        },
        text: {
          primary: '#0D0D0D',
          secondary: '#3D3830',
          muted: '#7A7060',
        },
        accent: {
          DEFAULT: '#1A3A5C',
          mid: '#2E6BA8',
          hover: '#2E6BA8',
          light: '#D6E8F7',
        },
        warm: {
          border: '#C8BFA8',
          borderLight: '#DDD8CC',
        },
        status: {
          green: '#1A5C3A',
          greenLight: '#D6F0E3',
          red: '#5C1A1A',
          redLight: '#F0D6D6',
          orange: '#7A4F00',
          orangeLight: '#FEF3D6',
        },
      },
    },
  },
  plugins: [],
};
