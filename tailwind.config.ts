import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animated';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [animate],
};

export default config;
