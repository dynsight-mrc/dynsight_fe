
import { Session } from "next-auth";
import { ReadBlocOverview } from "../dto/read-bloc.dto";

export const getBlocsOverview = async (
    session: Session|null,
  ): Promise<ReadBlocOverview[]> => {
    const token = session?.user.token;
  
    let headers = {
      Authorization: `Bearer ${token}`,
    };
  
    //const headers = new Headers();
    //headers.append("authorization", `Bearer ${token}`);
    try {
      const res = await fetch(
        `http://38.242.254.49:5000/api/rooms/overview`,
        {
          headers,
          cache: "no-store",
        }
      );
      if (!res.ok) {
        console.log("error");
      }
      let data: ReadBlocOverview[] = await res.json();
      return data;
    } catch (error) {
      console.log(error);
  
      throw new Error("error while retrieve blocs")
  
  
    }
  };