"use client"
import React from 'react'
import { RecoilRoot } from 'recoil'

export default function GlobalStateProvider({children}:any) {
  return (
    <RecoilRoot>
        {children}
    </RecoilRoot>
  )
}

 