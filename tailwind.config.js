/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1B120D',
        darkCoffee: '#2B1A14',
        cream: '#F5EBDD',
        caramel: '#B87941',
        caramelHover: '#A36531',
        latte: '#D8B89A',
        white: '#FFFDF8',
        coffeeBorder: 'rgba(216, 184, 154, 0.15)',
        glassBg: 'rgba(43, 26, 20, 0.65)',
        glassLight: 'rgba(245, 235, 221, 0.05)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(27, 18, 13, 0.4)',
        'glow': '0 0 35px -5px rgba(184, 121, 65, 0.3)',
        'subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'grain': "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
