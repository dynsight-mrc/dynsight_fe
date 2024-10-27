import axios from "@/src/lib/axios";
import { CustomSession } from "@common/types/session.type";

export const patchOrganization = async ({session,organization, data}:{session:CustomSession,organization:string,data:any}) => {    

  
  
  const token  = session.user.token;

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.patch(`/organizations/${organization}`,data,config);  
    return res.data

  } catch (error) {
    console.log(error);
    throw new Error('error')
  }
  
};
