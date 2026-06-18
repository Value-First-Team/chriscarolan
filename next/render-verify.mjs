/**
 * render-verify.mjs — the proof gate for chriscarolan.com (Next.js).
 *
 * "Build green" is not proof. This serves the static export (out/) over real
 * HTTP (file:// breaks Next's absolute /_next asset paths) and screenshots the
 * Home page in BOTH themes at desktop + mobile, then asserts the page is
 * actually styled:
 *   - the shared shell header is present (constellation membership),
 *   - the bespoke .cc-page navy canvas is painted (not unstyled white),
 *   - the hero h1 resolves to the mirinda-orange brand color (cc-* tokens bound),
 *   - the Kameron display font loaded.
 *
 * The chriscarolan body brand is intentionally theme-independent (the personal
 * navy canvas is fixed); the shared shell header/footer respond to the theme.
 */
import playwright from '/mnt/d/node_modules/playwright/index.js';
const { chromium } = playwright;
import http from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = join(process.cwd(), 'out');
const OUT = join(process.cwd(), 'render-shots');
const PORT = 8793;

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json',
  '.txt': 'text/plain', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg', '.webp': 'image/webp', '.pdf': 'application/pdf',
};

async function serve() {
  const server = http.createServer(async (req, res) => {
    try {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p === '/') p = '/index.html';
      let file = join(ROOT, p);
      try {
        const s = await stat(file);
        if (s.isDirectory()) file = join(file, 'index.html');
      } catch {
        if (!extname(file)) file = file + '.html';
      }
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404); res.end('not found');
    }
  });
  await new Promise((r) => server.listen(PORT, r));
  return server;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const server = await serve();
  const browser = await chromium.launch();
  const results = [];

  const pages = [{ name: 'home', path: '/' }];
  const themes = ['dark', 'light'];
  const viewports = [
    { vp: 'desktop', width: 1280, height: 900 },
    { vp: 'mobile', width: 390, height: 844 },
  ];

  for (const pg of pages) {
    for (const theme of themes) {
      for (const { vp, width, height } of viewports) {
        const ctx = await browser.newContext({ viewport: { width, height } });
        const page = await ctx.newPage();
        await ctx.addInitScript((t) => {
          try { localStorage.setItem('vf-theme', t); } catch {}
        }, theme);
        await page.goto(`http://localhost:${PORT}${pg.path}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(400);

        const probe = await page.evaluate(() => {
          const html = document.documentElement;
          const ccPage = document.querySelector('.cc-page');
          const h1 = document.querySelector('h1.cc-hero-headline');
          const header = document.querySelector('header');
          const ccFooter = document.querySelector('.cc-footer');
          const ccBg = ccPage ? getComputedStyle(ccPage).backgroundColor : '';
          const h1Color = h1 ? getComputedStyle(h1).color : null;
          const h1Font = h1 ? getComputedStyle(h1).fontFamily : null;
          const mirinda = getComputedStyle(html).getPropertyValue('--cc-mirinda').trim();
          const vfBrand = getComputedStyle(html).getPropertyValue('--vf-brand').trim();
          // count rendered body sections
          const sectionCount = document.querySelectorAll('.cc-page > section, .cc-page > .cc-bottom-band').length;
          return {
            isDark: html.classList.contains('dark'),
            ccBg, h1Color, h1Font,
            hasCcPage: !!ccPage,
            hasH1: !!h1,
            hasHeader: !!header,
            hasCcFooter: !!ccFooter,
            mirindaToken: mirinda,
            vfBrandToken: vfBrand,
            sectionCount,
          };
        });

        const shot = join(OUT, `${pg.name}-${theme}-${vp}.png`);
        await page.screenshot({ path: shot, fullPage: vp === 'desktop' });
        results.push({ page: pg.name, theme, vp, probe, shot });
        await ctx.close();
      }
    }
  }

  await browser.close();
  server.close();

  // ---- Assertions ----
  let failures = 0;
  const WHITE = 'rgb(255, 255, 255)';
  for (const r of results) {
    const p = r.probe;
    const tag = `${r.page} / ${r.theme} / ${r.vp}`;
    const themeMatches = p.isDark === (r.theme === 'dark');
    // bespoke page styled: cc-page bg is the prune navy (not unstyled white),
    // brand token bound, hero h1 is the mirinda orange, Kameron loaded.
    const ccStyled =
      p.hasCcPage &&
      p.ccBg !== '' &&
      p.ccBg !== WHITE &&
      p.mirindaToken.length > 0 &&
      p.h1Color === 'rgb(248, 95, 54)' && // --cc-mirinda #F85F36
      /Kameron/i.test(p.h1Font || '');
    const shellPresent = p.hasHeader && p.vfBrandToken.length > 0;
    const parity = p.sectionCount >= 13; // 12 <section> + 1 .cc-bottom-band wrapper
    const ok = themeMatches && ccStyled && shellPresent && p.hasH1 && p.hasCcFooter && parity;
    if (!ok) failures++;
    console.log(
      `${ok ? 'PASS' : 'FAIL'}  ${tag.padEnd(28)} ccBg=${p.ccBg} h1=${p.h1Color} font=${(p.h1Font || '').split(',')[0]} mirinda=[${p.mirindaToken}] vfBrand=[${p.vfBrandToken}] hdr=${p.hasHeader} ccFoot=${p.hasCcFooter} sections=${p.sectionCount} dark=${p.isDark}`
    );
  }
  console.log(`\n${results.length - failures}/${results.length} render checks passed. Shots in ${OUT}`);
  process.exit(failures > 0 ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
