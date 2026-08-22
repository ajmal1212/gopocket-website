export const SITE_URL = "https://gopocket.in";
export const SITE_NAME = "GoPocket";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`;
export const DEFAULT_DESCRIPTION =
  "Investing and trading made simple, affordable and accessible for every Indian. Stocks, mutual funds, IPOs, F&O, currencies and commodities — all on one platform.";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

// Ported from gopocket.in's sitewide Organization JSON-LD (verified 2026-08-22).
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GoPocket",
  legalName: "GoPocket Invest Tech Private Limited",
  alternateName: "SKY Commodities India Private Limited",
  description:
    "Open a FREE demat account with GoPocket in 5 mins. Trade stocks, F&O, mutual funds & IPOs on NSE, BSE & MCX. India's trusted SEBI-registered broker.",
  url: absoluteUrl("/"),
  logo: {
    "@type": "ImageObject",
    url: DEFAULT_OG_IMAGE,
  },
  telephone: "+91 95853 95753",
  email: "support@gopocket.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "40-49, IG Towers, Devangapet 3rd Street, Flower Market",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641001",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/Gopocketoffical/",
    "https://x.com/GoPocket_offl",
    "https://www.youtube.com/channel/UCe1lyV5JAWvPUkLcXVWYoQQ",
    "https://www.instagram.com/gopocket_official/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "9",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Vijaya Kumar" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I aspired to engage in stock market trading for two decades but struggled to find the right platform. Fortunately, a friend introduced me to GoPocket, and since then, I have been trading safely and find the app easy to use. Overall, my experience with GoPocket has been highly satisfactory.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Padmavathi" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Hi, I am new to trading and I choose GoPocket. I feel it's a good choice. The customer support provided is really excellent. Anytime they are available to help us. Happy to be a part of GoPocket user.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rameshkumar" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Hello, I've been trading in the forex market for the past 10 years with significant investments, resulting in losses. However, my friend introduced me to GoPocket for trading. The mob app is excellent hassle free trading.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ajay Karthik" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I have been associated with GoPocket for more than a year. Previously I have invested in commodities, now I trade in securities and equities with GoPocket Thanks GoPocket for your support.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mohana Sundaram" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Hello, GoPocket gives a low brokerage charge and good service. User-friendly app and providing good customer service.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Lakshmi Narayanan" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "GoPocket offers good customer support and they offer a safe app, as a beginner and learner of the stock market it is very helpful for me. Thank you GoPocket for service and support.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rajendran" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Muniraj" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I've been using the Sky app for over a few years and now Sky introduced Gopocket, I must say GoPocket offers a simple and hassle-free account opening process. It's the most supportive platform for both trading and investing.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Arokianathan" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Hi all I have been using Sky for a few years and now am using GoPocket the app is user friendly and easy to place orders, and a secure app for investment. Thank you GoPocket.",
    },
  ],
};

// Single WebSite entity — the live site injects this block twice and points
// its SearchAction at a search page this rebuild doesn't have, so both are
// fixed here rather than reproduced.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "#website",
  name: SITE_NAME,
  url: absoluteUrl("/"),
};

// Ported from gopocket.in's sitewide LocalBusiness JSON-LD (verified 2026-08-22).
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GoPocket Office – Coimbatore",
  url: absoluteUrl("/"),
  image: [DEFAULT_OG_IMAGE],
  email: "support@gopocket.in",
  telephone: "0422-3525900",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Coimbatore",
    addressRegion: "Tamilnadu",
    postalCode: "641004",
    streetAddress:
      "7, 3rd floor, Office, Mayflower Valencia, 336/2, 3, Avinashi Rd, near Nava India Road, busstand.",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.019214233976077,
    longitude: 76.991034025297,
  },
  openingHours: "Mo-Fr 09:00-17:00",
  priceRange: "$$$",
  hasMap: "https://maps.app.goo.gl/v8dKuyVsUXJwPY3V9",
};

// Ported from gopocket.in's sitewide WebApplication JSON-LD (verified 2026-08-22).
export const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Trading Software",
  image: DEFAULT_OG_IMAGE,
  description: DEFAULT_DESCRIPTION,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.85",
    bestRating: "5",
    worstRating: "4",
    ratingCount: "216",
  },
  applicationCategory: "FinanceApplication",
  offers: {
    "@type": "Offer",
    price: "0.00",
    priceCurrency: "INR",
  },
  operatingSystem: "All",
  url: absoluteUrl("/"),
};

export const sitewideSchema = [
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  webApplicationSchema,
];

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function itemListSchema(
  items: { name: string; description: string; url?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.description,
      ...(item.url ? { url: absoluteUrl(item.url) } : {}),
    })),
  };
}
