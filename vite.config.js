import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { defineConfig } from 'vite'

function serveAppAtRoot() {
  return {
    name: 'serve-app-at-root',
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        if (request.headers.accept?.includes('text/html')) {
          const [pathname, query] = (request.url ?? '/').split('?')

          if (pathname !== '/app.html') {
            request.url = `/app.html${query ? `?${query}` : ''}`
          }
        }

        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [serveAppAtRoot(), react(), viteSingleFile()],
  build: {
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        index: 'app.html',
      },
    },
  },
})
