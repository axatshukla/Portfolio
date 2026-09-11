/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'card-bg': 'var(--card-bg)',
        'footer-bg': 'var(--footer-bg)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-color': 'var(--border-color)',
        'accent-color': 'var(--accent-color)',
        'tag-bg': 'var(--tag-bg)',
      },
      fontFamily: {
        sans: ['"Red Hat Text"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.04) 0px 4px 20px',
        'dock': 'rgba(0, 0, 0, 0.12) 0px 8px 32px',
        'card-hover': 'rgba(0, 0, 0, 0.08) 0px 10px 30px',
      }
    },
  },
  plugins: [],
}
