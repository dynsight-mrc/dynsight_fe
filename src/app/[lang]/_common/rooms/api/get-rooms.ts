import { Session } from "next-auth";
import { ReadRoomWithDetails } from "../dtos/read-rooms.dto";

export const getRooms = async (
    session: Session|null,
   
    queryParams:{details:boolean},
    fields:{name:string,value:any}[]|[]=[],
  ): Promise<ReadRoomWithDetails[]> => {
    const token = session?.user.token;
  
    let headers = {
      Authorization: `Bearer ${token}`,
    };
  
    //const headers = new Headers();
    //headers.append("authorization", `Bearer ${token}`);
    try {
      const res = await fetch(
        `http://38.242.254.49:5000/api/rooms?details=${queryParams?.details.toString()}&fields=${JSON.stringify(fields)}`,
        {
          headers,
          cache: "no-store",
        }
      );
      if (!res.ok) {
        console.log("error");
      }
      let data: ReadRoomWithDetails[] = await res.json();
      return data;
    } catch (error) {
      console.log(error);
  
      throw new Error("error while retrieve blocs")
  
  
    }
  };