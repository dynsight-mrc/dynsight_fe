import React from 'react'
import TableRow from '../../_components/table/TableRow'
import Table from '../../_components/table/Table'
let users = [{
    name:"User 1",
    email:"user1@dynsight.fr",
    profile:"Company Occupant",
    access:"Building 1",
},
{
    name:"User 2",
    email:"user2@dynsight.fr",
    profile:"Facility Manger",
    access:"Building 1",
},
{
    name:"User 3",
    email:"user3@dynsight.fr",
    profile:"Asset manager",
    access:"Building 1",
},
{
    name:"User 4",
    email:"user4@dynsight.fr",
    profile:"Property Manager",
    access:"Building 1",
},
{
    name:"User 6",
    email:"user6@dynsight.fr",
    profile:"CompanyOccupant",
    access:"Building 1",
}
]

function page() {
  return (
    <div>
        
        <Table
        RowComponent={TableRow}
        rows={users}
        header={["Name","Email", "Profile", "Access",]}
        keys={["name","email", "profile",  "access" ]}
        filters={[
          { key: "all", title: "All users" },
          { key: "co", title: "Company Occupant" },
          { key: "fm", title: "Facility Manager" },
          { key: "pm", title: "Property Manager" },
        ]}
      />
    </div>
  )
}

export default page