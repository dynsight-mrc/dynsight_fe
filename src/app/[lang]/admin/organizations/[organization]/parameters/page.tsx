import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { TailSpin } from "react-loader-spinner";

import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/src/app/[lang]/_components/shadcn/ui/use-toast";
import { CustomSession } from "@common/types/session.type";
import { getOrganization } from "../../_api/get-organizations";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { getServerSession } from "next-auth";

import OrganizationParamters from "./_components/organizationParamters";

async function Page({ params }: { params: { organization: string } }) {
  const session = (await getServerSession(authOptions)) as CustomSession;

  const organizationData = await getOrganization(
    session,
    params.organization,
    undefined
  );

  return (
    <div className="lg:p-7 px-2 h-full overflow-auto">
        <OrganizationParamters session={session} organization={params.organization} organizationData={organizationData}/>
    </div>
  );
}

export default Page;
