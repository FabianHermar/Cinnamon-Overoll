/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,astro,php}'],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/Backgrounds/footer-bg.webp')",
        form: "url('/Backgrounds/gradient.png')",
        login: "url('/Backgrounds/login.webp')",
        register: "url('/Backgrounds/register.webp')",
        contact: "url('/Backgrounds/ContactForm.webp')"
      },
      fontFamily: {
        GilroyRegular: ['GilroyRegular, sans-serif'],
        GilroyBold: ['GilroyBold, sans-serif'],
        GilroySemibold: ['GilroySemibold, sans-serif'],
        Aloja: ['Aloja, sans-serif'],
        Thirsty: ['Thirsty-Regular, sans-serif']
      },
      colors: {
        'black-rgba': 'rgba(255, 255, 255, 0.05)',
        'white-hsla':
          'linear-gradient(153deg, hsla(0, 100%, 100%, 0.1), hsla(0, 0%, 100%, 0))'
      }
    }
  },
  plugins: []
}
