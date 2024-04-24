import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { MiddlewareFactory } from "./types";

import { UserRoles } from "./types/usersRoles.type";
import { usersAuthorizedSegment } from "./types/usersAuthorizedSegment";
import { getUserProfile, urlSplitter } from "./service";

export const withAuthorization: MiddlewareFactory = (
  middleware: NextMiddleware
) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    console.log("with authorization");

    //let cookie = request.cookies.get("next-auth.session-token");
    //let cookie = request.cookies.get(process.env.COOKIE_NAME!);
    let cookie = request.cookies.get("__Secure-next-auth.session-token");
    if (cookie) {
      let [lang, authSegment, page] = urlSplitter(request);

      let profile = await getUserProfile(
        cookie,
        process.env.NEXTAUTH_SECRET as string
      );

      if (usersAuthorizedSegment[profile] !== authSegment) {

        const url = request.nextUrl.clone();
        url.pathname = "/not-found";
        return NextResponse.redirect(url);
      }
      return middleware(request, event);
    }
  };
};
/* 
export const withAuthorization: MiddlewareFactory = (
  middleware: NextMiddleware
) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    let cookie = request.cookies.get("next-auth.session-token");
    let urlSegments = request.nextUrl.pathname.split("/");
    let lang = urlSegments[1];
    let page = urlSegments[2];
    let authSegments = urlSegments[3];

    if (page === "not-found") {
      return NextResponse.next();
    }
    let profile: UserRoles;
    let authorizedPaged: string[];
    if (cookie) {
      const decodedCookie = await decode({
        token: cookie?.value,
        secret: process.env.NEXTAUTH_SECRET as string,
      });
      profile = JSON.parse(decodedCookie?.sub as string).permissions.role;
      authorizedPaged = pagesAuthorization[profile]!;

      if (!authorizedPaged.includes(page)) {
        const url = request.nextUrl.clone();
        url.pathname = "/not-found";
        return NextResponse.redirect(url);
      }
      return middleware(request, event);
    }
  };
};
 */
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
