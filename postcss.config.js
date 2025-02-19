import tailwindcssPostcss from '@tailwindcss/postcss'; // IMPORTANT: Import @tailwindcss/postcss
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').Postcss} */
const config = {
  plugins: [
    tailwindcssPostcss(), // IMPORTANT: Use tailwindcssPostcss() here
    autoprefixer(),
  ],
};

export default config;