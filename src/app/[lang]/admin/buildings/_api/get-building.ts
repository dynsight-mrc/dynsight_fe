import axios from "@/src/lib/axios";
import { CustomSession } from "../../../types/session.type";
import { ReadBuildingDto, ReadBuildingOverview } from "../dto/ReadBuildingDto";
import { Session } from "next-auth";

export const getBuildingsByOrganizationId = async (
  session: Session,
  organizationId: string
): Promise<ReadBuildingDto[]> => {
  const { token } = session.user;

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  //const headers = new Headers();
  //headers.append("authorization", `Bearer ${token}`);
  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/buildings/${organizationId}`,
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data: ReadBuildingDto[] = await res.json();

    return data;
  } catch (error) {
    console.log(error);

    throw new Error("error while retrieving buildings by organization id")
  }
};

export const getBuildingById = async (
  session: Session|null,
  buildingId: string
): Promise<ReadBuildingDto> => {
  const token = session?.user.token;

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  //const headers = new Headers();
  //headers.append("authorization", `Bearer ${token}`);
  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/buildings/${buildingId}`,
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data: ReadBuildingDto = await res.json();
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("error while retrieve organization by id")


  }
};


export const getBuildingsOveview = async (
  session: Session|null,
): Promise<ReadBuildingOverview[]> => {
  const token = session?.user.token;

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  //const headers = new Headers();
  //headers.append("authorization", `Bearer ${token}`);
  try {
    const res = await fetch(
      `http://38.242.254.49:5000/api/buildings/overview`,
      {
        headers,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      console.log("error");
    }
    let data: ReadBuildingOverview[] = await res.json();
    
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("error while retrieve organization by id")


  }
};