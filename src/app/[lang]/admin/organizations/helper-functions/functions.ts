
import { ReadBuildingWithFloorsDetailsDto } from "@common/buildings/dtos/read-buildings.dto";
import { ReadOrganizationWithDetailsDto } from "@common/organizations/dtos/read-organizations.dto";
import { ReadOrganizationDocumentWithBuildingStats } from "../dto/read-organization-overview.dto";


export function updateOrganizationWithBuildingStats(
  organization: ReadOrganizationWithDetailsDto
): ReadOrganizationDocumentWithBuildingStats {
  let totalSurface = organization.buildings.reduce(
    (acc:number, val:ReadBuildingWithFloorsDetailsDto) => acc + val.surface,
    0
  );
  let numberOfBuildings = organization.buildings.length;
  return {
    ...organization,
    totalSurface,
    numberOfBuildings,
  };
}
