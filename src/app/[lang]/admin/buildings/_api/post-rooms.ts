import axios from "@/src/lib/axios";
import { CustomSession } from "../../../types/session.type";
import { ReadBuildingDto, ReadBuildingOverview } from "../dto/ReadBuildingDto";
import { Session } from "next-auth";
import { ReadFloorDto } from "../dto/readFloorDto";
import { ReadBlocOverview } from "../../blocs/dto/read-bloc.dto";
import { CreateRooms } from "../dto/create-rooms";

export const createRooms = async ({
  session,
  building,
  rooms,
}: {
  session: Session | null;
  building: string;
  rooms: CreateRooms;
}): Promise<any[]> => {
  const token = session?.user.token;

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  //const headers = new Headers();
  //headers.append("authorization", `Bearer ${token}`);
  try {
    const res = await axios.post(`/rooms?building=${building}`, rooms, config);
    return res.data;
  } catch (error) {
    console.log(error);

    throw new Error("error while retrieving buildings by organization id");
  }
};
