import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default <Partial<Config>> {
  important: true,
  content: [
    "./components/**/*.vue",
    "./components/navigation/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Option 1
        shark: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#1e1e1e', // #6d6d6d
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1e1e1e',
        },
        bud: {
          '50': '#f5f6f4',
          '100': '#e4e5e0',
          '200': '#c6c8bf',
          '300': '#b2b5a8',
          '400': '#959887',
          '500': '#888a76',
          '600': '#787867',
          '700': '#666557',
          '800': '#56554a',
          '900': '#48463f',
          '950': '#272621',
        },
        // Option 2
        scarlet: {
          '50': '#fff5ec',
          '100': '#ffe8d3',
          '200': '#ffcda5',
          '300': '#ffaa6d',
          '400': '#ff7a32',
          '500': '#ff560a',
          '600': '#ff3b00',
          '700': '#cc2702',
          '800': '#a11f0b',
          '900': '#821d0c',
          '950': '#460b04',
        },
        merino: {
          '50': '#f9f7f3',
          '100': '#f3efe7',
          '200': '#e2d8c6',
          '300': '#cfbda2',
          '400': '#bb9e7c',
          '500': '#ad8862',
          '600': '#a07656',
          '700': '#856049',
          '800': '#6d4f3f',
          '900': '#594135',
          '950': '#2f211b',
        }
      }
    }
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
  }]
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}