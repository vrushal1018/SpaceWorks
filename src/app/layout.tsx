import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "SpaceWorks | An Ina TechFM Vertical",
  description: "SpaceWorks - Design-led thinking and civil works. Spaces shaped around business, people, and purpose.",
  keywords: "SpaceWorks, Ina TechFM, Civil Works, Architecture, Construction",
  openGraph: {
    title: "SpaceWorks | An Ina TechFM Vertical",
    description: "Design-led thinking and civil works. Spaces shaped around business, people, and purpose.",
    type: "website",
    images: [
      {
        url: "/spaceworksog.png",
        width: 1200,
        height: 630,
        alt: "SpaceWorks Preview",
      },
    ],
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
