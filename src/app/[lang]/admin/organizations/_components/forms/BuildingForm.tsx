"use client";
import { error } from "console";
import React from "react";
import {
  useForm,
  SubmitHandler,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import TextInput from "../inputs/TextInput";
import DropDownRadioButtons from "../inputs/DropDownRadioButtons";

export type BuildingInputs = {
  building_id: "string";
  building_name: "string";
  another_id: "string";
};



function BuildingForm() {

  
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
        validations={{required: "Ce champ est obligatoir",valueAsNumber:true  }}
      />
 
      <TextInput
        title="Surface"
        type="number"
        registerKey={"building.surface"}
        validations={{required: "Ce champ est obligatoir",valueAsNumber:true }}
      />
       <TextInput
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
      />
     
      <DropDownRadioButtons
        options={[
          { label: "Commercial", value: "commercial" },
          { label: "Industial", value: "industrial" },
      
        ]}
        title="Type"
        registerKey="building.type"
        validations={{ required: "Ce champ est obligatoire" }}
      />
    </>
  );
}

export default BuildingForm;
