import { ReadBuildingDto } from "../../buildings/dtos/read-buildings.dto";
import { ReadOrganizationDto } from "../../organizations/dtos/read-organizations.dto";
import { ReadRoomWithDetails } from "../../rooms/dtos/read-rooms.dto";

export type ReadFloorDetailsWithRoomsDto = {
    id:string
    number: number;
    name: string;
    surface?: number;
    building: ReadBuildingDto;
    organization: ReadOrganizationDto;
    numberOfRooms?: number;
    occupancyStatus?: 'Vacant' | 'Occupied' | 'Under Maintenance';
    constructionYear?: number;
    floorPlan?: string;
    height?: number;
    fireExits?: number;
    elevatorAccess: boolean;
    securityFeatures?: string[];
    facilities?: string[];
    occupants?: string;
    lastRenovated?: number;
    maintenanceLogs?: string;
    emergencyContact?: string;
    isAccessible?: boolean;
    notes?: string;
    rooms: ReadRoomWithDetails[];
  };


  export type ReadFloorWithDetailsDto = {
    id:string
    number: number;
    name: string;
    surface?: number;
    building: ReadBuildingDto;
    organization: ReadOrganizationDto;
    numberOfRooms?: number;
    occupancyStatus?: 'Vacant' | 'Occupied' | 'Under Maintenance';
    constructionYear?: number;
    floorPlan?: string;
    height?: number;
    fireExits?: number;
    elevatorAccess: boolean;
    securityFeatures?: string[];
    facilities?: string[];
    occupants?: string;
    lastRenovated?: number;
    maintenanceLogs?: string;
    emergencyContact?: string;
    isAccessible?: boolean;
    notes?: string;
  };
   export type ReadFloorDto = {
    id:string
    number: number;
    name: string;
    surface?: number;
    buildingId: string;
    organizationId: string;
    numberOfRooms?: number;
    occupancyStatus?: 'Vacant' | 'Occupied' | 'Under Maintenance';
    constructionYear?: number;
    floorPlan?: string;
    height?: number;
    fireExits?: number;
    elevatorAccess: boolean;
    securityFeatures?: string[];
    facilities?: string[];
    occupants?: string;
    lastRenovated?: number;
    maintenanceLogs?: string;
    emergencyContact?: string;
    isAccessible?: boolean;
    notes?: string;
  };