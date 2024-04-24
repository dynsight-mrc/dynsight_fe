import React from 'react'

function page({params}:{params:{site:string}}) {
  return (
    <div>
        conenct device to {params.site}
    </div>
  )
}

export default page