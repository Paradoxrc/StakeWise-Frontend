module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937", // Dark gray for background
        secondary: "#FFA500", // Orange for highlights
        accent: "#F3F4F6", // Light gray for text
        card: "#374151", // Dark gray for card background
        green: "#10B981", // Green for success actions
        red: "#EF4444", // Red for danger actions
      },
    },
  },
  plugins: [],
};
