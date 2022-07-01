module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-white": "#f7f7f7",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          md: "768px",
          "2xl": "1124px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: ["./public/index.html"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         body: "#17171F",
//         "selected-text": "#A3A3FF",
//         theme: "#3F3FFF",
//         nav: "#404053",
//         secondary: "#9191A4",
//         badge: "#3F3F51",
//         "input-border": "#565666",
//         input: "#2A2A35",
//         "bookmark-purple": "#5267DF",
//         "bookmark-white": "#f7f7f7",
//       },
//       fontFamily: {
//         Inter: ["Inter"],
//       },
//       container: {
//         center: true,
//         padding: "1rem",
//         screens: {
//           lg: "1124px",
//           xl: "1124px",
//           "2xl": "1124px",
//         },
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
// };
