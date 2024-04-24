import React from "react";
import { CardInfo } from "@/src/app/[lang]/oo/buildings/_components/CardInfo";
import humidity from "@/public/humidity.png";
import Image from "next/image";
function page({ params }: { params: { building: string; device: string } }) {
  return (
    <div className="overflow-y-auto h-[100%]">
      {/*  <CardInfo
        title=""
        items={[
          { title: "", value: "-" },
          { title: "", value: "-" },
          { title: "", value: "-" },
          { title: "", value: "-" },
          { title: "", value: "-" },
        
        ]}
      /> */}
      <div className="flex flex-col space-y-3 mb-5">
        <div className="mt-3 mb-1 text-2xl text-blue-500 font-opensans 0 ml-5">
          <h3>Information Générales</h3>
        </div>
        <div className="flex flex-row  text-center">
          <div className="px-2 w-3/4 flex gap-1 flex-row flex-wrap">
            <CardInfo
              title="Définition"
              items={[
                { title: "Domain", value: "-" },
                { title: "Type d'équipment", value: "-" },
                { title: "Catégorie", value: "-" },
                { title: "Précision sur le nom", value: "-" },
              ]}
            />
            <CardInfo
              title="Localisation"
              items={[
                { title: "Batiment", value: "-" },
                { title: "Niveau", value: "-" },
                { title: "Local", value: "-" },
              ]}
            />
            <CardInfo
              title="Matériel"
              items={[
                { title: "Quantité", value: "-" },
                { title: "Marque", value: "-" },
                { title: "Modèle", value: "-" },
                { title: "N° de série", value: "-" },
                { title: "Date de mise en service", value: "-" },
              ]}
            />
            <CardInfo
              title="Maintenance"
              items={[
                { title: "Dernier status contaté", value: "-" },
                { title: "Mainteneur", value: "-" },
                { title: "Criticité", value: "-" },
                { title: "Durée de garantie", value: "-" },
                { title: "Garantie jusqu'à", value: "-" },
              ]}
            />
            <CardInfo
              title="Informations complémentaire"
              items={[
                { title: "Activité", value: "-" },
                { title: "Nombre de niveau", value: "-" },
              ]}
            />
            <CardInfo
              title="Prise en charge"
              items={[
                { title: "Présent sur liste", value: "-" },
                { title: "Présent sut site", value: "-" },
              ]}
            />
          </div>
          <div className="w-96 h-96  bg-gray-200 rounded-md m-10 overflow-hidden border border-gray-200">
            <Image src={humidity} className="w-full h-full" alt="device" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3  mb-5">
        <div className="mt-3 mb-1 text-2xl font-opensans text-blue-500 ml-5">
          <h3>Caractéristiques techniques</h3>
        </div>
        <div className="px-2 flex gap-1 flex-row flex-wrap">
          <CardInfo
            title="Conception"
            items={[
              { title: "Pose", value: "-" },
              { title: "Présence détecteur gaz", value: "-" },
              { title: "Type de production", value: "-" },
              { title: "Carburant", value: "-" },
              { title: "Technologie", value: "-" },
            ]}
          />
          <CardInfo
            title="Performances"
            items={[
              { title: "Puissance", value: "-" },
              { title: "Rendement", value: "-" },
            ]}
          />
          <CardInfo
            title="Utilisation"
            items={[
              { title: "Fonctionnement", value: "-" },
              { title: "Usage de la chaudiere", value: "-" },
              { title: "Index compteur horaire", value: "-" },
              { title: "Chaudière en secours", value: "-" },
              { title: "", value: "-" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-3  mb-5">
        <div className="mt-3 mb-1 text-2xl font-opensans text-blue-500 ml-5">
          <h3>Caractéristiques techniques</h3>
        </div>
        <div className="px-2 flex gap-1 flex-row flex-wrap">
          <CardInfo
            title="Conception"
            items={[
              { title: "Pose", value: "-" },
              { title: "Présence détecteur gaz", value: "-" },
              { title: "Type de production", value: "-" },
              { title: "Carburant", value: "-" },
              { title: "Technologie", value: "-" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
