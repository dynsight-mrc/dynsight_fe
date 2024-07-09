import React from "react";
import { CardInfo } from "./CardInfo";

function BuildingSpecialActivities() {
  return (
    <div className="h-[74%] overflow-y-auto px-2 pt-3 flex gap-1 flex-row flex-wrap">
      <CardInfo
        title="Parking"
        items={[
          { title: "Presence d'un parking", value: "-" },
          { title: "Parking en sous-sol", value: "-" },
          { title: "Nombre de places (couvertes)", value: "-" },
          { title: "Nombre de places (extérieures)", value: "-" },
          { title: "Nombre de niveaux du parking", value: "-" },
        ]}
      />
      <CardInfo
        title="Autres"
        items={[
          { title: "Présence d'un RIE", value: "-" },
          { title: "Présence d'un serveur local", value: "-" },
          { title: "Présence d'une terrasse", value: "-" },
          { title: "Mitoyenneté", value: "-" },
        ]}
      />
    </div>
  );
}

export default BuildingSpecialActivities;
