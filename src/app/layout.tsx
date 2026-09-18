import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import TopStatusBar from "@/components/top-status-bar";
import Footer from "@/components/footer";
import { CurrencyProvider } from "@/lib/currency-context";
import { LanguageProvider } from "@/lib/language-context";
import OfflineBanner from "@/components/offline-banner";
import "./globals.css";

export const metadata: Metadata = {
  title: "BharatYatra | Personalized India Travel Planner",
  description: "Plan multi-city journeys across India. Discover verified destinations across all States and UTs, compare transport, build day-wise itineraries, and track budgets.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <CurrencyProvider>
            <TopStatusBar />
            <Navbar />
            {children}
            <Footer />
            <OfflineBanner />
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
