import type { APIRoute } from "astro";
import { SITE_URL } from "../utils/seo";

// Hand-listed routes — this site is small and fixed-size, so a static list
// avoids pulling in a sitemap-generation dependency. Add new pages here.
const routes = ["/", "/about", "/products", "/investments", "/faqs"];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();

  const urlEntries = routes
    .map(
      (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
