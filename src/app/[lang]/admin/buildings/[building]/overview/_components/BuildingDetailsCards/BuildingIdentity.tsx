import React from "react";
import { CardInfo } from "./CardInfo";

function BuildingIdentity() {
  return (
    <div className="h-[74%] overflow-y-auto px-2 pt-3 flex gap-1 flex-row flex-wrap">
      <CardInfo
        title=""
        items={[
          { title: "Name", value: "Caspio" },
          { title: "Address", value: "Street E number 5" },
          { title: "Postal Climatic zone", value: "160994" },
          { title: "City", value: "Paris" },
          { title: "GPS Coordinates", value: "48.23456, 2.3234567" },
          { title: "Climatic zone", value: "H1" },
        ]}
      />
    </div>
  );
}

export default BuildingIdentity;
