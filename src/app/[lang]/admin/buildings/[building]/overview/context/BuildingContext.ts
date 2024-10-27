import { ReadBuildingDto, ReadBuildingWithFloorsDetailsDto } from "@/src/app/[lang]/_common/buildings/dtos/read-buildings.dto";
import { createContext } from "react";

export const BuildingContext = createContext<ReadBuildingWithFloorsDetailsDto|null>(null)