"use client";
import React, { useState } from "react";

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { useJsApiLoader } from "@react-google-maps/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./shadcn/ui/toaster";
const queryClientOptions = {
  defaultOptions: {
    // 5 * 1000
    queries: {
      staleTime: 60000,
    },
  },
};

export default function GlobalContextProvider({ children }: any) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: (process.env.NEXT_PUBLIC_GOOGLE_MAP_PROJECT_ID as string)!,
    googleMapsApiKey: (process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY as string)!,
  });
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>{children}</RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
      <Toaster />
    </SessionProvider>
  );
}
