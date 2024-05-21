/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "2px 2px 12px 0px rgba(0, 0, 0, 0.2)",
        containerShadow: "inset 0 0 15px rgba(0, 0, 0, 0.2);", //box-shadow: -2.67px 4px 24px 0px rgba(0, 0, 0, 0.2) inset;
        tableRowShadow: "2px 2px 12px 0px rgba(0, 0, 0, 0.1);",
        dashboardShadow:
          "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
      },
      fontSize: {
        customtext: "1rem", // Define your custom font size
      },
      height: {
        tbodyheight: "calc(100vh - 17rem)",
      },
      colors: {
        customblue: "#009DFF",
        custmblack: "#3A3A3A",
      },
    },
  },
  plugins: [],
};

