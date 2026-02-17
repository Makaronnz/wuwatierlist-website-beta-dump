import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://makarongames.com"),
  title: {
    default: "Wuwa Tier List & Guides | Makaron Games",
    template: "%s | Makaron Games"
  },
  description: "MakaronGames Wuthering Waves Tier List, Comp Tier List and more.",
  keywords: ["Wuthering Waves", "Wuwa", "Tier List", "Guides", "Characters", "Echoes", "Weapons", "Builds", "RPG", "Gacha", "Makaron Games", "Makaron"],
  authors: [{ name: "Makaron Games" }],
  creator: "Makaron Games",
  publisher: "Makaron Games",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Wuwa Tier List & Guides | Makaron Games",
    description: "MakaronGames Wuthering Waves Tier List, Comp Tier List and more.",
    url: "https://makarongames.com",
    siteName: "Makaron Games",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Makaron Games Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wuwa Tier List & Guides | Makaron Games",
    description: "MakaronGames Wuthering Waves Tier List, Comp Tier List and more.",
    creator: "@MakaronGames",
    images: ["/images/logo.png"],
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
  verification: {
    google: "1VaMgpliDN1sTO2aTtzWLTdNTZAzwQjvrsNcpT4P9V4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
