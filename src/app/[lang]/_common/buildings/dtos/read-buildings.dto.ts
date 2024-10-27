import { AddressDto } from "../../address/dtos/address.dto";
import { ReadFloorDetailsWithRoomsDto } from "../../floors/dtos/read-floors.dto";
import { ReadOrganizationDto } from "../../organizations/dtos/read-organizations.dto";


export type ReadBuildingwithDetailsDto = {
    id: string;
    reference: string;
    name: string;
    constructionYear: number;
    surface: number;
    type: string;
    address: AddressDto;
    organization: ReadOrganizationDto;
  }
  
  export type ReadBuildingDto = {
    id: string;
    reference: string;
    name: string;
    constructionYear: number;
    surface: number;
    type: string;
    address: AddressDto;
    organizationId:string;
  }
  

  export type ReadBuildingWithFloorsDetailsDto = {
    reference: string;
    name: string;
    constructionYear: number;
    surface: number;
    address: AddressDto;
    type: string;
    id: string;
    organization:ReadOrganizationDto;
    floors: ReadFloorDetailsWithRoomsDto[];
  };
  
  export type ReadBuildingWithFloorsAndStatsDto = {
    reference: string;
    name: string;
    constructionYear: number;
    surface: number;
    address: AddressDto;
    type: string;
    id: string;
    organization:ReadOrganizationDto;
    floors: ReadFloorDetailsWithRoomsDto[];
    numberOfFloors:number,
    numberOfRooms:number
  };
  