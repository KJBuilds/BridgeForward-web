// BrainID: Sonnet 5 | Date: 2026-07-25 | Action: Extended per-route meta to also set OG/Twitter share-preview tags, not just title/description
import { useEffect } from "react";

const SITE_URL = "https://www.bridgeforward.tech";

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", `${SITE_URL}/${window.location.hash}`);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
  }, [title, description]);
}
