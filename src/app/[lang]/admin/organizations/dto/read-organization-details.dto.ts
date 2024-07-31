type ReadRoomDto = {
  name: string;
  floorId: string;
  surface: number;
  type: string;
  id: string;
};
type ReadAddressDto = {
  streetAddress: string;
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  postalCode: number;
  country: string;
  coordinates: { lat: number; long: number };
};
type ReadFloorDto = {
  number: number;
  name: string;
  buildingId: string;
  id: string;
  rooms: ReadRoomDto[];
};
type ReadBuildingDto = {
  reference: string;
  name: string;
  constructionYear: number;
  surface: number;
  address: ReadAddressDto;
  type: string;
  __v: 0;
  id: string;
  floors: ReadFloorDto[];
};
export type ReadOrganizationDto = {
  name: string;
  reference: string;
  description: string;
  owner: string;

  id: string;
  buildings: ReadBuildingDto[];
};
