import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

export const metadata: Metadata = {
  title: "Horizon by Asplenz",
  description: "Eliminate reconstruction costs. Automate examination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
