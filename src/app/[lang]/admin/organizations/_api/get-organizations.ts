import { ReadOrganizationWithDetailsDto } from "@common/organizations/dtos/read-organizations.dto";
import { CustomSession } from "@common/types/session.type";
import { formatUrlQueryAndSearchFields } from "@common/functions/requests";

export const getOrganization = async (
  session: CustomSession,
  organizationId: string,
  queryParams: {details:boolean}|undefined
): Promise<ReadOrganizationWithDetailsDto | undefined | any> => {
  const { token } = session.user;

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/organizations/${organizationId}${formatUrlQueryAndSearchFields(queryParams,undefined)}`,
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
