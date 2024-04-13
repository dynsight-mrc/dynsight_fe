import React from "react";
import Coil from "./widgets/coil";
import DiscreteInput from "./widgets/discreteInput";
import HoldingRegister from "./widgets/holdingRegister";
import InputRegister from "./widgets/inputRegister";
import Property from "./widgets/property";

async function Room({ roomName, devices }: any) {
  let { properties, coils, discreteInputs, holdingRegisters, inputRegisters } =
    devices;
  return (
    <>
      {properties &&
        properties.map((property: any) => (
          <Property
            key={property.id}
            property={property.name}
            equipment={property.equipmentId.name}
            unit={property.unit}
            socketId={property.config.mqttSlug}
            room={roomName}
          />
        ))}

     
      {coils &&
        coils.map((coil: any) => (
          <Coil key={coil.id} room={roomName} coilDetails={coil} />
        ))}

      {discreteInputs &&
        discreteInputs.map((discreteInput: any) => (
          <DiscreteInput
            key={discreteInput.id}
            room={roomName}
            discreteInputDetails={discreteInput}
          />
        ))}

      {holdingRegisters &&
        holdingRegisters.map((holdingRegister: any) => (
          <HoldingRegister
            key={holdingRegister.id}
            room={roomName}
            holdingRegisterDetails={holdingRegister}
          />
        ))}

      {inputRegisters &&
        inputRegisters.map((inputRegister: any) => (
          <InputRegister
            key={inputRegister.id}
            room={roomName}
            inputRegisterDetails={inputRegister}
          />
        ))}
    </>
  );
}

export default Room;
