import React, { useContext } from "react";
import TextInput from "../inputs/TextInput";
import { FormLayoutContext, useFormLayoutContext } from "../formLayoutContext";
import { VscTrash } from "react-icons/vsc";
import { useFormContext } from "react-hook-form";

function FloorsConfigurationForm() {
  const props = useFormLayoutContext();
  const { getValues } = useFormContext();
  const validateUniqReference = (fieldValue: string) => {
    const floorsRef = getValues("floors.reference");

    if (floorsRef.filter((ele: string) => ele === fieldValue).length > 1) {
      return "Ce champ doit etre unique";
    }
    return true;
  };
  const validateUniqName = (fieldValue: string) => {
   
    
    const floorsNames = getValues("floors.name");

    if (floorsNames.filter((ele: string) => ele === fieldValue).length > 1) {
      return "Ce champ doit etre unique";
    }
    return true;
  };
  
  return (
    <div className="">
      {props?.formsIds.map((ele, index) => (
        <div
          className="flex flex-col lg:flex-row space-x-5 items-center "
          key={ele}
        >
          <span className="text-lg text-blue-400  px-2 mt-3">{index + 1}#</span>
          <div
            className={` w-full sm:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-x-3 `}
          >
            <TextInput
              title="Numéro"
              type="text"
              registerKey={`floors.number.${index}`}
              validations={{
                required: "Ce champ es obligatoir",
                validate: validateUniqReference,
              }}
            />

            <TextInput
              title="Nom"
              type="text"
              registerKey={`floors.name.${index}`}
              validations={{
                required: "Ce champ es obligatoir",
                validate: validateUniqName,
              }}
            />
          </div>

          <VscTrash
            onClick={() => props.removeFormId(ele, "floors", index)}
            className="text-red-500 w-8 h-8 mt-3 hover:scale-110 transition-all duration-300 ease-out cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

export default FloorsConfigurationForm;
