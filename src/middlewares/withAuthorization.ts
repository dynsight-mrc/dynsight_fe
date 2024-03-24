import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { MiddlewareFactory } from "./types";

export const withAuthorization: MiddlewareFactory = (
  middleware: NextMiddleware
) => {
  return (request: NextRequest, event: NextFetchEvent) => {
    let cookie = request.cookies.get("next-auth.session-token");
    let lang = request.nextUrl.pathname.split("/")[1];
    
    if (request.nextUrl.pathname === `/${lang}/signin`) {
      if (cookie) {
        return NextResponse.redirect(new URL(`/${lang}`, request.url));
      }
      return NextResponse.next();
    }
    if (!cookie) {
      return NextResponse.redirect(new URL(`/${lang}/signin`, request.url));
    }

    return middleware(request, event);
  };
};
