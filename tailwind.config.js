/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        roll: {
          "0%": { transform: "translate(-50% ,-50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%,-50%) rotate(360deg)" },
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
        roll: "roll 4s linear infinite",
        text: "text 3s ease infinite",
      },
    },
  
  plugins: [],
};
