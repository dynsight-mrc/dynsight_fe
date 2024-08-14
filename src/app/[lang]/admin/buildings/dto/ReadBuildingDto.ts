type ReadRoomDto = {
  name: string;
  floorId: string;
  surface: number;
  type: string;
  id: string;
};
export type ReadAddressDto = {
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
export type ReadBuildingDto = {
  organization:{
    name:string,
    owner:string,
    id:string,  
  }
  reference: string;
  name: string;
  constructionYear: number;
  surface: number;
  address: ReadAddressDto;
  type: string;
  id: string;
  floors: ReadFloorDto[];
};


export type ReadBuildingOverview = {
  id:string
  reference: string;
  name: string;
  constructionYear: number;
  surface: number;
  address: ReadAddressDto;
  type: string;
  numberOfFloors: number;
  numberOfRooms:number;
  organization:{name:string,owner:string};

};