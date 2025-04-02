import Hero from '/src/components/hero'
import React from 'react'
import reliabilitySrc from '/public/reliability.jpg'


export const metadata = {
  title: 'Reliability',
}
export default function Page() {
  return (
    <Hero imgUrl={reliabilitySrc} altTxt="Reliability" content="Reliability~~~" />
  )
}
