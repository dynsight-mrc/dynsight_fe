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

function Input({ title, registerKey }: { title: string; registerKey: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col space-y-1 mb-3">
      <label htmlFor="" className="pl-1">
        {title}
      </label>
      <input
        {...register(registerKey, { required: "this must be set" })}
        type="text"
        className={`p-2 ${
          errors[registerKey]
            ? "border-red-600 focus:border focus:text-red-600 focus:border-red-600"
            : "focus:border focus:text-teltonika-800 focus:border-teltonika-800"
        } bg-gray-100 outline-none text-gray-500  border border-transparent rounded-md`}
      />
      {errors[registerKey] && (
        <p className="pl-1 text-sm text-red-600">
          {errors[registerKey]?.message?.toString()}{" "}
        </p>
      )}
    </div>
  );
}

function BuildingForm() {
  const {
    register,
    formState: { errors },
    getValues
  } = useFormContext();
  
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
