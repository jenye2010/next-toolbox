import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#' + `${process.env.NEXT_PUBLIC_COLOR_PRIMARY}`, // #048878
        primaryBright: '#' + `${process.env.NEXT_PUBLIC_COLOR_PRIMARY_BRIGHT}`, // #0bb88e
      },
      fontSize: {
        mainTitle: '2.25rem',
        subTitle: '1.5rem',
        article: '1.125rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
