import React from "react";
import Table from "@/src/app/[lang]/_components/table/Table";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";

import UserTableRow from "@/src/app/[lang]/_components/table/UserTableRow";
import { getUsersByOrganizationId } from "@admin/accounts/_api/getUsers";
import { ReadUserByOrganizationId } from "@admin/accounts/dto/read-user.dto";

;
async function page({params}:{params:{organization:string}}) {
  let session =  await getServerSession(authOptions)
  let users : ReadUserByOrganizationId[] =await getUsersByOrganizationId(session,params.organization)
  
  return (
    <div>
      <Table
        RowComponent={UserTableRow}
        rows={users}
        header={[
          "Nom", "Prénom", "Email", "Rôle"
        ]}
        keys={["firstName", "lastName", "email", "role"]}
        filters={[
          { key: "all", title: "Tous les utilisateurs" },
          
        ]}
      />
    </div>
  );
}

export default page;
