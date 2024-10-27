import axios from "@/src/lib/axios";
import { CustomSession } from "@common/types/session.type";

export const createOrganization = async ({session, data}:{session:CustomSession,data:any}) => {    
  console.log(session);
  
  const token  = session.user.token;

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post("/accounts",data,config);
  return res.data
};
