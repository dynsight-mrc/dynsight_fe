import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/authOptions";
import { CustomSession } from "./types/session.type";
import { redirect } from "next/navigation";
import { Locale } from "@/src/i18n-config";
import { getDictionary } from "@/src/lib/dictionary";

const UsersHomes = {
  'root': "/home",
  'organization-owner': "/home-oo",
  'company-occupant': "/home-co",
};

export default async function Home({lang}:{lang:Locale}) {
  let session = (await getServerSession(authOptions)) as CustomSession;
  
  //let session = await getServerSession(authOptions) as CustomSession;

  if (!session) {
    redirect(`/${lang}/signin`);
  }
  //@ts-ignore
  redirect(UsersHomes[session?.user?.permissions?.role]);
 
  return <div></div>
}
