import axios from "@/src/lib/axios";
import { CustomSession } from "../../../_common/types/session.type";

export const createFloorsWithRooms = async ({session,building, data}:{session:CustomSession,building:string,data:any}) => {    
  const { token } = session.user;

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(`/floors/with-rooms?building=${building}`,data,config);
  return res.data
};
