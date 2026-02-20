import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = 'https://venderecasa.reggioemilia.it';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],   // block API routes from indexing
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
