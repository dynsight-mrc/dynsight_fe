import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest } from "next/server";
import { UserRoles } from "./types/usersRoles.type";
import { decode } from "next-auth/jwt";

export const urlSplitter = (request: NextRequest): string[] => {
  return request.nextUrl.pathname.split("/").filter((ele) => ele);
};

export const getUserProfile = async (
  cookie: RequestCookie | undefined,
  secret: string
): Promise<UserRoles> => {
  const decodedCookie = await decode({
    token: cookie?.value,
    secret: secret,
  });
  //@ts-ignore
  return JSON.parse(decodedCookie?.sub).permissions.role as UserRoles;
};
