
import {  ReadBuildingWithFloorsDetailsDto } from "@common/buildings/dtos/read-buildings.dto";
import { CustomSession } from "@common/types/session.type";


export const getBuildingWithFloors = async (
  session: CustomSession|null,
  buildingId:string,
  
): Promise<ReadBuildingWithFloorsDetailsDto> => {
  const token = session?.user.token;

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  //const headers = new Headers();
  //headers.append("authorization", `Bearer ${token}`);
  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/buildings/${buildingId}/with-floors`,
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data: ReadBuildingWithFloorsDetailsDto = await res.json();
    
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("error while retrieve organization by id")


  }
};

