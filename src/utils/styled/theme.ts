const Theme = {
  colors: {
    primary: "#4A90E2",
    darkBlue: "#3E4D60",
    mediumBlue: "#8C94A8",
    mediumGray: "#908C8C",
    lightGray: "#F8F8F8",
    lightGray2: "#F1F1F2",
  },
  fonts: {
    poppins: {
      name: "Poppins, sans-serif",
      weigths: {
        black: 900,
        bold: 700,
        normal: 400,
      },
    },
  },
  grid: {
    gap: "3.2rem",
    columns: {
      quantity: 12,
      width: "6.8rem",
    },
    container: {
      width: "116.8rem",
    },
  },
  breakpoints: {
    // Small screen / phone
    sm: 576,
    // Medium screen / tablet
    md: 768,
    // Large screen / desktop
    lg: 992,
    // Extra large screen / wide desktop
    xl: 1200,
  },
};

export default Theme;
