"use client";
import { useToast } from "@/src/app/[lang]/_components/shadcn/ui/use-toast";
import { ReadOrganizationDto } from "@common/organizations/dtos/read-organizations.dto";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormSection from "../../../../_components/FormSectionLayout";
import OrganizationConfigurationForm from "../../../../../_components/forms/OrganizationConfigurationForm";
import { useMutation } from "@tanstack/react-query";
import { patchOrganization } from "../../../_api/update-organization";
import { CustomSession } from "@common/types/session.type";
import { TailSpin } from "react-loader-spinner";

function OrganizationParamters({
  session,
  organization,
  organizationData,
}: {
  session: CustomSession;
  organization: string;
  organizationData: ReadOrganizationDto;
}) {
  const { toast } = useToast();

  const methods = useForm({
    defaultValues: {
      organization: {
        name: organizationData.name,
        reference: organizationData.reference,
        description: organizationData.description,
        owner: organizationData.owner,
      },
    },
  });

  const updateOrganization = useMutation({
    mutationFn: patchOrganization,
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
    console.log(data);

    updateOrganization.mutateAsync({
      session,
      organization,
      data: data.organization,
    });
  };
  return (
    <FormProvider {...methods}>
      <FormSection
        style="lg:grid lg:grid-cols-2 gap-x-3"
        formTile="Généralité"
        descriptionTitle="Détails de l'Organisation"
        descriptionText="Cette section contient les informations générales sur l'organisation cliente, telles que le nom de l'organisation, sa référence, le propriétaire et le domaine d'activité de l'organisation. Ces détails aident à identifier et à caractériser l'organisation"
        detailsLink="/admin/organizations"
      >
        <OrganizationConfigurationForm />
      </FormSection>

      <div className="w-full flex flex-row justify-center py-5">
        <div
          onClick={methods.handleSubmit(onSubmit)}
          //onClick={createAccount}
          className="group cursor-pointer flex flex-row space-x-2  text-teltonika-800 border border-teltonika-800 rounded-md py-1 px-2 hover:text-white hover:bg-teltonika-800"
        >
          {updateOrganization.isPending && (
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

export default OrganizationParamters;
