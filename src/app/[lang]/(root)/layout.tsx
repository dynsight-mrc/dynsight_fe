import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/authOptions";
import { CustomSession, UserRole } from "../types/session.type";

async function Layout({ children }: { children: React.ReactNode }) {
    let session = await getServerSession(authOptions);
    let { user } = session as CustomSession;
  
    if (!session) {
      redirect("/signin");
    }
    if (user.permissions.role !== UserRole.ROOT) {
      throw new Error("not permitted");
    }
  return <div className="sm:px-32">{children}</div>;
}

export default Layout;
