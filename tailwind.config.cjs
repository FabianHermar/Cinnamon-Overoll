/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,php}"],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('/public/Backgrounds/footer-bg.webp')",
      },
      colors: {
        'black-rgba': 'rgba(255, 255, 255, 0.05)',
        'white-hsla': 'linear-gradient(153deg, hsla(0, 100%, 100%, 0.1), hsla(0, 0%, 100%, 0))',
      }
    },
  },
  plugins: [],
}
