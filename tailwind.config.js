module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
      akira: ['Akira', 'sans-serif'],
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
      },
      backgroundImage: (theme) => ({
        home: "url('/images/homeHero.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
