import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";  // Mutlaka import et
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
  description: "Mersin Silifke bölgesinde teknik mühendislik hizmetleri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        {/* Google Analytics kodları next/script ile */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WPLN4GS5XG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WPLN4GS5XG');
          `}
        </Script>

        <Baslik />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
