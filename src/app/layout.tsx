import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google"; // Add Poppins to match your components
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

// Define rich JSON-LD structured data for organization
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "El Gbe-yon",
  description:
    "Leading waste management and sustainable agriculture solutions provider in Nigeria",
  url: "https://elgbeyon.com", // Replace with your actual domain
  logo: "https://elgbeyon.com/logo.png", // Replace with your actual logo path
  sameAs: [
    "https://facebook.com/elgbeyon", // Replace with actual social media URLs
    "https://twitter.com/elgbeyon",
    "https://instagram.com/elgbeyon",
  ],
  serviceType: [
    "Waste Management",
    "Recycling",
    "Farmers Consultation",
    "Sustainable Agricultural Products",
  ],
};

// Comprehensive metadata configuration for SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://elgbeyon.com"), // Replace with your actual domain
  title: {
    default:
      "El Gbe-yon | Sustainable Waste Management & Agriculture Solutions",
    template: "%s | El Gbe-yon",
  },
  description:
    "El Gbe-yon offers innovative waste management and sustainable agriculture solutions in Nigeria. We transform agricultural waste into valuable compost and provide farmer support and eco-friendly products.",
  keywords: [
    "waste management nigeria",
    "agricultural waste recycling",
    "sustainable farming nigeria",
    "organic compost",
    "farmer consultation",
    "eco-friendly fertilizers",
    "agricultural waste management",
  ],
  creator: "El Gbe-yon",
  publisher: "El Gbe-yon",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://elgbeyon.com",
    title: "El Gbe-yon | Sustainable Waste Management & Agriculture Solutions",
    description:
      "Transforming agricultural waste into valuable resources. El Gbe-yon offers comprehensive waste management services and supports sustainable farming practices across Nigeria.",
    siteName: "El Gbe-yon",
    images: [
      {
        url: "https://elgbeyon.com/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "El Gbe-yon Sustainable Agriculture Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Gbe-yon | Sustainable Waste Management & Agriculture Solutions",
    description:
      "Transforming agricultural waste into valuable resources. El Gbe-yon offers comprehensive waste management services and supports sustainable farming practices across Nigeria.",
    creator: "@elgbeyon", // Replace with your actual Twitter handle
    images: ["https://elgbeyon.com/twitter-image.jpg"], // Replace with your actual Twitter image
  },
};

// Viewport settings for responsive design
export const viewport: Viewport = {
  themeColor: "#129E58",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add structured data for SEO */}
        <meta
          name="google-site-verification"
          content="MmEvIvpoACU9tJ5PypKnQwkiid054uCMC8I4oLfiJis"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {/* Favicons for various devices */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
