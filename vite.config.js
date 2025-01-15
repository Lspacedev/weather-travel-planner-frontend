import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

// Load environment variables from .env file
config();

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      "process.env.API_KEY": JSON.stringify(env.API_KEY),
      "process.env.API_URL": JSON.stringify(env.API_URL),
      "process.env.PROD_URL": JSON.stringify(env.PROD_URL),
    },
  };
});
