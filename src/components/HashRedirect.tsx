// BrainID: Sonnet 5 | Date: 2026-08-20 | Action: New component -- migrates old HashRouter-style links to real paths
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * The site used to run on HashRouter, so every link anyone has already
 * shared, bookmarked, or indexed looks like https://bridgeforward.tech/#/about.
 * Now that routing uses real paths (BrowserRouter), that hash is just an
 * inert URL fragment -- nothing on the page reads it, so those old links
 * would silently load the homepage instead of the page the visitor wanted.
 *
 * On first mount, if the URL still has a HashRouter-style fragment
 * ("#/something"), translate it into a real path and redirect there via
 * history.replaceState-backed client navigation, so old shared links keep
 * working instead of quietly 404ing or landing on "/".
 *
 * Must be rendered inside <BrowserRouter> (needs router context for
 * useNavigate) and mounted once near the top of the tree, before routes
 * are evaluated, so the redirect happens before anything else renders.
 */
export default function HashRedirect() {
  const navigate = useNavigate();

  // useLayoutEffect (not useEffect) so the redirect fires before the browser
  // paints the homepage -- otherwise a visitor following an old /#/about
  // link would see a flash of the homepage before landing on /about.
  useLayoutEffect(() => {
    const { hash } = window.location;
    if (hash.startsWith("#/")) {
      const target = hash.slice(1); // "#/about" -> "/about"
      navigate(target, { replace: true });
    }
    // `navigate` is referentially stable for the lifetime of the router, so
    // in practice this still only runs once, right after mount.
  }, [navigate]);

  return null;
}
