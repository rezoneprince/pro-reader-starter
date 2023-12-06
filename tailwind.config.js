/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b1dd5f",

          secondary: "#2d72e2",

          accent: "#054782",

          neutral: "#2d2130",

          "base-100": "#f5f6f9",

          info: "#91d7ee",

          success: "#18a599",

          warning: "#b16e10",

          error: "#f17476",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
