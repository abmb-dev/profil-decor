import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>> {
  theme: {
    extend: {
      colors: {
        vermillion: {
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
        alabaster: {
          '50': '#f8f7f4',
          '100': '#eae7dc',
          '200': '#ded9ca',
          '300': '#cac1a7',
          '400': '#b3a384',
          '500': '#a48e6b',
          '600': '#977e5f',
          '700': '#7e6850',
          '800': '#675545',
          '900': '#54473a',
          '950': '#2c241e',
        }
      }
    }
  }
};