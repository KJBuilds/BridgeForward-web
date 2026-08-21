// BrainID: Sonnet 5 | Date: 2026-08-20 | Action: New shared source of truth for per-route SEO metadata
//
// Root cause this file fixes: title/description/canonical strings used to live
// in two places that could silently drift apart -- inline args passed to
// usePageMeta() in each page component (client-side only, via a useEffect),
// and (after this change) the post-build static-meta generator script that
// writes crawler-visible dist/<route>/index.html files. A non-JS crawler or
// social-preview bot only ever sees the second copy, so if the two fell out
// of sync the "real" site and what Google/Slack/Twitter see would disagree.
//
// This is a plain .js (not .ts) file on purpose: it is imported both by the
// Vite/React app (via the "@/lib/route-meta" alias, bundled with esbuild) and
// directly by scripts/generate-static-meta.mjs, which runs as a plain Node
// script *after* the Vite build, outside of any TypeScript toolchain. Keeping
// it dependency-free JS means the build script needs no ts-node/tsx step and
// isn't sensitive to whatever Node version happens to be preinstalled on the
// GitHub Actions runner.
//
// Route list intentionally excludes pure redirects (/services -> /cyber-consulting,
// /legacy -> /legacy-initiatives) and the catch-all 404 route -- none of those
// are distinct crawlable content, so they don't get a sitemap entry or a
// prerendered static-meta directory.

export const SITE_URL = "https://bridgeforward.tech";

export const ROUTES = [
  {
    path: "/",
    title: "BridgeForward | Cybersecurity-Led Social Enterprise",
    description:
      "BridgeForward delivers executive cybersecurity consulting while reinvesting revenue into workforce development, scholarships, and community legacy initiatives.",
  },
  {
    path: "/cyber-consulting",
    title: "Cyber Consulting Services | BridgeForward",
    description:
      "Practical cybersecurity consulting — risk assessments, penetration testing, vCISO services, governance & compliance readiness, and tabletop exercises.",
  },
  {
    path: "/workforce-development",
    title: "Workforce Development | BridgeForward",
    description:
      "BridgeForward Workforce Development connects aspiring professionals to cybersecurity careers through the CyberPlug community, mentorship, training, and internships.",
  },
  {
    path: "/cyberplug",
    title: "CyberPlug Community | BridgeForward",
    description:
      "CyberPlug connects aspiring and emerging cybersecurity professionals to networking, mentorship, job opportunities, and community events.",
  },
  {
    path: "/legacy-initiatives",
    title: "Legacy Initiatives | BridgeForward",
    description:
      "Legacy-centered initiatives — scholarships, the Legacy Home, and community support — funded by BridgeForward's cybersecurity consulting revenue.",
  },
  {
    path: "/institute",
    title: "Community Cybersecurity Institute | BridgeForward",
    description:
      "BridgeForward's long-term vision for a physical Community Cybersecurity Institute combining education, business resilience advisory, and workforce acceleration.",
  },
  {
    path: "/about",
    title: "About | BridgeForward",
    description:
      "BridgeForward is a cybersecurity-led ecosystem founded by Kisha Jefferson, combining consulting, workforce development, and legacy-driven community initiatives.",
  },
  {
    path: "/investors",
    title: "Investors & Partners | BridgeForward",
    description:
      "Explore corporate, government, and grant partnership opportunities with BridgeForward's cybersecurity-led social enterprise model.",
  },
  {
    path: "/contact",
    title: "Contact | BridgeForward",
    description:
      "Contact BridgeForward to discuss cybersecurity consulting, workforce development partnerships, scholarship support, or speaking engagements.",
  },
  {
    path: "/cyber-checklist",
    title: "Free Cyber Risk Checklist | BridgeForward",
    description:
      "Download BridgeForward's free cyber risk checklist to uncover blind spots, evaluate incident readiness, and understand your organization's risk level.",
  },
];

export function getRouteMeta(path) {
  return ROUTES.find((route) => route.path === path);
}
