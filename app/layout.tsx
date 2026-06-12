import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Providers from "@/components/client-providers/SnackbarProvider";


const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Supreme OS",
    template: "%s | Supreme OS",
  },
  description:
    "Supreme OS helps founders build a personal brand system with clarity, content, community, and consistent growth.",
  keywords: [
    "Supreme OS",
    "personal brand",
    "founder brand",
    "creator system",
    "business coaching",
    "brand operating system",
  ],
  authors: [{ name: "Supreme OS" }],
  creator: "Supreme OS",
  publisher: "Supreme OS",
  icons: {
    icon: "/logos/s coach fav 2.svg",
    shortcut: "/logos/s coach fav 2.svg",
    apple: "/logos/s coach fav 2.svg",
  },
  openGraph: {
    title: "Supreme OS",
    description:
      "Build a founder-led personal brand system with clear positioning, content, and community.",
    url: "https://supreme-os.com",
    siteName: "Supreme OS",
    type: "website",
    images: [
      {
        url: "/og/supreme-os-og.jpg",
        width: 1200,
        height: 630,
        alt: "Supreme OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme OS",
    description:
      "Build a founder-led personal brand system with clear positioning, content, and community.",
    images: ["/og/supreme-os-og.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f7f5ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-body selection:bg-primary-300 selection:text-ink">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <HeaderSection />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}