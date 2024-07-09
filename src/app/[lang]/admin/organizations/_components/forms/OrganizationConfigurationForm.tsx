import React, { useContext } from "react";
import TextInput from "../inputs/TextInput";
import { FormLayoutContext, useFormLayoutContext } from "../formLayoutContext";
import { VscTrash } from "react-icons/vsc";

function OrganizationConfigurationForm() {
  const props = useFormLayoutContext();

  return (
    <>
      <TextInput
        title="Référence"
        type="text"
        registerKey={`organization.reference`}
        validations={{ required: "Ce champ es obligatoir" }}
      />

      <TextInput
        title="Intitulé"
        type="text"
        registerKey={`organization.name`}
        validations={{ required: "Ce champ es obligatoir" }}
      />

      <TextInput
        title="Déscription"
        type="text"
        registerKey={`organization.description`}
        validations={{ required: "Ce champ es obligatoir" }}
      />
       <TextInput
        title="Propriétaire"
        type="text"
        registerKey={`organization.owner`}
        validations={{ required: "Ce champ es obligatoir" }}
      />
    </>
  );
}

export default OrganizationConfigurationForm;
