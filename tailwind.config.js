export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-background",
    "text-text",
    "text-primary",
    "bg-button",
    "bg-buttonHover",
    "bg-cardBg",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7EDE2", // Beige claro para el fondo
        text: "#5D3A3A", // Marrón suave para los textos
        primary: "#E5989B", // Rosa pastel elegante
        button: "#B5838D", // Rosa más oscuro para botones
        buttonHover: "#6D6875", // Tono lila/morado para efecto hover
        cardBg: "#FAE1DD", // Color suave para las tarjetas de productos
      },
      borderRadius: {
        soft: "12px",
      },
      fontFamily: {
        elegant: ["'Playfair Display'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
