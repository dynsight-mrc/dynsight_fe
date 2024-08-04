import { Session } from "next-auth";
import { ReadUserByOrganizationId, ReadUserOverview } from "../dto/read-user.dto";

export const getUsersOveview = async (
    session: Session|null,
  ): Promise<ReadUserOverview[]> => {
    const token = session?.user.token;
  
    let headers = {
      Authorization: `Bearer ${token}`,
    };
  
    //const headers = new Headers();
    //headers.append("authorization", `Bearer ${token}`);
    try {
      const res = await fetch(
        `http://38.242.254.49:5000/api/users/overview`,
        {
          headers,
          cache: "no-store",
        }
      );
      if (!res.ok) {
        console.log("error");
      }
      let data: ReadUserOverview[] = await res.json();
      return data;
    } catch (error) {
      console.log(error);
  
      throw new Error("error while retrieving users ")
  
  
    }
  };

  export const getUsersByOrganizationId= async (
    session: Session|null,organization:string
  ): Promise<ReadUserByOrganizationId[]> => {
    const token = session?.user.token;
  
    let headers = {
      Authorization: `Bearer ${token}`,
    };
  
    //const headers = new Headers();
    //headers.append("authorization", `Bearer ${token}`);
    try {
      const res = await fetch(
        `http://38.242.254.49:5000/api/users?organization=${organization}`,
        {
          headers,
          cache: "no-store",
        }
      );
      if (!res.ok) {
        console.log("error");
      }
      let data: ReadUserByOrganizationId[] = await res.json();
      return data;
    } catch (error) {
      console.log(error);
  
      throw new Error("error while retrieving users ")
  
  
    }
  };