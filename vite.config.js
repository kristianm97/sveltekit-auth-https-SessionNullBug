import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    port: 3000,
    //uncomment this for reproducing the issue
/*     https: {
            cert: "",//path to your cert file
            key: ""//path to your key file
        },
        proxy: {}, */
  },
  plugins: [sveltekit()],
})
