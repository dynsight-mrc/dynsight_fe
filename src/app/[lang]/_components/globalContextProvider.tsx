"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

export default function GlobalContextProvider({ children }: any) {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
}


