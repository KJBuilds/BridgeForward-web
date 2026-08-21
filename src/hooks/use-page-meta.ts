// BrainID: Sonnet 5 | Date: 2026-08-20 | Action: Fixed apex-vs-www canonical target, switched og:url from hash to real pathname, and added a dynamic canonical <link> per route
import { useEffect } from "react";
import { SITE_URL } from "@/lib/route-meta";

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonicalTag(href: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    // www.bridgeforward.tech 301-redirects to the apex domain (matching the
    // CNAME file), so the apex is the canonical target -- www would just add
    // a needless redirect hop for anything treating this as authoritative.
    const canonicalUrl = `${SITE_URL}${window.location.pathname}`;

    document.title = title;
    setMetaTag("name", "description", description);
    setCanonicalTag(canonicalUrl);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    // Previously built from window.location.hash (leftover from HashRouter,
    // e.g. "#/about"), which broke once routing moved to real paths -- now
    // BrowserRouter makes the real pathname available directly.
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
  }, [title, description]);
}
