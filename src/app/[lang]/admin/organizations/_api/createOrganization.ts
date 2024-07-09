import axios from "@/src/lib/axios";
import { CustomSession } from "../../../types/session.type";

export const createOrganization = async ({session, data}:{session:CustomSession,data:any}) => {    
  const { token } = session.user;

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post("/account",data,config);
  return res.data
};
