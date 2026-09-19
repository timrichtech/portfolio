import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],

        // server: {
        //   port: 3000,
        //   open: true,
        // },
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@' points to 'src'
    },
  },
  plugins: [tailwindcss()],
  optimizeDeps: {
    include: ["@mui/material", "@mui/icons-material"],
    exclude: ["some-large-lib-you-dont-use"],
  },
});
