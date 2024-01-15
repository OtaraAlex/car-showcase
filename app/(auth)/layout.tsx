import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import "../globals.css";

export const metedata = {
  title: "CarHub",
  description: "Discover the best cars in the world.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} bg-dark-1 flex-center min-h-screen`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
