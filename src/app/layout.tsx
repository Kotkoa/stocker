import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { JotaiProvider } from "@/components/JotaiProvider";
import { getOrganizationJsonLd } from "@/lib/metadata";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png?v2",
        width: 1200,
        height: 630,
        alt: "Kotkoa Studio — Carefully crafted digital assets: watercolor illustrations, floral patterns, photo bundles, and mockups",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png?v2",
        width: 1200,
        height: 630,
        alt: "Kotkoa Studio — Carefully crafted digital assets",
      },
    ],
  },
  other: {
    "theme-color": "#3D3833",
    "msapplication-TileColor": "#3D3833",
  },
  icons: {
    icon: "/favicon.ico?v2",
    apple: "/apple-icon.png?v2",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${nunitoSans.variable} antialiased min-h-screen flex flex-col`}>
        <JotaiProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getOrganizationJsonLd()),
            }}
          />
          <Header />
          <MobileMenu />
          <main className="flex-1">{children}</main>
          <Footer />
        </JotaiProvider>
        <Analytics />
      </body>
    </html>
  );
}
