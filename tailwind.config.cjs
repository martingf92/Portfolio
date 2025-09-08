/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2c3e50',
        'secondary': '#34495e',
        'accent': '#f1c40f',
        'light': '#ecf0f1',
        'dark': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(10px) scale(0.98)', filter: 'blur(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' }
        },
        'flip-in': {
          '0%':   { opacity: '0', transform: 'rotateX(8deg) translateY(10px) scale(0.98)', transformOrigin: 'top' },
          '100%': { opacity: '1', transform: 'rotateX(0) translateY(0) scale(1)' }
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 0 rgba(0,0,0,0)' },
          '50%':      { boxShadow: '0 10px 30px rgba(0,0,0,0.18)' }
        },
        'bg-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        }
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'flip-in': 'flip-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'bg-pan': 'bg-pan 18s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out 0.5s both',
        'slide-in-left': 'slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-in-right': 'slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      }
    },
  },
  plugins: [],
};
