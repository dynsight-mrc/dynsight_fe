import { ReadBuildingwithDetailsDto } from "@/src/app/[lang]/_common/buildings/dtos/read-buildings.dto";

export type ReadOrganizationDocumentWithBuildingStats = {
  name: string;
  reference: string;
  description: string;
  owner: string;
  buildings: ReadBuildingwithDetailsDto[];
  id: string;
  type: string;
  image?: string;
  numberOfBuildings:number;
  totalSurface:number
}
