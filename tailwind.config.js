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
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
