/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        body: "#fcfcfc",
        dark: "#0D1321",
        "light-dark": "#171e2e",
        "sidebar-body": "#F8FAFC",
        primary: "#131325",
        secondary: "#212132",
        grey: "#212121",
        "btn-yellow": "#CDC048",
        "secondary-border": "#63636F",
        "button-grey": "#303030",
        "button-blue": "#3164D8",
        "button-purple": "#292943",
        "purple-active": "#3F3F6F",
        "purple-light": "#6060AD",
        "gradiant-left": "#363574",
        "gradiant-right": "#7C2AAA",
        "approve-orange": "#E95A00",
        "approve-grey": "#8A3A0F",
        "approve-teal": "#05BEBE",
        "approve-teal-grey": "#35746C",
        "buy-light-grey": "#767676",
        "buy-dark-grey": "#323232",
      },
    },
  },
  plugins: [],
};
