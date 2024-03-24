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
        
        console.log('this is second middleware');
        
      return middleware(request,event)
    };
  };
  