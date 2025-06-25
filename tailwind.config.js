/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': "3px 1px 1px black"  /// custom drop shadow
      }
    },
  },
  plugins: [],
}