import React from 'react'

function page({params}:{params:{site:string}}) {
  return (
    <div>Site {params.site} Parameters </div>
  )
}

export default page