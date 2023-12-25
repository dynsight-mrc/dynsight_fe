import nextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("next-auth.session-token");
  
  if(request.nextUrl.pathname==="/signin"){

    if (cookie) {    
        return NextResponse.redirect(new URL("/", request.url));
      }
      return NextResponse.next();  
  }  
  if (cookie) {

    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/signin", request.url));
}

export const config = {
  matcher: [
    "/home",
    "/configuration",
    "/signin"
  ],
};
