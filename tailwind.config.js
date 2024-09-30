/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkviolet: 'hsl(256, 26%, 20%)',
          grayishblue: 'hsl(216, 30%, 68%)',
        },
        neutral: {
          vdarkviolet: 'hsl(270, 9%, 17%)',
          dgrayishviolet: 'hsl(273, 4%, 51%)',
          vlightgray: 'hsl(0, 0%, 98%)',
        }

      },
      backgroundImages: {
        'custom-images': "url('image-intro-desktop.jpg')"
      }
    },
  },
  plugins: [],
}