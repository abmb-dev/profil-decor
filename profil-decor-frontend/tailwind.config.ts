import type { Config } from "tailwindcss";

export default <Partial<Config>> {
  content: [
    "./components/**/*.{vue}",
  ],
  theme: {
    extend: {
      colors: {
        roman: {
          '50': '#fdf4f3',
          '100': '#fde5e3',
          '200': '#fccfcc',
          '300': '#f8afa9',
          '400': '#f28077',
          '500': '#e85a4f',
          '600': '#d43a2e',
          '700': '#b22d23',
          '800': '#942820',
          '900': '#7b2721',
          '950': '#42110d',
        },
        cararra: {
          '50': '#f8f7f4',
          '100': '#ece9e1',
          '200': '#ddd8cb',
          '300': '#c8bea9',
          '400': '#b1a086',
          '500': '#a18b6e',
          '600': '#947b62',
          '700': '#7b6453',
          '800': '#655347',
          '900': '#53453b',
          '950': '#2c231e',
        }
      }
    }
  }
};