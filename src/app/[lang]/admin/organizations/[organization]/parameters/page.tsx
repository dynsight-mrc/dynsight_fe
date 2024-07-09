import React from 'react'

function page({params}:{params:{site:string}}) {
  return (
    <div>organization {params.site} Parameters </div>
  )
}

export default page