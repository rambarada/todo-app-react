/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Enable JIT mode for faster builds (optional but recommended)
  
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html", // Include this if you have an index.html file in your public folder
  ],
  
  theme: {
    extend: {
      // You can add custom theme configurations here, like colors, spacing, etc.
    },
  },
  
  plugins: [
    // Add any Tailwind CSS plugins you are using here
  ],
}
