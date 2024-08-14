'use client'
import React from 'react'
import { getFloorsByBuildingId } from '../../../_api/get-floors'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react';
import { CustomSession } from '@/src/app/[lang]/types/session.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import { useToast } from '@/src/app/[lang]/_components/shadcn/ui/use-toast';
import FormSection from '@admin/organizations/_components/FormSectionLayout';
import FloorsConfigurationForm from '@admin/organizations/_components/forms/FloorsConfigurationForm';
import BlocsConfigurationForm from '@admin/organizations/_components/forms/BlocsConfigurationForm';
import { TailSpin } from 'react-loader-spinner';
import BlocsConfigurationWithInitiatedFloors from '@admin/organizations/_components/forms/BlocsConfigurationWithInitiatedFloors';
import { createRooms } from '@admin/buildings/_api/post-rooms';
import { CreateRooms } from '../../../dto/create-rooms';

function page() {
  const { data: session } = useSession();
  let params = useParams<{building:string,lang: string}>()

  const methods = useForm();
  const { toast } = useToast();

  const postRooms = useMutation({
    mutationFn: createRooms,
    onSuccess: (results) => {
     
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
  const onSubmit = (data:any) => {  
      
   postRooms.mutateAsync({ session,building:params.building as string,rooms:data.blocs });
  };

  let floorsQuery = useQuery({
    queryKey: ["floors", { building: params.building }],
    queryFn: () =>
      getFloorsByBuildingId( session, params.building ),
  });


  if (floorsQuery.isLoading) {
    console.log("loading");
    
    return <div className='pt-52 flex justify-center items-center'><span>Chargement ...</span></div>;
  }
  if(floorsQuery.isSuccess){    
    console.log(floorsQuery.data);
  }
  return (
    <div className="lg:p-7 px-2 h-full overflow-auto">
    <FormProvider {...methods}>
      <FormSection
        formTile="Généralité"
        descriptionTitle="Configuration des blocs"
        descriptionText="Cette section concerne la configuration interne des blocs du bâtiment. Vous devrez fournir une configuration minimale pour chaque bloc, incluant son nom et son étage. Des détails supplémentaires pourront être ajoutés ultérieurement si nécessaire"
        supportMultipleForm={true}
        addFormButtonText="Ajouter un bloc"
        detailsLink="/admin/blocs"
      >
        <BlocsConfigurationWithInitiatedFloors floors={floorsQuery.data}/>
      </FormSection>
      
      <div className="w-full flex flex-row justify-center py-5">
        <div
          onClick={methods.handleSubmit(onSubmit)}
          //onClick={createAccount}
          className="group cursor-pointer flex flex-row space-x-2  text-teltonika-800 border border-teltonika-800 rounded-md py-1 px-2 hover:text-white hover:bg-teltonika-800"
        >
          {/* {postBuilding.isPending && (
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
          )} */}
          <span>submit</span>
        </div>
      </div>
    </FormProvider>
  </div>
  )
}

export default page