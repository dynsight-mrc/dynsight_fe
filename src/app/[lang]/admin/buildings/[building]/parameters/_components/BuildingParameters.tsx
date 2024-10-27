"use client";
import { ReadBuildingWithFloorsDetailsDto } from "@/src/app/[lang]/_common/buildings/dtos/read-buildings.dto";
import { CustomSession } from "@/src/app/[lang]/_common/types/session.type";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormSection from "../../../../_components/FormSectionLayout";
import LocationForm from "../../../../../_components/forms/LocationForm";
import BuildingForm from "../../../../../_components/forms/building/BuildingForm";
import { patchBuilding } from "../../../_api/update-building";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/src/app/[lang]/_components/shadcn/ui/use-toast";
import { TailSpin } from "react-loader-spinner";
import GeneralBuildingParamsForm from "@/src/app/[lang]/_components/forms/building/GeneralBuildingParamsForm";
import BuildingRulesParamsForm from "@/src/app/[lang]/_components/forms/building/BuildingRulesParamsForm";

function BuildingParameters({
  session,
  building,
  buildingData,
}: {
  session: CustomSession;
  building: string;
  buildingData: ReadBuildingWithFloorsDetailsDto;
}) {
  const { toast } = useToast();

  const methods = useForm({
    defaultValues: {
      location: {
        streetAddress: buildingData.address.streetAddress,
        streetNumber: buildingData.address.streetNumber,
        streetName: buildingData.address.streetName,
        city: buildingData.address.city,
        state: buildingData.address.state,
        postalCode: buildingData.address.postalCode,
        country: buildingData.address.country,
        coordinates: buildingData.address.coordinates,
      },
      building: {
        reference: buildingData.reference,
        name: buildingData.name,
        constructionYear: buildingData.constructionYear,
        surface: buildingData.surface,

        type: buildingData.type,
      },
    },
  });
  const updateBuilding = useMutation({
    mutationFn: patchBuilding,
    onSuccess: (results) => {
      toast({
        className: "bg-green-500 text-white",
        title: "success",
        description: "organisation a été mis à jour",
      });
    },
    onError: (error) => {
      console.log(error);

      toast({
        className: "bg-red-500 text-white",
        title: error.name,
        //@ts-ignore
        description: error?.response?.data.message,
      });
    },
  });
  const onSubmit = (data: any) => {
    updateBuilding.mutateAsync({
      session,
      building,
      data: data.building,
    });
  };

  return (
    <FormProvider {...methods}>
      <FormSection
        style="lg:grid lg:grid-cols-2 gap-x-3"
        formTile="Généralité"
        descriptionTitle="Localisation"
        descriptionText="Cette section recueille les informations de localisation géographique du bâtiment, telles que l'adresse, la ville, le code postal et les coordonnées GPS. Ces détails sont essentiels pour situer précisément le bâtiment"
      >
        <LocationForm />
      </FormSection>
      <FormSection
        style="lg:grid lg:grid-cols-2 gap-x-3"
        formTile="Généralité"
        descriptionTitle="Généralités sur le Batiment"
        descriptionText="Dans cette section, veuillez fournir les informations détaillées sur le bâtiment, y compris son nom, sa surface, sa référence, et d'autres caractéristiques importantes. Ces informations permettent de mieux comprendre les spécificités du bâtiment"
        detailsLink="/admin/buildings"
      >
        <GeneralBuildingParamsForm />
      </FormSection>


      <FormSection
        style="lg:grid lg:grid-cols-2 gap-x-3"
        formTile="Caractéristiques"
        descriptionTitle="Caractéristiques du Batiment"
        descriptionText="Dans cette section, veuillez fournir les informations détaillées sur le bâtiment, y compris son nom, sa surface, sa référence, et d'autres caractéristiques importantes. Ces informations permettent de mieux comprendre les spécificités du bâtiment"
        detailsLink="/admin/buildings"
      >
        <BuildingRulesParamsForm />
      </FormSection>

      <div className="w-full flex flex-row justify-center py-5">
        <div
          onClick={methods.handleSubmit(onSubmit)}
          //onClick={createAccount}
          className="group cursor-pointer flex flex-row space-x-2  text-teltonika-800 border border-teltonika-800 rounded-md py-1 px-2 hover:text-white hover:bg-teltonika-800"
        >
          {updateBuilding.isPending && (
            <TailSpin
              visible={true}
              height="20"
              width="20"
              color="#6b7280"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
          <span>submit</span>
        </div>
      </div>
    </FormProvider>
  );
}

export default BuildingParameters;
