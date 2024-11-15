import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace `<your-repo-name>` with your actual repository name
export default defineConfig({
  base: "/gneshi2/", // replace with the path where your app is deployed
  plugins: [react()],
});
