import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { JotaiProvider } from "@/components/JotaiProvider";
import { getOrganizationJsonLd } from "@/lib/metadata";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  other: {
    "theme-color": "#8c7a6b",
    "msapplication-TileColor": "#8c7a6b",
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
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
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
