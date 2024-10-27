import { authOptions } from '@/src/app/api/auth/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'
import Table from '@/src/app/[lang]/_components/table/Table'
import FloorTableRow from '@/src/app/[lang]/_components/table/FloorTableRow'
import { getFloorsDetailsWithRooms } from '@common/floors/api/get-floors'
import { CustomSession } from '@common/types/session.type'

async function page({params}:{params:{building:string}}) {
  const session = (await getServerSession(authOptions))as CustomSession
  let floors = await getFloorsDetailsWithRooms(session,[{name:"buildingId","value":params.building}])
  console.log(floors);
  let floorsFormated = floors.map(floor=>({...floor,rooms:floor.rooms.length}))
  return (
    <div>
      
      <Table
          RowComponent={FloorTableRow}
          rows={floorsFormated!}
          header={["Intitulé", "Numéro", "Nombre des Blocs","Immeuble"]}
          keys={["name", "number", "rooms","building.name"]}
          filters={[{ key: "all", title: "Tous les étages" }]}
        />

    </div>
  )
}

export default page