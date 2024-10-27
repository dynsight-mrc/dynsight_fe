'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import { useToast } from '@/src/app/[lang]/_components/shadcn/ui/use-toast';
import FormSection from '@/src/app/[lang]/admin/_components/FormSectionLayout';
import BlocsConfigurationWithInitiatedFloors from '@/src/app/[lang]/_components/forms/BlocsConfigurationWithInitiatedFloors';
import { getFloors } from '@common/floors/api/get-floors';
import { CustomSession } from '@common/types/session.type';
import { createRooms } from '@common/rooms/api/post-rooms';
import { ReadFloorDto } from '@common/floors/dtos/read-floors.dto';

function Page() {
  const { data: _session } = useSession();
  let session = _session  as CustomSession
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
      //getFloors( session,{details:false},[{name:"buildingId",value:params.building}] ),
    getFloors( session,undefined,[{"name":"buildingId","value":params.building}] ),
  });


  if (floorsQuery.isLoading) {    
    return <div className='pt-52 flex justify-center items-center'><span>Chargement des paramètres ...</span></div>;
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
        <BlocsConfigurationWithInitiatedFloors floors={floorsQuery.data as ReadFloorDto[]}/>
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

export default Page