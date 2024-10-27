import React from "react";
import Table from "@/src/app/[lang]/_components/table/Table";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import UserTableRow from "@/src/app/[lang]/_components/table/UserTableRow";
import { ReadOrganizationDto } from "@common/organizations/dtos/read-organizations.dto";
import { getOrganizations } from "@common/organizations/api/get-organizations";
import { CustomSession } from "@common/types/session.type";
import { getUsers } from "@common/users/api/get-users";
import { ReadUserDto } from "@common/users/dtos/read-user.dto";

async function page() {
  const session = (await getServerSession(authOptions)) as CustomSession;
  let usersPromise = getUsers(session);
  let organizationsPromise = getOrganizations(session, { details: false });

  let [users, organizations]: [ReadUserDto[], ReadOrganizationDto[]] =
    await Promise.all([usersPromise, organizationsPromise]);

  let usersAccount = users.filter(
    (user: ReadUserDto) => user.permissions.role !== "admin"
  ).map((user):any=>{
    let userOrganization = organizations.find(organization=>organization.id===user.permissions.organizationId)
    return {
      ...user,
      organization:userOrganization?.name
    }
  });

  return (
    <div>
      <Table
        RowComponent={UserTableRow}
        rows={usersAccount}
        header={["Nom", "Prénom", "Email", "Rôle", "Organization"]}
        keys={[
          "personalInformation.firstName",
          "personalInformation.lastName",
          "contactInformation.email",
          "permissions.role",
          "organization",
        ]}
        filters={[{ key: "all", title: "Tous les utilisateurs" }]}
      />
    </div>
  );
}

export default page;
