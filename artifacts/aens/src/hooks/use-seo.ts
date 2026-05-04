import { useEffect } from "react";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  buildBreadcrumbJsonLd,
  type RouteSeo,
} from "@/lib/seo";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setBreadcrumbJsonLd(path: string) {
  const id = "ld-breadcrumb";
  let el = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = buildBreadcrumbJsonLd(path);
}

export function useSeo(seo: RouteSeo) {
  useEffect(() => {
    const url = `${SITE_URL}${seo.path === "/" ? "/" : seo.path}`;
    const ogImage = seo.ogImage ?? DEFAULT_OG_IMAGE;

    document.title = seo.title;

    setMeta("name", "description", seo.description);
    if (seo.keywords) setMeta("name", "keywords", seo.keywords);
    setMeta("name", "robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    setMeta("name", "googlebot", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    setMeta("name", "bingbot", "index,follow");

    setLink("canonical", url);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:locale", "en_US");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", ogImage);

    setBreadcrumbJsonLd(seo.path);
  }, [seo.path, seo.title, seo.description, seo.keywords, seo.ogImage]);
}
