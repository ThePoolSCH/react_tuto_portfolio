/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //agregamos colores personalizados
      colors:{
        primary: "#34c4dc",
        secondary: "#226292",
        a2g_opaque: "#059EA3",
        a2g_soft: "#76CCBB",
        a2g_light: "#10CC67"
      },
      keyframes:{
        wiggle: {
          //el porcentaje indica el momento en que se ejecutara cada cosa
          '0%, 100%': { transform: 'rotate(-3deg) scale(1.5)' },
          '25%, 75%': { transform: 'scale(1)' },
          '50%': { transform: 'rotate(3deg) scale(1.5)' },
        },
        moverIzq:{
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moverDer:{
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        //wiggle invoca al keyframe, 2s tiempo de 0 al 100%, infinite, duracion del loop, 
        //ease-ibn-out velocidad animacion, 2 cantidad de repeticiones de animacion
        //animation-fill-mode animation-delay, running para cuando se usa hover
        wiggle: 'wiggle 2s ease-in-out infinite',
        moverIzq: 'moverIzq 2s linear 2 running',
        moverDer: 'moverDer 2s linear'
      }
    },
  },
  plugins: [],
}
