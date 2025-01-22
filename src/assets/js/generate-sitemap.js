import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { router, BASE_URL } from '../../configs/config.js';  // Asegúrate de que la ruta es correcta

// Función para generar el sitemap
const generateSitemap = async () => {
  const stream = new SitemapStream({ hostname: BASE_URL });

  // Recorrer las rutas del router y añadirlas al sitemap
  for (const route in router) {
    if (router.hasOwnProperty(route)) {
      stream.write({
        url: router[route],
        priority: 0.8, // Prioridad predeterminada para todas las rutas
      });
    }
  }
  stream.end();

  const sitemap = await streamToPromise(stream);
  // Asegúrate de guardar el sitemap en la carpeta 'public'
  writeFileSync('./public/sitemap.xml', sitemap.toString());
  console.log('Sitemap generado exitosamente en ./public/sitemap.xml');
};

generateSitemap().catch(console.error);
