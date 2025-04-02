import React from "react";
import homeSrc from "/public/home.jpg";
import Hero from "/src/components/hero";

export const metadata= {
  title: 'Home',
}

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Home" content="Professional Cloud Hosting" />
  );
}
