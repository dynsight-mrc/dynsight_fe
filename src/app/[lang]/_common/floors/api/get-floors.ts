import { formatUrlQueryAndSearchFields } from "@common/functions/requests";
import { CustomSession } from "../../types/session.type";
import { ReadFloorDetailsWithRoomsDto, ReadFloorDto } from "../dtos/read-floors.dto";


export async function getFloors(
  session: CustomSession,
  queryParams: { details: boolean }|undefined,
  fields: { name: string, value: string }[]|undefined,

) {
    const token = session?.user.token;
  let headers = {
    Authorization: `Bearer ${token}`,
  };

  
  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/floors${(formatUrlQueryAndSearchFields(queryParams,fields))}`,
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data: ReadFloorDto[]|ReadFloorDetailsWithRoomsDto[] = await res.json();

    return data;
  } catch (error) {
    console.log(error);

    throw new Error("error while retrieve organization by id");
  }
}

export async function getFloorsDetailsWithRooms(
    session: CustomSession,
    fields: { name: string; value: string }[]=[],
  ) {
      const token = session?.user.token;
    let headers = {
      Authorization: `Bearer ${token}`,
    };
  
    try {
      const res = await fetch(
        `http://38.242.254.49:5000/api/floors/with-rooms?fields=${JSON.stringify(
          fields
        )}`,
        {
          headers,
          cache: "no-store",
        }
      );
      if (!res.ok) {
        console.log("error");
      }
      let data: ReadFloorDetailsWithRoomsDto[]|[] = await res.json();
  
      return data;
    } catch (error) {
      console.log(error);
  
      throw new Error("error while retrieve organization by id");
    }
  }
  
