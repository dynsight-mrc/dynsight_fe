import { CustomSession } from "@common/types/session.type";
import { ReadUserDto } from "../dtos/read-user.dto";

export const getUsers = async (
    session: CustomSession|null,
    fields:Record<string,any>[]|[]=[]
  ): Promise<ReadUserDto[]> => {
    const token = session?.user.token;
  
    let headers = {
      Authorization: `Bearer ${token}`,
    };
  
    //const headers = new Headers();
    //headers.append("authorization", `Bearer ${token}`);
    try {
      const res = await fetch(
        `http://38.242.254.49:5000/api/users?fields=${JSON.stringify(fields)}`,
        {
          headers,
          cache: "no-store",
        }
      );
      if (!res.ok) {
        console.log("error");
      }
      let data: ReadUserDto[] = await res.json();
      return data;
    } catch (error) {
      console.log(error);
  
      throw new Error("error while retrieving users ")
  
  
    }
  };
