import type { Metadata } from "next";
import "./globals.css";
import {DM_Sans} from "next/font/google";
const dmSans = DM_Sans({
	subsets : ["latin"],
	display: "swap",
	variable :"--font-dm-sans"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
