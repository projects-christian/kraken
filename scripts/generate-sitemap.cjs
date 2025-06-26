// scripts/generate-sitemap.js
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://krakenstudioart.com";
const locales = ["en", "es", "it", "nl"];
const defaultLocale = "en";

// Rutas base (sin idioma)
const routes = [
  "/",
  "/services/floats",
  "/services/artistic-pieces",
  "/services/sculptures-and-macrosculptures",
  "/services/film-and-tv-sets",
  "/services/statuettes-for-awards",
  "/services/venue-theming",
  "/services/creating-costumes",
  "/services/theme-parks",
];

function generateUrlEntry(route) {
  const urlTag = `
  <url>
    <loc>${BASE_URL}${route}</loc>
    ${locales
      .map((lang) => {
        const localized =
          lang === defaultLocale ? route : `/${lang}${route}`;
        return `<xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}${localized}" />`;
      })
      .join("\n    ")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${route}" />
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
  return urlTag;
}

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${routes.map(generateUrlEntry).join("\n")}
</urlset>`;

fs.writeFileSync(path.resolve("public", "sitemap.xml"), sitemapContent);
console.log("✅ Sitemap generado correctamente.");
