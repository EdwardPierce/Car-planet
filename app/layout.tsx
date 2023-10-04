import Topbar from "@/layers/mainPage/components/Topbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/layers/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarPlanet",
  description: "Find, book, rent a car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Topbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
