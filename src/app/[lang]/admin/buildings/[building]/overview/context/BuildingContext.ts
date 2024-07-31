import { createContext } from "react";
import { ReadBuildingDto } from "../../../dto/ReadBuildingDto";

export const BuildingContext = createContext<ReadBuildingDto|null>(null)