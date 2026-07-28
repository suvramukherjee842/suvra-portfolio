import type { MetadataRoute } from "next";
import { SITE_NAME } from "./lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Suvra",
    description: "Portfolio of Suvra Mukherjee, Technical Business Analyst and Data Analyst.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0f0e",
    theme_color: "#0d0f0e",
    icons: [
      { src: "/icon/16", sizes: "16x16", type: "image/png" },
      { src: "/icon/32", sizes: "32x32", type: "image/png" },
      { src: "/icon/192", sizes: "192x192", type: "image/png" },
      { src: "/icon/512", sizes: "512x512", type: "image/png" },
    ],
  };
}
