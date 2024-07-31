import { Session } from "next-auth";
import { CustomSession } from "../../../types/session.type";
import { ReadOrganizationDto } from "../dto/read-organization-details.dto";
export const getOrganizationById = async (
  session: Session | null,
  organizationId: string
): Promise<ReadOrganizationDto | undefined> => {
  const token = session?.user?.token;

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  //const headers = new Headers();
  //headers.append("authorization", `Bearer ${token}`);
  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/organizations/${organizationId}`,
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data: ReadOrganizationDto = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
