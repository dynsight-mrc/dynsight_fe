import axios from "@/src/lib/axios";
import { CustomSession } from "../../../types/session.type";
import { ReadBuildingDto } from "@admin/buildings/dto/ReadBuildingDto";
import { Session } from "next-auth";

export const getBuildingsByOrganizationId = async (
  session: Session|null,
  organizationId: string
): Promise<any | undefined> => {
  const token = session && session.user.token;

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  //const headers = new Headers();
  //headers.append("authorization", `Bearer ${token}`);
  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/buildings?organization=${organizationId}`,
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data: ReadBuildingDto = await res.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
};
