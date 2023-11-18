import { defineConfig } from "@pandacss/dev";
import { textStyles } from "~/textStyles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: "js",
  // Where to look for your css declarations
  include: [
    "./app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  theme: {
    extend: {
      textStyles,
      tokens: {
        colors: {
          decorativeBackground: {
            value: "#f7f0e8",
          },
          decorativeBackgroundDots: {
            value: "#00000026",
          },
        },
      }
    }
  },


  // The output directory for your css system
  outdir: "styled-system",
});
