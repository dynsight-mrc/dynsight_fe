import axios from "@/src/lib/axios";
import { CustomSession } from "../../types/session.type";
import { CreateRoomsAttrs } from "../dtos/create-rooms.dto";

export const createRooms = async ({
  session,
  building,
  rooms,
}: {
  session: CustomSession;
  building: string;
  rooms: CreateRoomsAttrs;
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
    const res = await axios.post(`/rooms/many?building=${building}`, rooms, config);
    return res.data;
  } catch (error) {
    console.log(error);

    throw new Error("error while retrieving buildings by organization id");
  }
};