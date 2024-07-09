"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import BuildingForm from "../_components/forms/BuildingForm";
import FloorsConfigurationForm from "../_components/forms/FloorsConfigurationForm";
import FormSection from "../_components/FormSectionLayout";
import BlocsConfigurationForm from "../_components/forms/BlocsConfigurationForm";
import UsersConfigurationForm from "../_components/forms/UsersConfigurationForm";
import { TailSpin } from "react-loader-spinner";
import OrganizationConfigurationForm from "../_components/forms/OrganizationConfigurationForm";
import { useMutation } from "@tanstack/react-query";
import { createOrganization } from "../_api/createOrganization";
import { useSession } from "next-auth/react";
import { CustomSession } from "../../../types/session.type";

import { useToast } from "@/src/app/[lang]/_components/shadcn/ui/use-toast";
import LocationForm from "../_components/forms/LocationForm";

function page() {
  const { data: _session } = useSession();
  const session = _session as CustomSession;
  const methods = useForm({
    defaultValues: {
      organizationDetails:undefined,
      building: undefined,
      floors: undefined,
      location: undefined,
      blocs: undefined,
      users:undefined
    },
  });
  const { toast } = useToast();

  const postOrganization = useMutation({
    mutationFn: createOrganization,
    onSuccess: (results) => {
      toast({
        className: "bg-green-500 text-white",
        title: "success",
        description: "organization added successfully",
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
    console.log(data);
    
    postOrganization.mutateAsync({ session, data });
  };

  const createAccount = ()=>{
    let data ={
      building: {
        reference: 'building mine pro',
        name: 'building mine pro',
        constructionYear: 2003,
        area: 250,
        type: 'commercial'
      },
      floors: {
        name: ["etage 1s", "etage 2s", "etage 3s"],
        number: [1, 2, 3],
      },
      blocs: {
        name: [ 'bloc 1' ,'bloc 1',],
        type: [ 'office' ],
        surface: [ 12,43 ],
        floors: [ 'etage 1s',"etage 3s" ]
      },
      users: {
        fullName: [ 'dsqdsq' ],
        email: [ 'admin@dynsight.fr' ],
        password: [ 'Ohm2023adp??' ],
        type: [ '1' ]
      },
      organization: {
        reference: 'MINE pro max',
        name: 'MINE pro max pkus ',
        description: 'MINE',
        owner: 'MINE'
      },
      location:{
        streetAddress: "123 MINE LOCATION",
        streetNumber: "123",
        streetName: "Main St",
        city: "Paris",
        state: "Île-de-France",
        postalCode: "75001",
        country: "France",
        coordinates:{
          lat:123,
          long:3344
        }
      }
    }
    console.log(data);
    
    postOrganization.mutateAsync({ session, data });

  }
  return (
    <div className="lg:p-7 px-2 h-full overflow-auto">
      <FormProvider {...methods}>
        <FormSection
          style="lg:grid lg:grid-cols-2 gap-x-3"
          formTile="Généralité"
          descriptionTitle="Détails de l'Organisation"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. rerit. Nam consectetur venenatis gravida. Aliquam erat volutpat. Integer in sagittis nisl. Duis gravida felis velit, eu vehicula purus blan"
          detailsLink="/admin/organizations"
        >
          <OrganizationConfigurationForm />
        </FormSection>

        <FormSection
          style="lg:grid lg:grid-cols-2 gap-x-3"
          formTile="Généralité"
          descriptionTitle="Informations de Localisation"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. rerit. Nam consectetur venenatis gravida. Aliquam erat volutpat. Integer in sagittis nisl. Duis gravida felis velit, eu vehicula purus blan"
          detailsLink="/admin/sites"
        >
          <LocationForm />
        </FormSection>
        <FormSection
          style="lg:grid lg:grid-cols-2 gap-x-3"
          formTile="Généralité"
          descriptionTitle="Configurer un Batiment"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. rerit. Nam consectetur venenatis gravida. Aliquam erat volutpat. Integer in sagittis nisl. Duis gravida felis velit, eu vehicula purus blan"
          detailsLink="/admin/buildings"
        >
          <BuildingForm />
        </FormSection>

        <FormSection
          formTile="Généralité"
          descriptionTitle="Configuration des Étages"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. rerit. Nam consectetur venenatis gravida. Aliquam erat volutpat. Integer in sagittis nisl. Duis gravida felis velit, eu vehicula purus blan"
          supportMultipleForm={true}
          addFormButtonText="Ajouter un étage"
        >
          <FloorsConfigurationForm />
        </FormSection>
        <FormSection
          formTile="Généralité"
          descriptionTitle="Configuration des blocs"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. rerit. Nam consectetur venenatis gravida. Aliquam erat volutpat. Integer in sagittis nisl. Duis gravida felis velit, eu vehicula purus blan"
          supportMultipleForm={true}
          addFormButtonText="Ajouter un bloc"
          detailsLink="/admin/blocs"
        >
          <BlocsConfigurationForm />
        </FormSection>
        <FormSection
          formTile="Généralité"
          descriptionTitle="Configuration des Utilisateurs"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. rerit. Nam consectetur venenatis gravida. Aliquam erat volutpat. Integer in sagittis nisl. Duis gravida felis velit, eu vehicula purus blan"
          detailsLink="/admin/users"
          supportMultipleForm={true}
          addFormButtonText="Ajouter un utilisateur"
        >
          <UsersConfigurationForm />
        </FormSection>
        <div className="w-full flex flex-row justify-center py-5">
          <div
            //onClick={methods.handleSubmit(onSubmit)}
            onClick={createAccount}
            className="group cursor-pointer flex flex-row space-x-2  text-teltonika-800 border border-teltonika-800 rounded-md py-1 px-2 hover:text-white hover:bg-teltonika-800"
          >
            {postOrganization.isPending && (
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
    </div>
  );
}

export default page;
