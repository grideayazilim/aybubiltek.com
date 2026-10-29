import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const siteUrl = 'https://aybubiltek.com'

const escapeAttr = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const withMeta = (html, { path, title, description }) =>
  html
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`)
    .replace(
      /(<meta (?:name="description"|property="og:description") content=")[^"]*"/g,
      `$1${escapeAttr(description)}"`,
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*"/,
      `$1${escapeAttr(title)}"`,
    )
    .replace(`href="${siteUrl}/"`, `href="${siteUrl}${path}"`)

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
      const readJson = (name) =>
        JSON.parse(readFileSync(resolve(config.publicDir, name), 'utf8'))
      const teams = readJson('teams.json').filter(
        (team) => team.active !== false,
      )
      const board = readJson('board-members.json')
      const president = board
        .flatMap((section) => section.members)
        .find((member) => member.position === 'Başkan')
      const departments = board
        .map((section) => section.section)
        .filter((name) => name.endsWith('Departmanı'))
        .map((name) => name.replace(/ Departmanı$/, ''))

      const pages = [
        { path: '/' },
        {
          path: '/hakkimizda',
          title: 'Hakkımızda',
          description:
            "AYBÜ BİLTEK, 2011'de bilimsel düşünceyi teşvik etmek amacıyla kuruldu. Teknik geziler, söyleşiler ve eğitimlerle üyelerimizin akademik ve profesyonel gelişimini destekliyoruz.",
        },
        {
          path: '/ekibimiz',
          title: 'Yönetim Ekibimiz',
          description: `AYBÜ BİLTEK yönetim ekibi${president ? `: Başkan ${president.name}` : ''} ve ${departments.join(', ')} departmanlarımız.`,
        },
        {
          path: '/isbirliklerimiz',
          title: 'İş Birliklerimiz',
          description:
            "AYBÜ BİLTEK'in etkinliklerine destek veren ve birlikte çalıştığı kurum, kafe ve markalar.",
        },
        {
          path: '/galeri',
          title: 'Galeri',
          description:
            'AYBÜ BİLTEK etkinliklerinden, panellerinden ve teknik gezilerinden dönem dönem fotoğraflar.',
        },
        ...teams.map((team) => ({
          path: `/takim/${team.key}`,
          title: team.name,
          description: `AYBÜ BİLTEK ${team.name} takımı. ${team.summary}`,
        })),
      ]

      const html = readFileSync(resolve(dist, 'index.html'), 'utf8')
      for (const page of pages.slice(1)) {
        const file = resolve(dist, `${page.path.slice(1)}.html`)
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(
          file,
          withMeta(html, { ...page, title: `${page.title} | AYBÜ BİLTEK` }),
        )
      }

      const urls = pages
        .map(({ path }) => `  <url><loc>${siteUrl}${path}</loc></url>`)
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
