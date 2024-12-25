module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements-react/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937", // Dark gray for background
        secondary: "#FFA500", // Orange for highlights
        accent: "#F3F4F6", // Light gray for text
      },
    },
  },
  plugins: [],
};
