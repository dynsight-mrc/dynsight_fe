import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  let session = await getServerSession(authOptions);
  if (!session) {
    
    redirect("/signin");
  }  
  return <div className=" w-full h-full">this is home</div>;
}
