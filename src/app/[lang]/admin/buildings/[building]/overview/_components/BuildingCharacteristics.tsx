import React from "react";
import { CardInfo } from "./CardInfo";

function BuildingCharacteristics() {
  return (
    <div className="h-[74%] overflow-y-auto px-2 pt-3 flex gap-1 flex-row flex-wrap">
      <CardInfo
        title="Générales"
        items={[
          { title: "Date de construction ", value: "-" },
          { title: "Date de rénovation", value: "-" },
          { title: "Date d'acquisition", value: "-" },
          { title: "RT applicable", value: "-" },
          { title: "Société propriétaire ", value: "-" },
          { title: "Régime de détention", value: "-" },
        ]}
      />

      <CardInfo
        title="Réglemntation"
        items={[
          { title: "ERP", value: "" },
          { title: "Batiment est un IGH", value: "-" },
          { title: "Batiment est un ERT", value: "-" },
          { title: "Batiment est un batiment d-habitation", value: "-" },
          { title: "Batiment est un Data center", value: "-" },
          { title: "Batiment possède un parking souterrain", value: "-" },
          { title: "Lettre représentant la catégorie SSI", value: "-" },
          { title: "Types d'ICPE présents sur le batiment", value: "-" },
        ]}
      />

      <CardInfo
        title="Surfaces"
        items={[
          { title: "Srt-Surface thermique RT", value: "-" },
          { title: "SUrt-surface Utile RT", value: "-" },
          { title: "Surface de plancher", value: "-" },
          { title: "SHAB-Surface habitable", value: "-" },
          { title: "Surfaces communes", value: "-" },
          { title: "Surfaces privatives", value: "-" },
          { title: "Surfaces parking", value: "-" },
        ]}
      />
      <CardInfo
        title="Structure"
        items={[
          { title: "Superstructure R+", value: "-" },
          { title: "Infrastructure R-", value: "-" },
          { title: "Hauteur total du batiment", value: "-" },
          { title: "Hauteur sous faux plafond", value: "-" },
          { title: "Vide sous faux plafond", value: "-" },
          { title: "Vide sous plafond plancher", value: "-" },
          { title: "Forme du batiment", value: "-" },
          { title: "Orientation du batiment", value: "-" },
        ]}
      />
    </div>
  );
}

export default BuildingCharacteristics;
