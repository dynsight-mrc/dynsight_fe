import React from 'react'

function page({ params }: { params: { floor: string } }) {
  return (
    <div>overview of floorid {params.floor} </div>
  )
}

export default page