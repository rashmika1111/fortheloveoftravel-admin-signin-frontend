import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "For the Love of Travel",
    template: "%s | For the Love of Travel"
  },
  description: "Discover amazing destinations, plan your perfect vacation, and explore the world with our comprehensive travel guides, tours, and vacation packages.",
  keywords: [
    "travel",
    "destinations",
    "vacation",
    "tours",
    "travel guide",
    "adventure travel",
    "cultural experiences",
    "travel planning",
    "world travel",
    "travel blog",
    "travel tips",
    "hidden gems",
    "travel inspiration"
  ],
  authors: [{ name: "For the Love of Travel Team" }],
  creator: "For the Love of Travel",
  publisher: "For the Love of Travel",
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
    locale: "en_US",
    url: "https://fortheloveoftravel.nz",
    siteName: "For the Love of Travel",
    title: "For the Love of Travel - Discover Amazing Destinations",
    description: "Discover amazing destinations, plan your perfect vacation, and explore the world with our comprehensive travel guides, tours, and vacation packages.",
    images: [
      {
        url: "/header.jpg",
        width: 1200,
        height: 630,
        alt: "For the Love of Travel - Discover Amazing Destinations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "For the Love of Travel - Discover Amazing Destinations",
    description: "Discover amazing destinations, plan your perfect vacation, and explore the world with our comprehensive travel guides, tours, and vacation packages.",
    images: ["/header.jpg"],
    creator: "@fortheloveoftravel",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://fortheloveoftravel.nz",
  },
  category: "Travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
