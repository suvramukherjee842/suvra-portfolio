import { OG_SIZE, renderOgImage } from "./lib/og-image";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Suvra Mukherjee — Technical Business Analyst and Data Analyst";

export default function Image() {
  return renderOgImage();
}
