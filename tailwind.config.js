/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#A97B65', // Color más claro del marrón mate
          200: '#7B503C', // Color intermedio del marrón mate
          300: '#5C3A21', // Color marrón mate original
        },
        accent: {
          100: '#A0FAFF', // Celeste más claro y vibrante
          200: '#64EAFF', // Celeste intermedio y vibrante
          300: '#40E7FF', // Celeste bandera original, más oscuro
        },
        bg: {
          100: '#8CAE66', // Color más claro del verde yerba mate
          200: '#6C8E41', // Color intermedio del verde yerba mate
          300: '#5A7D2B', // Color verde yerba mate original
        },
        text: {
          100: '#F0F0F0', // Color blanco muy claro para texto
          200: '#E0E0E0', // Color blanco claro para texto
          300: '#FAFAFA', // Color blanco original
        },
        buttons: {
          100: '#FFD934', // Color más claro del dorado tortas fritas
          200: '#FFCC01', // Color dorado tortas fritas original
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};