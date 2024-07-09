import React, { useContext, useEffect, useState } from "react";
import TextInput from "../inputs/TextInput";
import { FormLayoutContext } from "../formLayoutContext";
import { useFormContext } from "react-hook-form";
import DropDownRadioButtons from "../inputs/DropDownRadioButtons";
import { VscTrash } from "react-icons/vsc";
import DropDownRadioButtonsWithFormatter from "../inputs/DropDownRadioButtonWithFormatter";
const formatFloorsData = (data: {
  number: string[];
  name: string[];
}) => {
  
  if (!data) return undefined;
  const { number: numbers, name: names } = data;

  // Filter out empty ids or names and create the formatted array
  const formattedData = numbers
    .map((number, index) => {
      const value = names[index];
      return { label: number, value: value };
    })
    .filter((item) => item.label && item.value); // Filter out any items with empty label or value

  return formattedData;
};
function BlocsConfigurationForm() {
  const { watch,getValues } = useFormContext();
  const validateUniqBlocName = (fieldValue: string) => {
    const blocsNames = getValues("blocs.number");

    if (blocsNames.filter((ele: string) => ele === fieldValue).length > 1) {
      return "Ce champ doit etre unique";
    }
    return true;
  };
  let floors = watch("floors");

  const props = useContext(FormLayoutContext);
  return (
    <>
      {props?.formsIds.map((ele, index) => (
        <div className="flex flex-col lg:flex-row space-x-5 items-center" key={ele}>
                    <span className="text-lg text-blue-400  px-2 mt-3">{index +1}#</span>

          <div
            className={` w-full sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-x-3 `}
          >
           
            <TextInput
              title="Nom/Numéro"
              type="text"
              registerKey={`blocs.number.${index}`}
              validations={{ required: "Ce champ est obligatoir",validate:validateUniqBlocName }}
            />
            <DropDownRadioButtons
              validations={{required:"Ce champ est obligatoir"}}
              registerKey={`blocs.type.${index}`}
              title="Type"
              options={[
                { label: "Office", value: "1" },
                { label: "Restroom", value: "5" },
                { label: "Storage", value: "6" },
              ]}
            
            />
            <TextInput
              title="Surface"
              type="number"
              registerKey={`blocs.area.${index}`}
              validations={{ required: "Ce champ est obligatoir" }}
            />
             <DropDownRadioButtonsWithFormatter
              validations={{required:"Ce champ est obligatoir"}}
              registerKey={`blocs.floors.${index}`}
              title="Étage"
              formater = {formatFloorsData}
              options={floors}
            />
          </div>
          <VscTrash
            onClick={() => props.removeFormId(ele,"blocs",index)}
            className="text-red-500 w-8 h-8  hover:scale-110 transition-all duration-300 ease-out cursor-pointer"
          />
        </div>
      ))}
    </>
  );
}

export default BlocsConfigurationForm;
