import Hero from '/src/components/hero'
import React from 'react'
import scale from '/public/scale.jpg'


export const metadata = {
  title: 'Scale',
}
export default function Page() {
  return (
    <Hero imgUrl={scale} altTxt="Scale" content="Scale~~~" />
  )
}
