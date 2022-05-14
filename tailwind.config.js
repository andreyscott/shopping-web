module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
          swhite: "#E5E5E5",
          sblue: "rgba(44,82,106,.934)"
        }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

}