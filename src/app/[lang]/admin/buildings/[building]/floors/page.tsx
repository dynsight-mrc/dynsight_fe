import { authOptions } from '@/src/app/api/auth/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'
import { getFloorsByBuildingId } from '../../_api/get-floors'
import Table from '@/src/app/[lang]/_components/table/Table'
import FloorTableRow from '@/src/app/[lang]/_components/table/FloorTableRow'

async function page({params}:{params:{building:string}}) {
  const session = await getServerSession(authOptions)
  let floors = await getFloorsByBuildingId(session,params.building)
  console.log(floors);
  let floorsFormated = floors.map(floor=>({...floor,rooms:floor.rooms.length}))
  return (
    <div>
      
      <Table
          RowComponent={FloorTableRow}
          rows={floorsFormated!}
          header={["Intitulé", "Numéro", "Blocs"]}
          keys={["name", "number", "rooms"]}
          filters={[{ key: "all", title: "Tous les étages" }]}
        />

    </div>
  )
}

export default page