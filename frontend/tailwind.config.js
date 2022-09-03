/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        darkBg: "var(bg-dark)",
      },
      width: {
        aside: "var(--aside-width)",
      },
      height: {
        logo: "var(--logo-height)",
        header: "var(--header-height)",
        footer: "var(--footer-height)",
      },
      gridTemplateColumns: {
        fixed: "225px 1fr",
      },
      gridTemplateRows: {
        fixed: "100px 1fr 40px",
      },
    },
  },
  plugins: [],
};
