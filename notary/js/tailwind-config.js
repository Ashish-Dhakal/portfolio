/* Theme tokens for the Tailwind CDN. Load this script after cdn.tailwindcss.com. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: "#10243e",
        "navy-deep": "#0b1c30",
        ink: "#1a2332",
        muted: "#3e4a59",
        gold: "#7a5b32",
        paper: "#f6f4f0",
        line: "#e4ddd3",
        cream: "#f0e6d4",
      },
      fontFamily: {
        display: ['"Iowan Old Style"', '"Palatino Linotype"', "Palatino", "Georgia", "serif"],
        body: ['"Avenir Next"', '"Segoe UI"', "system-ui", "sans-serif"],
      },
    },
  },
};
