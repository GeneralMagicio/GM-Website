const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
      akira: ['Akira Expanded', 'sans-serif'],
    },
    extend: {
      screens: {
        'dao-md': '1200px',
        ...defaultTheme.screens,
      },
      colors: {
        neutral: {
          600: '#959DB2',
          800: '#3E4557',
          900: '#161718',
        },
        magicPurple: {
          300: '#A569FF',
          500: '#523480',
        },
        pinkPotion: {
          300: '#FE61A7',
        },
        misticOrange: {
          300: '#FF913E',
        },
        magicSky: {
          300: '#00E4FE',
        },
      },
      backgroundImage: (theme) => ({
        home: "url('/images/homeHero.png')",
        homeBg: "url('/images/homeBg.png')",
        pinkHomeBg: "url('/images/pinkHomeBg.png')",
        footer: "url('/images/footer.png')",
        projects: "url('/images/projectsBg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
