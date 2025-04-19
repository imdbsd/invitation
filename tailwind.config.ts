import type {Config} from 'tailwindcss';
import tailwindcssAnimated from 'tailwindcss-animated'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      },
    },
  },
  plugins: [tailwindcssAnimated],
};

export default config;
