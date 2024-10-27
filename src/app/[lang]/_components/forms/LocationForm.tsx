import React from "react";
import TextInput from "../inputs/TextInput";
import { Libraries } from "@react-google-maps/api";
const libraries: Libraries = ["places"];

function LocationForm() {
  function isValidLatitude(fieldValue: number) {
    const lonRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;

    if (!lonRegex.test(fieldValue.toString())) {
      return "Latitude doit être entre -90° et 90°";
    }
    return true;
  }

  function isValidLongitude(fieldValue: number) {
    const lonRegex = /^[-+]?((1[0-7]\d|[1-9]?\d)(\.\d+)?|180(\.0+)?)$/;
    if (!lonRegex.test(fieldValue.toString())) {
      return "Longitude doit être entre -180° et 180°";
    }
    return true;
  }
  function isValidFrenchPostalCode(postalCode: number) {
    const frenchPostalCodeRegex = /^\d{5}$/;
    if (!frenchPostalCodeRegex.test(postalCode.toString())) {
      return "Code postal n'est pas valide!";
    }
    return true;
  }
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
          validate: isValidFrenchPostalCode,
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
        validations={{
          required: "Ce champ est obligatoire",
          valueAsNumber: true,
          validate: isValidLatitude,
        }}
      />
      <TextInput
        title="Longitude"
        registerKey="location.coordinates.long"
        type="number"
        validations={{
          required: "Ce champ est obligatoire",
          valueAsNumber: true,
          validate: isValidLongitude,
        }}
      />
    </>
  );
}

export default LocationForm;
