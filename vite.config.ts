import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://vite.dev/config/
export default defineConfig(() => {
    return {
        resolve: {
            alias: {
                "@": resolve(__dirname, "src")
            }
        },
        plugins: [
            react(),
            viteStaticCopy({
                targets: [
                    { src: "public/*", dest: "." },
                ]
            })
        ],
        build: {
            // target: "esnext", // breaks interval logic
            rollupOptions: {
                input: {
                    popup: resolve(__dirname, "index.html"),
                    offscreen: resolve(__dirname, "offscreen.html"),
                    background: resolve(__dirname, "src/background/background.ts")
                },
                output: {
                    entryFileNames: (chunk) => {
                        if (["background", "offscreen"].includes(chunk.name)) {
                            return "[name].js"
                        } else {
                            return "assets/[name].js"
                        }
                    }
                }
            },
            outDir: "dist",
            emptyOutDir: true
        }
    }
})
