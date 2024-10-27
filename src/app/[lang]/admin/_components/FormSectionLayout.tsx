import React, { ReactNode, useState } from "react";
import { FormLayoutContext } from "./formLayoutContext";
import { useFormContext } from "react-hook-form";
import Link from "next/link";
type FormSectionProps = {

  style?: string;
  descriptionTitle: string;
  descriptionText: string;
  formTile: string;
  addFormButtonText?:string
  supportMultipleForm?:boolean,
  children: ReactNode;
  detailsLink?:string
};

function FormSection({
  style,
  descriptionTitle,
  descriptionText,
  formTile,
  supportMultipleForm=false,
  addFormButtonText,
  detailsLink,
  children,
}: FormSectionProps) {
  const [formsIds, setFormsIds] = useState<string[]>([crypto.randomUUID()]);
  const {unregister, getValues } = useFormContext();

  const handleClearFields = (field: string, index: string) => {
    
    const values = getValues(field);
    console.log(values);
    
    Object.keys(values).forEach((key) => {
        console.log(values);
        console.log(`clearing ${field}.${key}.${index}`);

      unregister(`${field}.${key}.${index}`);
    });
  };
  const handleRemoveId = (id: string, field: string, index: string) => {
    console.log("remove fields");
    console.log(id,field, index);
    
    handleClearFields(field, index);
    setFormsIds((preValues) => {
      if (preValues.length === 0) {
        return [];
      }
      return preValues.filter((ele) => ele !== id);
    });
   
  };

  const handleAddNewId = () => {
    setFormsIds((preValues) => {
      if (preValues.length === 0) {
        return [crypto.randomUUID()];
      }
      return [...preValues, crypto.randomUUID()];
    });
  };
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 w-full border-b-2 border-gray-200 py-5">
      <div className="lg:w-1/4 text-gray-500 py-3 px-1 lg:px-0 space-y-1">
        <h3 className="text-lg text-gray-700">{descriptionTitle}</h3>
        <p className=" text-sm text-justify">{descriptionText}</p>
      </div>
      <div className="text-gray-500 h-min lg:w-3/4 rounded-md  bg-white border border-gray-200">
        <div className=" p-3 flex flex-row justify-between border-b border-gray-300">
          <div>{formTile}</div>
          <div className={`${!detailsLink && "hidden"}`}><Link className="text-text-blue-500 hover:underline" href={detailsLink ?? ""}>Voir liste</Link></div>
        </div>
        <div className={` px-3 py-5 border-b border-gray-300 ${style}`}>
          <FormLayoutContext.Provider
            value={{ formsIds,style, removeFormId: handleRemoveId }}
          >
            {children}
          </FormLayoutContext.Provider>
        </div>
        <div  className={` ${!supportMultipleForm && "hidden"} p-3 flex flex-row justify-center lg:justify-end border-b border-gray-300`}>
          <button
            onClick={handleAddNewId}
            className="text-teltonika-800 border border-teltonika-800 rounded-md py-1 px-2"
          >
            {addFormButtonText ?? ""}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
