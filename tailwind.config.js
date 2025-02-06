/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B5E2",
        secondary: "#D45E02",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to bottom right, #001489, #00B5E2)', // Gradient personnalisé
      },
      fontFamily: {
        museo: ['"MuseoModerno"', 'sans-serif'], // Ajout de la police MuseoModerno
      },
    },
  },
  plugins: [daisyui], // Ajout de DaisyUI
};
