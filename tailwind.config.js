/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      size: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      },
      padding: {
        '128': '32rem', // Add 1.5rem (24px) of padding to the top
        // You can customize other padding sizes as needed
      },
    }  
  },
  plugins: [],
}

