import React from 'react'

function page({params}:{params:{building:string}}) {
  return (
    <div>ADD FLOOR TO {params.building}</div>
  )
}

export default page