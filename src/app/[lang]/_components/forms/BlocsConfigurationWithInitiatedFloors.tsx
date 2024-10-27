import React, { useContext, useEffect, useState } from "react";
import TextInput from "../inputs/TextInput";
import { FormLayoutContext } from "../../admin/_components/formLayoutContext";
import { useFormContext } from "react-hook-form";
import DropDownRadioButtons from "../inputs/DropDownRadioButtons";
import { VscTrash } from "react-icons/vsc";
import { ReadFloorDto } from "@/src/app/[lang]/_common/floors/dtos/read-floors.dto";

const formatFloorsData = (floors: any[]|undefined) :{label:string,value:string}[] |undefined => {
  if (!floors || floors.length === 0) return undefined;
  // Filter out empty ids or names and create the formatted array
  if(!floors)return undefined
  return floors.map((floor) => ({ label: floor.number.toString(), value: floor.name }));
};
function BlocsConfigurationWithInitiatedFloors({ floors }: { floors: ReadFloorDto[]|undefined }) {
  const { watch, getValues } = useFormContext();
  const validateUniqBlocName = (fieldValue: string) => {
    const blocsNames = getValues("blocs.name");

    if (blocsNames.filter((ele: string) => ele === fieldValue).length > 1) {
      return "Ce champ doit etre unique";
    }
    return true;
  };

  const props = useContext(FormLayoutContext);
  return (
    <>
      {props?.formsIds.map((ele, index) => (
        <div
          className="flex flex-col lg:flex-row space-x-5 items-center"
          key={ele}
        >
          <span className="text-lg text-blue-400  px-2 mt-3">{index + 1}#</span>

          <div
            className={` w-full sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-x-3 `}
          >
            <TextInput
              title="Nom/Numéro"
              type="text"
              registerKey={`blocs.name.${index}`}
              validations={{
                required: "Ce champ est obligatoir",
                validate: validateUniqBlocName,
              }}
            />
            <DropDownRadioButtons
              validations={{ required: "Ce champ est obligatoir" }}
              registerKey={`blocs.type.${index}`}
              title="Type"
              options={[
                { label: "Office", value: "office" },
                { label: "Restroom", value: "restroom" },
                { label: "Storage", value: "storage" },
              ]}
            />
            <TextInput
              title="Surface"
              type="number"
              registerKey={`blocs.surface.${index}`}
              validations={{
                required: "Ce champ est obligatoir",
                valueAsNumber: true,
              }}
            />
            <DropDownRadioButtons
              validations={{ required: "Ce champ est obligatoir" }}
              registerKey={`blocs.floors.${index}`}
              title="Étage"
              options={formatFloorsData(floors)}
            />
          </div>
          <VscTrash
            onClick={() => props.removeFormId(ele, "blocs", index)}
            className="text-red-500 w-8 h-8  hover:scale-110 transition-all duration-300 ease-out cursor-pointer"
          />
        </div>
      ))}
    </>
  );
}

export default BlocsConfigurationWithInitiatedFloors;
