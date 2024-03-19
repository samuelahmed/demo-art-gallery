import type { Metadata } from "next";
import { Big_Shoulders_Display } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const big_shoulders_display = Big_Shoulders_Display({ 
  subsets: ["latin"],
  variable: "--font-big-sholders"
 });
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outift",

});

export const metadata: Metadata = {
  title: "Demo Art Gallery",
  description: "Demo art gallery for frontend coding challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${big_shoulders_display.variable} ${outfit.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
