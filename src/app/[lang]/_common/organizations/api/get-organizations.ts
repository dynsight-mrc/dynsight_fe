import axios from "@/src/lib/axios";
import { CustomSession } from "@common/types/session.type";
import { ReadOrganizationWithDetailsDto } from "../dtos/read-organizations.dto";

export const getOrganizations = async (
  session: CustomSession,
  queryParams: Record<string, any>
): Promise<ReadOrganizationWithDetailsDto[] | undefined | any> => {
  const { token } = session.user;

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/organizations?details=${queryParams?.details?.toString()}`,
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
