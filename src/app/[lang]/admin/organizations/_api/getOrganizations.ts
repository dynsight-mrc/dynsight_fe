import axios from "@/src/lib/axios";
import { CustomSession } from "../../../types/session.type";
import { ReadOrganizationOverviewDto } from "../dto/read-organization-overview.dto";
export const getOrganizations = async (
  session: CustomSession
): Promise<ReadOrganizationOverviewDto[] | undefined|any> => {
  const { token } = session.user;

  
   let headers= {
      Authorization: `Bearer ${token}`,
    }
  
  //const headers = new Headers();
  //headers.append("authorization", `Bearer ${token}`);
  try {
    const res = await fetch(
      "http://38.242.254.49:5000/api/organizations/overview",
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data = await res.json()
    return data
  } catch (error) {
    console.log(error);
  }
};
