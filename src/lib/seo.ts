import type { Metadata } from "next";
import { assetPath } from "@/lib/assets";

const siteName = "DC Imports & Exports";
const tagline = "Connecting Markets. Moving Possibilities.";
const defaultDescription =
  "DC Imports & Exports demo corporate website for international trade, logistics, media, careers, and enquiry content.";

function getMetadataBase() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!siteUrl) {
    return undefined;
  }

  try {
    return new URL(`${siteUrl.replace(/\/$/, "")}${basePath}/`);
  } catch {
    return undefined;
  }
}

export const canonicalRoutes = [
  "/",
  "/about",
  "/about/history",
  "/about/vision-mission",
  "/about/leadership",
  "/services",
  "/services/import",
  "/services/export",
  "/services/logistics",
  "/services/sourcing",
  "/services/documentation",
  "/services/tariff",
  "/facility",
  "/careers",
  "/media",
  "/media/photos",
  "/media/videos",
  "/media/press",
  "/media/brochure",
  "/media/certificates",
  "/contact-us"
];

export function absoluteUrl(path = "/") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return new URL(`${basePath}${path}`, base).toString();
}

export function pageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      siteName,
      type: "website",
      url: path
    },
    twitter: {
      card: "summary",
      title: `${title} | ${siteName}`,
      description
    }
  };
}

export const siteMetadata: Metadata = {
  ...(getMetadataBase() ? { metadataBase: getMetadataBase() } : {}),
  applicationName: siteName,
  title: {
    default: `${siteName} | ${tagline}`,
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  icons: {
    icon: assetPath("/assets/dc-logo.jpeg"),
    apple: assetPath("/assets/dc-logo.jpeg")
  },
  openGraph: {
    title: siteName,
    description: defaultDescription,
    siteName,
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: defaultDescription
  },
  robots: {
    index: true,
    follow: true
  }
};
