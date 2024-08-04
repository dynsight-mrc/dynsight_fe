"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { useToast } from "@/src/app/[lang]/_components/shadcn/ui/use-toast";
import { createBuilding } from "@admin/organizations/_api/post-buildings";
import { CustomSession } from "@/src/app/[lang]/types/session.type";
import { useParams } from "next/navigation";
import FormSection from "@admin/organizations/_components/FormSectionLayout";
import LocationForm from "@admin/organizations/_components/forms/LocationForm";
import BuildingForm from "@admin/organizations/_components/forms/BuildingForm";
import FloorsConfigurationForm from "@admin/organizations/_components/forms/FloorsConfigurationForm";
import BlocsConfigurationForm from "@admin/organizations/_components/forms/BlocsConfigurationForm";


function Page() {
  const params = useParams()
  const { data: _session } = useSession();
  const session = _session as CustomSession;

  const methods = useForm({
    defaultValues: {
      building: undefined,
      floors: undefined,
      location: undefined,
      blocs: undefined,
      
    },
  });
  const { toast } = useToast();

  const postBuilding = useMutation({
    mutationFn: createBuilding,
    onSuccess: (results) => {
      console.log(results);
      
      toast({
        className: "bg-green-500 text-white",
        title: "success",
        description: "Immeuble added successfully",
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
    postBuilding.mutateAsync({ session,organization:params.organization as string, data });
  };

  /* const createAccount = ()=>{
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
        name: [ 'bloc 1' ,'bloc 2',],
        type: [ 'office',"storage" ],
        surface: [ 12,43 ],
        floors: [ 'etage 1s',"etage 3s" ]
      },
      users: {
        firstName: [ 'dsqdsq' ],
        lastName:["lastname"],
        email: [ 'admin@dynsight.fr' ],
        password: [ 'Ohm2023adp??' ],
        role: [ '1' ]
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

  } */
  return (
    <div className="lg:p-7 px-2 h-full overflow-auto">
      <FormProvider {...methods}>
        

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
          descriptionTitle="Détails du Batiment"
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
        
        <div className="w-full flex flex-row justify-center py-5">
          <div
            onClick={methods.handleSubmit(onSubmit)}
            //onClick={createAccount}
            className="group cursor-pointer flex flex-row space-x-2  text-teltonika-800 border border-teltonika-800 rounded-md py-1 px-2 hover:text-white hover:bg-teltonika-800"
          >
            {postBuilding.isPending && (
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

export default Page;
