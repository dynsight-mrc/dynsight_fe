import React from "react";
import Table from "@/src/app/[lang]/_components/table/Table";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";

import UserTableRow from "@/src/app/[lang]/_components/table/UserTableRow";

import { getUsers } from "@common/users/api/get-users";
import { ReadUserDto } from "@common/users/dtos/read-user.dto";

;
async function page({params}:{params:{organization:string}}) {
  let session =  await getServerSession(authOptions)
  //let users : ReadUserByOrganizationId[] =await getUsersByOrganizationId(session,params.organization)
  let users : ReadUserDto[] =await getUsers(session,[{"name":"permissions.organizationId","value":params.organization}])
  console.log(users);
  
  return (
    <div>
      <Table
        RowComponent={UserTableRow}
        rows={users}
        header={["Nom", "Prénom", "Email", "Rôle"]}
        keys={[
          "personalInformation.firstName",
          "personalInformation.lastName",
          "contactInformation.email",
          "permissions.role",
        ]}
        filters={[
          { key: "all", title: "Tous les utilisateurs" },
          
        ]}
      />
    </div>
  );
}

export default page;
