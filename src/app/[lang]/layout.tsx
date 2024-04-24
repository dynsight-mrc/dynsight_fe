import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Oswald, Roboto } from "next/font/google";

import GlobalContextProvider from "./_components/globalContextProvider";
import { Locale } from "@/src/i18n-config";
import { ReactNode } from "react";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});
export const metadata: Metadata = {
  title: "Dynsight",
  description: "Connecting Buildings",
};

type RootLayoutParams = {
  children: ReactNode;
  params: { lang: Locale };
};
export default async function RootLayout({
  children,
  params: { lang },
}: RootLayoutParams) {
  return (
    <html
      lang={lang}
      suppressHydrationWarning={true}
      className={`${oswald.variable} ${openSans.variable}`}
    >
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
      </head>
      <body className="bg-[#F9FAFC] h-screen">
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
