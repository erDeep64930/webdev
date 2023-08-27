/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        roll: {
          "0%": { transform: "translateX(-50% ,-50%) rotate(0deg)" },
          "100%": { transform: "translateX(-50%,-50%) rotate(360deg)" },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      },
      animation: {
        roll: "marque 10s linear infinite",
        text: "text 5s ease infinite",
      },
    },
  
  plugins: [],
};
