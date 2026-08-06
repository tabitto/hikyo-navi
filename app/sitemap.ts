import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hikyo-navi-phi.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/results`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/favorites`,
      lastModified: new Date(),
    },
  ];
}