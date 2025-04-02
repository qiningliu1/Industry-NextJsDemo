import Hero from '/src/components/hero'
import React from 'react'
import performanceSrc from '/public/performance.jpg'

export const metadata = {
  title: 'Performance',
}
export default function Page() {
  return (
    <Hero imgUrl={performanceSrc} altTxt="Performance" content="Performance~~~" />
  )
}
