import axios from "@/src/lib/axios";
import { CustomSession } from "../../../types/session.type";
import { ReadBuildingDto, ReadBuildingOverview } from "../dto/ReadBuildingDto";
import { Session } from "next-auth";
import { ReadFloorDto } from "../dto/readFloorDto";
import { ReadBlocOverview } from "../../blocs/dto/read-bloc.dto";

export const getRoomsByBuildingId = async (
  session: Session|null,
  buildingId: string
): Promise<ReadBlocOverview[]> => {
  const token  = session?.user.token ;

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  //const headers = new Headers();
  //headers.append("authorization", `Bearer ${token}`);
  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/rooms?building=${buildingId}`,
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

    throw new Error("error while retrieving buildings by organization id")
  }
};

