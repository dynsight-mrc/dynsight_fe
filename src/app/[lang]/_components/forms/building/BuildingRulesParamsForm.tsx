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

function BuildingRulesParamsForm() {
  return (
    <div >
      <div className="w-full flex justify-between">

      <label htmlFor="">Reference</label>
      <input type="checkbox" />

      </div>
    </div>
  );
}

export default BuildingRulesParamsForm;
