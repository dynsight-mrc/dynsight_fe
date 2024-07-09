import React, { useContext, useEffect, useState } from "react";
import TextInput from "../inputs/TextInput";
import { FormLayoutContext } from "../formLayoutContext";
import { useFormContext } from "react-hook-form";
import DropDownRadioButtons from "../inputs/DropDownRadioButtons";
import { VscTrash } from "react-icons/vsc";

function UsersConfigurationForm() {
  const { getValues } = useFormContext();
  const validateUniqEmail = (fieldValue:string)=>{
     
    const emails = getValues("users.email");

    if (emails.filter((ele: string) => ele === fieldValue).length > 1) {
      return "Ce champ doit etre unique";
    }
    return true;
  }
  const props = useContext(FormLayoutContext);
  return (
    <>
      {props?.formsIds.map((ele, index) => (
        <div
          className="flex flex-col lg:flex-row space-x-5 items-center"
          key={ele}
        >
                    <span className="text-lg text-blue-400  px-2 mt-3">{index +1}#</span>

          <div
            className={` w-full sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-x-3 `}
          >
            <TextInput
              title="Nom / Prénom"
              type="text"
              registerKey={`users.fullName.${index}`}
              validations={{ required: "Ce champ est obligatoir" }}
            />
            <TextInput
              title="Email"
              type="email"
              registerKey={`users.email.${index}`}
              validations={{
                required: "Ce champ est obligatoir",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Adresse email est invalide ?",
                },
                validate:validateUniqEmail
              }}
            />
             <TextInput
              title="Mot de passe"
              type="password"
              registerKey={`users.password.${index}`}
              validations={{
                required: "Ce champ est obligatoir",
              }}
            />
            <DropDownRadioButtons
              validations={{ required: "Ce champ est obligatoir" }}
              registerKey={`users.type.${index}`}
              title="Type de Profile"
              options={[
                { label: "Organization Owner", value: "1" },
                { label: "Facility Manager", value: "5" },
                { label: "Property Manager ", value: "6" },
                { label: "Asset Manager ", value: "8" },
                { label: "Instaler ", value: "7" },
              ]}
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

export default UsersConfigurationForm;
