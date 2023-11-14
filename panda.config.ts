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
    }
  },


  // The output directory for your css system
  outdir: "styled-system",
});
