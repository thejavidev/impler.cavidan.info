export default {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': {'min': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'min': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'min': '767px'},
      'sm': {'max': '766px'}
    },
  },
  plugins: [],
}
