import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Affiliate Marketing Hub - Boost Your Instagram & YouTube Earnings",
  description: "AI-powered platform to generate viral content ideas, captions, and strategies for affiliate marketing on Instagram and YouTube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
