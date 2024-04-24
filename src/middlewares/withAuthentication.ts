import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { MiddlewareFactory } from "./types";
import { usersAuthorizedSegment } from "./types/usersAuthorizedSegment";
import { getUserProfile, urlSplitter } from "./service";


const authenticationPages = ["signin", "forgot-password"];

export const withAuthentication: MiddlewareFactory = (
  middleware: NextMiddleware
) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    console.log("with authentication");
    
    if (urlSplitter(request)[1] === "not-found") {
      
      
      return NextResponse.next();
    }

    let cookie = request.cookies.get("next-auth.session-token");

    if (!cookie) {
      
      let [lang,page,authSegment] =  urlSplitter(request)

      if (authenticationPages.includes(page)) return NextResponse.next();
      /*  if (authenticationPages.includes(page))
        return NextResponse.redirect(new URL(`/${lang}/${page}`, request.url)); */
      if (page === "not-found") {
        return NextResponse.redirect(new URL(`/${lang}/signin`, request.url));
      }
      return NextResponse.redirect(new URL(`/${lang}/signin`, request.url));
    }
    let [lang,authSegment,page] = urlSplitter(request)
        
    let profile = await getUserProfile(cookie, (process.env.NEXTAUTH_SECRET as string));
    let userAuthSegment: string = usersAuthorizedSegment[profile];

    if (authenticationPages.includes(page)) {
      return NextResponse.redirect(
        new URL(`/${lang}/${userAuthSegment}`, request.url)
      );
    }

    return middleware(request, event);
  };
};

/* 
  export const withAuthorization: MiddlewareFactory = (
    middleware: NextMiddleware
  ) => {
    return (request: NextRequest, event: NextFetchEvent) => {
      let cookie = request.cookies.get("next-auth.session-token");
      let lang = request.nextUrl.pathname.split("/")[1];
      
      if (request.nextUrl.pathname === `/${lang}/signin` || request.nextUrl.pathname === `/${lang}/forgot-password`) {
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
  */
