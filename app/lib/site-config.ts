// ponytail: SITE_URL is a placeholder (.example is an IANA-reserved, non-resolvable TLD).
// Replace with the real production domain, then everything below (canonical, sitemap,
// robots, OG/Twitter tags, JSON-LD) picks it up automatically.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://suvramukherjee.example";

export const SITE_NAME = "Suvra Mukherjee";
export const SITE_TITLE = "Suvra Mukherjee | Technical Business Analyst and Data Analyst";
export const SITE_DESCRIPTION =
  "Suvra Mukherjee is a Business Analyst at Quantiphi Analytics, turning business questions into clear technical requirements and data driven analysis.";

// TODO(suvra): replace once known — see SEO-AUDIT.md blocking questions.
export const SOCIAL_LINKS = {
  linkedin: "",
  github: "",
};
