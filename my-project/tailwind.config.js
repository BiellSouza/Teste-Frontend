/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(90deg, #4646F9 0%, #9130F4 15%)',
      }),
      colors: {
        custom: {
          purple: '#111139',
        },
      },
    },
  },
  plugins: [
    
  ],
}

