"use client";
import { error } from "console";
import React from "react";
import {
  useForm,
  SubmitHandler,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import TextInput from "../../inputs/TextInput";
import DropDownRadioButtons from "../../inputs/DropDownRadioButtons";

export type BuildingInputs = {
  building_id: "string";
  building_name: "string";
  another_id: "string";
};



function BuildingForm() {
  function isValidYear(year:Number) {
    const yearRegex = /^(1[0-9]{3}|2[0-9]{3})$/; // Matches years from 1000 to 2999
    if(! yearRegex.test(year.toString())){
      return "Année n'est pas valide"
    };
}
  
  return (
    <>
      <TextInput
        title="Réference"
        type="text"
        registerKey={"building.reference"}
        validations={{required: "Ce champ est obligatoir" }}
      />
     <TextInput
        title="Nom"
        type="text"
        registerKey={"building.name"}
        validations={{required: "Ce champ est obligatoir" }}
      />
   <TextInput
        title="Année de construction"
        type="number"
        registerKey={"building.constructionYear"}
        validations={{required: "Ce champ est obligatoir",valueAsNumber:true ,validate:isValidYear }}
      />
 
      <TextInput
        title="Surface"
        type="number"
        registerKey={"building.surface"}
        validations={{required: "Ce champ est obligatoir",valueAsNumber:true }}
      />
      {/*  <TextInput
        title="Latitude"
        registerKey="building.coordinates.lat"
        type="number"
        validations={{ required: "Ce champ est obligatoire",valueAsNumber:true  }}
      />
      <TextInput
        title="Longitude"
        registerKey="building.coordinates.long"
        type="number"
        validations={{ required: "Ce champ est obligatoire",valueAsNumber:true  }}
      /> */}
     
      <DropDownRadioButtons
        options={[
          { label: "Résidentiel", value: "residential" },
          { label: "Maison unifamiliale", value: "single_family_house" },
          { label: "Immeuble résidentiel", value: "multi_family_house" },
          { label: "Appartement", value: "apartment" },
          { label: "Condominium", value: "condominium" },
          { label: "Maison de ville", value: "townhouse" },
          { label: "Villa", value: "villa" },
          { label: "Bungalow", value: "bungalow" },
          { label: "Dortoir", value: "dormitory" },
      
          { label: "Commercial", value: "commercial" },
          { label: "Bureau", value: "office_building" },
          { label: "Magasin", value: "retail_store" },
          { label: "Centre commercial", value: "shopping_mall" },
          { label: "Restaurant", value: "restaurant" },
          { label: "Hôtel", value: "hotel" },
          { label: "Entrepôt", value: "warehouse" },
          { label: "Supermarché", value: "supermarket" },
          { label: "Cinéma", value: "cinema" },
          { label: "Théâtre", value: "theater" },
      
          { label: "Industriel", value: "industrial" },
          { label: "Usine", value: "factory" },
          { label: "Centrale électrique", value: "power_plant" },
          { label: "Raffinerie", value: "refinery" },
          { label: "Stockage frigorifique", value: "cold_storage" },
          { label: "Installation de recherche", value: "research_facility" },
          { label: "Laboratoire", value: "laboratory" },
      
          { label: "Institutionnel", value: "institutional" },
          { label: "École", value: "school" },
          { label: "Université", value: "university" },
          { label: "Hôpital", value: "hospital" },
          { label: "Clinique", value: "clinic" },
          { label: "Bâtiment gouvernemental", value: "government_building" },
          { label: "Bibliothèque", value: "library" },
          { label: "Poste de police", value: "police_station" },
          { label: "Casernes de pompiers", value: "fire_station" },
          { label: "Prison", value: "prison" },
          { label: "Musée", value: "museum" },
      
          { label: "Récréatif", value: "recreational" },
          { label: "Complexe sportif", value: "sports_complex" },
          { label: "Stade", value: "stadium" },
          { label: "Piscine", value: "swimming_pool" },
          { label: "Centre de loisirs", value: "recreation_center" },
          { label: "Parc d'attractions", value: "amusement_park" },
          { label: "Club de golf", value: "golf_clubhouse" },
      
          { label: "Mixte", value: "mixed_use" },
          { label: "Complexe résidentiel et commercial", value: "residential_commercial_complex" },
          { label: "Bureau et commerce", value: "office_retail_complex" },
          { label: "Hôtel et résidentiel", value: "hotel_residential" },
      
          { label: "Agricole", value: "agricultural" },
          { label: "Grange", value: "barn" },
          { label: "Serre", value: "greenhouse" },
          { label: "Silo", value: "silo" },
          { label: "Étable", value: "stable" },
      
          { label: "Spécial", value: "special_purpose" },
          { label: "Terminal aéroportuaire", value: "airport_terminal" },
          { label: "Gare", value: "train_station" },
          { label: "Église", value: "church" },
          { label: "Centre de congrès", value: "convention_center" },
          { label: "Garage de stationnement", value: "parking_garage" },
          { label: "Salle d'exposition", value: "exhibition_hall" },
          { label: "Centre de données", value: "data_center" }
      
        ]}
        title="Type"
        registerKey="building.type"
        validations={{ required: "Ce champ est obligatoire" }}
      />
    </>
  );
}

export default BuildingForm;
