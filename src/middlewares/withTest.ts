import {
    NextFetchEvent,
    NextMiddleware,
    NextRequest,
    NextResponse,
  } from "next/server";
  import { MiddlewareFactory } from "./types";
  
  export const withTest: MiddlewareFactory = (
    middleware: NextMiddleware
  ) => {
    return (request: NextRequest, event: NextFetchEvent) => {
                
      return middleware(request,event)
    };
  };
  