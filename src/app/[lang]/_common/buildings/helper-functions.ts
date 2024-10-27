import { ReadFloorDetailsWithRoomsDto } from "../floors/dtos/read-floors.dto";
import { ReadBuildingWithFloorsAndStatsDto, ReadBuildingWithFloorsDetailsDto } from "./dtos/read-buildings.dto";


export function updateBuildingWithFloorsAndRoomsStats(
  building: ReadBuildingWithFloorsDetailsDto
): ReadBuildingWithFloorsAndStatsDto {
  let numberOfFloors = building.floors.length;

  let numberOfRooms = building.floors.reduce(
    (acc: number, val: ReadFloorDetailsWithRoomsDto) =>
      acc + val.rooms.length,
    0
  );
  return {
    ...building,
    numberOfRooms,
    numberOfFloors,
  };
}
