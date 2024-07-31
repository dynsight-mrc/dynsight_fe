import React from "react";
import Table from "@/src/app/[lang]/_components/table/Table";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { ReadUserOverview } from "./dto/read-user.dto";
import { getUsersOveview } from "./_api/getUsers";
import UserTableRow from "@/src/app/[lang]/_components/table/UserTableRow";

;
async function page() {
  let session =  await getServerSession(authOptions)
  let users : ReadUserOverview[] =await getUsersOveview(session)
  
  return (
    <div>
      <Table
        RowComponent={UserTableRow}
        rows={users}
        header={[
          "Nom", "Prénom", "Email", "Rôle","Organization"
        ]}
        keys={["firstName", "lastName", "email", "role", "organization"]}
        filters={[
          { key: "all", title: "Tous les utilisateurs" },
          
        ]}
      />
    </div>
  );
}

export default page;
