module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        neutral: {
          800: '#3E4557',
          900: '#161718',
        },
      },
      backgroundImage: (theme) => ({}),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
