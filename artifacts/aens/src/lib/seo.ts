export const SITE_URL = "https://aens.io";
export const SITE_NAME = "AENS.io";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
};

export const SERVICES = [
  {
    name: "Autonomous AI Agents",
    path: "/solutions",
    serviceType: "Enterprise AI agent development",
    description:
      "AENS builds autonomous AI agents that plan, decide, execute, and report across enterprise tools with human approvals, audit trails, and policy guardrails.",
  },
  {
    name: "Enterprise AI Systems",
    path: "/solutions",
    serviceType: "Custom enterprise AI infrastructure",
    description:
      "Private LLM gateways, RAG pipelines, secure model orchestration, and air-gapped AI deployments for regulated B2B environments.",
  },
  {
    name: "Deepfake Detection",
    path: "/solutions",
    serviceType: "Synthetic media detection",
    description:
      "Multi-modal deepfake detection for image, audio, video, files, provenance, and suspicious media workflows.",
  },
  {
    name: "AI Governance",
    path: "/solutions",
    serviceType: "AI trust and governance infrastructure",
    description:
      "Policy-bound workflows, replayable audit logs, approval gates, and zero-trust integration for AI systems.",
  },
  {
    name: "Automation Systems",
    path: "/solutions",
    serviceType: "Business workflow automation",
    description:
      "AENS builds automation systems that connect data, tools, approvals, and reporting across enterprise operations.",
  },
  {
    name: "WhatsApp Bots",
    path: "/solutions",
    serviceType: "Conversational automation",
    description:
      "WhatsApp bots for support, sales, onboarding, lead capture, status updates, and internal workflow automation.",
  },
  {
    name: "Custom Web Apps",
    path: "/solutions",
    serviceType: "Custom software development",
    description:
      "Custom web applications for AI products, internal tools, dashboards, automation portals, and enterprise workflows.",
  },
];

export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": {
    path: "/",
    title: "AENS.io | AI Agents & Enterprise AI Solutions",
    description:
      "AENS builds AI agents, deepfake detection systems, automation workflows, and enterprise AI products.",
    keywords:
      "AENS.io, AENS, AI agents, enterprise AI solutions, deepfake detection systems, automation workflows, WhatsApp bots, custom web apps, enterprise AI products",
  },
  "/about": {
    path: "/about",
    title: "About AENS — Engineering Autonomy for Enterprise",
    description:
      "AENS engineers AI for the world's most regulated environments — defense, finance, government and critical infrastructure. Precision, security, and verifiable governance by design.",
    keywords:
      "AENS company, enterprise AI engineering, air-gapped AI, AI governance, regulated AI, defense AI, financial AI",
  },
  "/solutions": {
    path: "/solutions",
    title: "AI Solutions — Custom AI, Autonomous Agents & Deepfake Detection | AENS",
    description:
      "Custom AI consulting, enterprise AI infrastructure, autonomous agents, deepfake detection, audio & video intelligence and AI governance — engineered for production B2B operations.",
    keywords:
      "custom AI solutions, enterprise AI systems, autonomous agents, deepfake detection, audio intelligence, video intelligence, AI consulting, RAG pipeline, private LLM gateway",
  },
  "/contact": {
    path: "/contact",
    title: "Contact AENS — Build Serious AI Systems",
    description:
      "Talk to AENS engineering. Strategic HQ in Dubai, UAE. Engineering HQ in Bangalore, India. Reach us at admin@aens.io to architect your enterprise AI defense.",
    keywords:
      "contact AENS, AENS Dubai, AENS Bangalore, enterprise AI consultation, AI engineering contact",
  },
};

export const NOT_FOUND_SEO: RouteSeo = {
  path: "/404",
  title: "Page Not Found — AENS",
  description: "The page you are looking for does not exist on aens.io.",
};

export function getRouteSeo(path: string): RouteSeo {
  const normalized = path.replace(/\/+$/, "") || "/";
  return ROUTE_SEO[normalized] ?? NOT_FOUND_SEO;
}

export function buildOrganizationJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: "AENS",
    url: SITE_URL,
    logo: `${SITE_URL}/AENSLOGO.png`,
    image: DEFAULT_OG_IMAGE,
    description:
      "AENS.io builds AI agents, deepfake detection systems, automation workflows, WhatsApp bots, custom web apps, and enterprise AI products.",
    email: "admin@aens.io",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressCountry: "IN",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "admin@aens.io",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    knowsAbout: [
      "AI Agents",
      "Autonomous AI Agents",
      "Enterprise AI Agents",
      "Enterprise AI Solutions",
      "Enterprise AI Systems",
      "Deepfake Detection",
      "Deepfake Detection Systems",
      "Automation Workflows",
      "Automation Systems",
      "WhatsApp Bots",
      "Custom Web Apps",
      "AI Governance",
      "Workflow Automation",
      "Retrieval Augmented Generation",
      "Private LLM Deployment",
    ],
  });
}

export function buildServiceJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AENS AI agent and enterprise AI services",
    url: SITE_URL,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        serviceType: service.serviceType,
        description: service.description,
        url: `${SITE_URL}${service.path}`,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: "Worldwide",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Enterprise buyers, operations leaders, security teams, and executive boards",
        },
      },
    })),
  });
}

export function buildWebsiteJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    inLanguage: "en",
  });
}

export function buildBreadcrumbJsonLd(path: string): string {
  const normalized = path.replace(/\/+$/, "") || "/";
  const crumbs: Array<{ name: string; url: string }> = [
    { name: "Home", url: `${SITE_URL}/` },
  ];
  if (normalized !== "/") {
    const seo = ROUTE_SEO[normalized];
    const name = seo?.title.split("—")[0]?.trim() ?? normalized.replace("/", "");
    crumbs.push({ name, url: `${SITE_URL}${normalized}` });
  }
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  });
}
