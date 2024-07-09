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
    let cookie = request.cookies.get(process.env.COOKIE_NAME!);
    //let cookie = request.cookies.get("__Secure-next-auth.session-token");
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
