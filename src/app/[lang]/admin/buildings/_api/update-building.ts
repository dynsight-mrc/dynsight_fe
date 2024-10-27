import axios from "@/src/lib/axios";
import { CustomSession } from "@common/types/session.type";

export const patchBuilding = async ({session,building, data}:{session:CustomSession,building:string,data:any}) => {    

  
  
  const token  = session.user.token;

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.patch(`/buildings/${building}`,data,config);  
    return res.data

  } catch (error) {
    console.log(error);
    throw new Error('error')
  }
  
};
