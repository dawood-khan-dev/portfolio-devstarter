import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${SITE_URL}/work/eventdesk`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/paintmyhome`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
