import { authOptions } from '@/src/app/api/auth/authOptions';

import { getServerSession } from 'next-auth';
import React from 'react'
import { getRoomsByBuildingId } from '../../_api/get-rooms';
import SpaceTableRow from '@/src/app/[lang]/_components/table/SpaceTableRow';
import Table from '@/src/app/[lang]/_components/table/Table';

async function page({params}:{params:{building:string}}) {
  let session =  await getServerSession(authOptions)
  let blocs  =await getRoomsByBuildingId(session,params.building)
    console.log(blocs);
    
  return (
    <div>
      <Table
        RowComponent={SpaceTableRow}
        rows={blocs}
        header={[
          "Intitulé", "Étage", "Équipements","Superficie"
        ]}
        keys={["name", "floor.name", "sensors", "surface"]}
        filters={[
          { key: "all", title: "All spaces" },
          
        ]}
      />
    </div>
  );
}

export default page