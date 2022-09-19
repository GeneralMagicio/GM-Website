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
        xs: '460px',
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
        home: "url('/images/background/homeHero.png')",
        homeBg: "url('/images/background/homeBg.png')",
        pinkHomeBg: "url('/images/background/pinkHomeBg.png')",
        footer: "url('/images/background/footer.png')",
        projects: "url('/images/background/projectsBg.png')",
        about: "url('/images/background/aboutBg.png')",
        contact: "url('/images/background/contactBg.png')",
        contactMobile: "url('/images/background/contactBgMobile.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
