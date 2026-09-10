import type { MetadataRoute } from "next";

export const runtime = "edge";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Resume Editor",
    short_name: "Resume Editor",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
