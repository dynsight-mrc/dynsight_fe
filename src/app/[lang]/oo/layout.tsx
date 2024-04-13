import React from "react";
import LayoutProvider from "./_components/layoutProvider";

async function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutProvider lang={""}>{children}</LayoutProvider>;
}

export default Layout;
