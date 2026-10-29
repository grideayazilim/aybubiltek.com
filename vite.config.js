import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const siteUrl = 'https://aybubiltek.com'

// GitHub Pages yalnızca var olan dosyaları 200 ile döndürür; alt sayfalar 404.html'e düşer
// ve Google onları dizine almaz. Her sayfa için index.html'in bir kopyası ve sitemap üretilir.
const staticPages = () => {
  let config

  return {
    name: 'static-pages',
    apply: 'build',
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    closeBundle() {
      const dist = resolve(config.root, config.build.outDir)
      const teams = JSON.parse(
        readFileSync(resolve(config.publicDir, 'teams.json'), 'utf8'),
      )
      const paths = [
        '/',
        '/hakkimizda',
        '/ekibimiz',
        '/isbirliklerimiz',
        '/galeri',
        ...teams
          .filter((team) => team.active !== false)
          .map((team) => `/takim/${team.key}`),
      ]

      const html = readFileSync(resolve(dist, 'index.html'), 'utf8')
      for (const path of paths.slice(1)) {
        const file = resolve(dist, `${path.slice(1)}.html`)
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(
          file,
          html.replace(`href="${siteUrl}/"`, `href="${siteUrl}${path}"`),
        )
      }

      const urls = paths
        .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
        .join('\n')
      writeFileSync(
        resolve(dist, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticPages()],
})
