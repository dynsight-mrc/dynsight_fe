import type { Metadata } from "next";
import "./globals.css"
import { Open_Sans, Oswald, Roboto } from "next/font/google";
import LayoutProvider from "./_components/layoutProvider";

import GlobalContextProvider from "./_components/globalContextProvider";
import UserComponentData from "./_components/menu/default-menu/userComponentData";
import { Locale } from "@/src/i18n-config";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const oswald = Oswald({
  weight: ["200","300","400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable:"--font-oswald"
})
const openSans = Open_Sans({
  weight: ["300","400","500","600","700","800"],
  subsets: ["latin"],
  display: "swap",
  variable:"--font-open-sans"
})
const metadata: Metadata = {
  title: "Dynsight",
  description: "Connecting Buildings",
};

export default async function RootLayout({
  children,
  params:{lang}
}: {
    children: React.ReactNode;
    params:{lang:Locale}
}) {
  return (
    <html lang={lang} className={`${oswald.variable} ${openSans.variable}`} >
      <body className="bg-[#F9FAFC] h-screen">
        
        <GlobalContextProvider>
          <LayoutProvider lang={lang}>{children}</LayoutProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
