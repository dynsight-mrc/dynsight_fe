type ReadRoomDto = {
    name: string;
    floorId: string;
    surface: number;
    type: string;
    id: string;
  };
  
export type ReadFloorDto = {
    number: number;
    name: string;
    buildingId: string;
    id: string;
    rooms: ReadRoomDto[];
  };