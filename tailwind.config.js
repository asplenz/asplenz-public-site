/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './md/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1f2937',
          soft: '#4b5563',
        },
        primary: {
          DEFAULT: '#4f46e5',
          soft: '#eef2ff',
          strong: '#4338ca',
        },
        success: {
          DEFAULT: '#059669',
          soft: '#ecfdf5',
          strong: '#065f46',
        },
        warning: {
          DEFAULT: '#d97706',
          soft: '#fef3c7',
          strong: '#78350f',
        },
        danger: {
          DEFAULT: '#dc2626',
          soft: '#fee2e2',
          strong: '#991b1b',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          '"SF Mono"',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
