import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // adjust paths based on your project structure
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-dark': '#1a202c',
        'custom-light': '#f7fafc',
        // add more custom bg colors here
      },
    },
  },
  plugins: [],
};

module.exports = {
  darkMode: 'class',
  // other config
}


export default config;
