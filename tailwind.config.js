/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      spacing: {
        'container-max': '1280px',
        'margin-desktop': '64px',
        'margin-mobile': '16px',
        'gutter': '24px',
        'unit': '8px',
      },
      fontFamily: {
        'display-serif': ['"Playfair Display"', 'serif'],
        'display-sans': ['"Hanken Grotesk"', 'sans-serif'],
        'headline-lg': ['"Playfair Display"', 'serif'],
        'headline-md': ['"Hanken Grotesk"', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-base': ['Inter', 'sans-serif'],
        'label-mono': ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-serif': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sans': ['64px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline-lg': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-base': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-mono': ['12px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '500' }],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [],
};
