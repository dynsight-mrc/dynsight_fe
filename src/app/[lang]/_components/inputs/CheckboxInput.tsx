import React from 'react'

function CheckboxInput({
    title,
    registerKey,
    type,
    validations,
  }: {
    title: string;
    type?: string;
    registerKey: string;
    validations: Record<string, unknown>;
  }) {
  return (
    <div>CheckboxInput</div>
  )
}

export default CheckboxInput