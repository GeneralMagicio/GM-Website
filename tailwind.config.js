module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {},
      backgroundImage: (theme) => ({}),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
