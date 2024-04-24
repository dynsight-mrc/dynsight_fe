import React from 'react'

function page({params}:{params:{building:string}}) {
  return (
    <div>building {params.building} params</div>
  )
}

export default page