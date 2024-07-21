import React from "react";
import TextInput from "../inputs/TextInput";
import { Libraries } from "@react-google-maps/api";
const libraries: Libraries = ["places"];

function LocationForm() {
  return (
    <>
      <TextInput
        title="Rue"
        registerKey="location.streetAddress"
        type="text"
        validations={{ required: "Ce champ est obligatoire" }}
      />
      <TextInput
        title="Numero de la Rue"
        registerKey="location.streetNumber"
        type="text"
        validations={{ required: "Ce champ est obligatoire" }}
      />
      <TextInput
        title="Nom de la Rue"
        registerKey="location.streetName"
        type="text"
        validations={{ required: "Ce champ est obligatoire" }}
      />

      <TextInput
        title="Ville"
        registerKey="location.city"
        type="text"
        validations={{ required: "Ce champ est obligatoire" }}
      />
      <TextInput
        title="Etat / Province / Région"
        registerKey="location.state"
        type="text"
        validations={{ required: "Ce champ est obligatoire" }}
      />
      <TextInput
        title="Code Postal"
        registerKey="location.postalCode"
        type="number"
        validations={{
          required: "Ce champ est obligatoire",
          valueAsNumber: true,
        }}
      />
      <TextInput
        title="Pays"
        registerKey="location.country"
        type="text"
        validations={{ required: "Ce champ est obligatoire" }}
      />
      <TextInput
        title="Latitude"
        registerKey="location.coordinates.lat"
        type="number"
        validations={{ required: "Ce champ est obligatoire",valueAsNumber:true  }}
      />
      <TextInput
        title="Longitude"
        registerKey="location.coordinates.long"
        type="number"
        validations={{ required: "Ce champ est obligatoire",valueAsNumber:true  }}
      />
    </>
  );
}

export default LocationForm;
