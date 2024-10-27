import { ReadBuildingWithFloorsDetailsDto } from "../../buildings/dtos/read-buildings.dto";

export type ReadOrganizationWithDetailsDto = {
  name: string;
  reference: string;
  description: string;
  owner: string;
  buildings: ReadBuildingWithFloorsDetailsDto[];
  id: string;
  type: string;
  image?: string;
};

export type ReadOrganizationDto = {
  name: string;
  reference: string;
  description: string;
  owner: string;
  id: string;
  type?: string;
  image?: string;
};
