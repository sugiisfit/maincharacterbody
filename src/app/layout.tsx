import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: {
    default: "Main Character Body — Build a Body That Turns Heads",
    template: "%s | Main Character Body",
  },
  description:
    "Stop blending in. Build a physique that commands attention and matches the life you're building.",
  metadataBase: new URL("https://maincharacterbody.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Main Character Body",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Header />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
