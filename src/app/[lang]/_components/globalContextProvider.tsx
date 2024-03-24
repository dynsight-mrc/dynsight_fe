"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function GlobalContextProvider({ children }: any) {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
}

export default GlobalContextProvider;
