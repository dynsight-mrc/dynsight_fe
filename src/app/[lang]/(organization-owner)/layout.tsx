import { getServerSession } from "next-auth";
import React, { Suspense } from "react";

import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/authOptions";
import { CustomSession, UserRole } from "../types/session.type";

async function Layout({ children }: { children: React.ReactNode }) {
  let session = await getServerSession(authOptions);
  let { user } = session as CustomSession;

  if (!session) {
    redirect("/signin");
  }
  if (user.permissions.role !== UserRole.OO) {
    throw new Error("not permitted");
  }
  return <div className="h-full">{children}</div>;
}

export default Layout;
