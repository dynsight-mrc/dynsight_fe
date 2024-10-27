import axios from "@/src/lib/axios";
import { CustomSession } from "../../types/session.type";
import { Session } from "next-auth";

export const createBuildingWithDetails = async ({session,organization, data}:{session:CustomSession,organization:string,data:any}) => {    
  const { token } = session.user;

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(`/buildings/with-details?organization=${organization}`,data,config);
  return res.data
};
