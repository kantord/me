import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: "js",
  // Where to look for your css declarations
  include: [
    "./app/routes/**/*.{ts,tsx,js,jsx}",
    "./app/components/**/*.{ts,tsx,js,jsx}"
  ],

  // Files to exclude
  exclude: [],

  theme: {
    extend: {}
  },


  // The output directory for your css system
  outdir: "styled-system",
});
