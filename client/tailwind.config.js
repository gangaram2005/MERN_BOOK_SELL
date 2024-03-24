// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
    
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '818px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      // colors:{
      //   'dark-purple':'#081A51',
      //   'light-white':'rgba(255,255,255,0.18)',
      //   'Teal': "#2F6C6D",
      //   'HummingBird': "#d1f1ee",
      //   'yellow': "#e4d63b",
      //   'Solitude': "#e9e9ea",
      //   'gray': "#4B4B4C"
      // },
      // screens:{
      //   'xs':{'min':'240px','max':'575px'},
      //   'xs1':{'min':'536px','max':'639px'}
      // }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


