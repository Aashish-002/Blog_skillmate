import { MetadataRoute } from "next";


/**
 * Robots can see, understand and rank on the Search Engine
 * @returns robot config
 */
export default function robots(): MetadataRoute.Robots{
    const baseUrl = 'https://blog.skillmate.ai'

    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/post"],
            disallow: []
        },
        sitemap: `${baseUrl}/sitemap.xml`

    }

}