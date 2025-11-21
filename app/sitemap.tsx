// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sparkleshine-mount-ommaney.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    // {
    //   url: "https://nerontech.github.io/sparkleshine-mount-ommaney/",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: "https://nerontech.github.io/sparkleshine-mount-ommaney/",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: "https://nerontech.github.io/sparkleshine-mount-ommaney/",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: "https://nerontech.github.io/sparkleshine-mount-ommaney/",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.6,
    // },
  ];
}
