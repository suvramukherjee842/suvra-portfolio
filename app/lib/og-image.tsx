import { ImageResponse } from "next/og";
import { SITE_TITLE } from "./site-config";

export const OG_SIZE = { width: 1200, height: 630 };

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0d0f0e",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#C3E75B",
            marginBottom: 24,
          }}
        >
          Technical Business Analyst
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 88,
            fontWeight: 700,
            color: "#EDF0EA",
            lineHeight: 1.05,
          }}
        >
          Suvra Mukherjee
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 28,
            color: "#9BA39A",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          {SITE_TITLE.split("|")[1]?.trim() ?? ""}
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
