"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { useJsApiLoader } from "@react-google-maps/api";

export default function GlobalContextProvider({ children }: any) {
  const { isLoaded, loadError } = useJsApiLoader({
    id:  (process.env.NEXT_PUBLIC_GOOGLE_MAP_PROJECT_ID as string)!,
    googleMapsApiKey:( process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY as string)!
    
  });
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
}


