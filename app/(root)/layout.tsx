import "../globals.css"

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Footer, Navbar } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          <Navbar />
          {children}
          <Footer />
          </body>
      </html>
    </ClerkProvider>
  );
}
