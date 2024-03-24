/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" /* src folder, for example */,
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
          //   colors: {
    //     // Primary
    //     "lime-green": "hsl(163, 72%, 41%);", | emerald-500 X
    //     "bright-red": "hsl(356, 69%, 56%);", | red-500 X

    //     facebook: "hsl(208, 92%, 53%);", | sky-500 X
    //     twitter: "hsl(203, 89%, 53%);", | sky-500 X
    //     insta1: "hsl(37, 97%, 70%);", | orange-300 X
    //     insta2: "hsl(329, 70%, 58%);", | pink-500 X
    //     youtube: "hsl(348, 97%, 39%);", | rose-700 X

    //     // Toggle
    //     "toggle1-dark": "hsl(210, 78%, 56%);", | blue-500 X
    //     "toggle2-dark": "hsl(146, 68%, 55%);", | green-400 X
    //     "toggle-light": "hsl(230, 22%, 74%);", | slate-400 X

    //     // Light Mode
    //     "custom-bg": "hsl(0, 0%, 100%);", | white X
    //     "custom-bg-top": "hsl(225, 100%, 98%);", | violet-50 X
    //     "card-color": "hsl(227, 47%, 96%);", | slate-100 X
    //     "card-color-active": "#e1e3f0;", | slate-200 X
    //     "custom-text1": "hsl(228, 12%, 44%);", | gray-500 X
    //     "custom-text2": "hsl(230, 17%, 14%);", | neutral-800 X

    //     // Dark Mode
    //     "custom-bg-dark": "hsl(230, 17%, 14%);", | neutral-800 X
    //     "custom-bg-top-dark": "hsl(232, 19%, 15%);", | zinc-800 X
    //     "card-color-dark": "hsl(228, 28%, 20%);", | slate-800 X
    //     "card-color-active-dark": "#333a56;", | slate-700 X
    //     "custom-text1-dark": "hsl(228, 34%, 66%);", | slate-400 X
    //     "custom-text2-dark": "hsl(0, 0%, 100%);", | white X
    //   },

    // This piece of crap alongside the arbitrary values was the one stopping my build the entire time, gee thanks for informing me after i started to get genuinely heated from seeing npm build fail for the 25th time tailwind docs (oh wait you never did... jerks)
    // Anyways, I found a link to convert all that color crap into base tailwind colors, just use the Replace All feature with CTRL+F

    // Secondary Note: WTF did that website do to the colors??? I hate React now more than I did before...
    // Third Note: Maybe I should blame Tailwind instead... 
    },
  },
  plugins: [require("flowbite/plugin")],
};
