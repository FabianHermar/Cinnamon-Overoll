/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,php}"],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('/public/footer-bg.webp')",
      },
    },
  },
  plugins: [],
}
