import { CustomSession } from "../../types/session.type";
import { ReadBuildingWithFloorsDetailsDto } from "../dtos/read-buildings.dto";

export const getManyBuildingsWithFloorsDetails = async (
  session: CustomSession,
  fields: Record<string, any>[] | [] = []
): Promise<ReadBuildingWithFloorsDetailsDto[]> => {
  const token = session?.user.token;
  let headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/buildings/with-floors?fields=${JSON.stringify(
        fields
      )}`,
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data: ReadBuildingWithFloorsDetailsDto[] = await res.json();

    return data;
  } catch (error) {
    console.log(error);

    throw new Error("error while retrieve organization by id");
  }
};
