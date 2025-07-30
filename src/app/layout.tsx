import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Baslik from "@/components/Baslik";
import CustomFooter from "@/components/CustomFooter";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Mustafa Taşlıalan Web Sitesi",
  description: "Mersin Silifke bölgesinde teknik destek ve servis hizmetleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        <Baslik />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
