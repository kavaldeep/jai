"use client";
import { Hero } from "./home/hero/hero";
import { Nav } from "./home/nav";
import HowTo from "./home/howTo/howTo";
import AttractiveFeatures from "./home/attractiveFeatures/attractiveFeatures";
import Cryptos from "./home/cryptos/crpytos";
import MostAdvanced from "./home/mostAdvanced/mostAdvanced";
import Testimony from "./home/testimony/testimony";
import Analysis from "./home/analysis/analysis";
import Footer from "./home/footer/footer";
import Cursor from "./home/cursor/cusor";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const scaleCusor = document.querySelectorAll(".grow-scale");
    const scaleSmallCusor = document.querySelectorAll(".small-scale");
    const cursor = document.querySelector(".cursor-main");

    scaleCusor
      ? scaleCusor.forEach((div: any) =>
          div.addEventListener("mouseenter", function () {
            cursor ? cursor.classList.add("grow") : null;
          })
        )
      : null;

    scaleCusor
      ? scaleCusor.forEach((div: any) =>
          div.addEventListener("mouseleave", function () {
            cursor ? cursor.classList.remove("grow") : null;
          })
        )
      : null;

    scaleSmallCusor
      ? scaleSmallCusor.forEach((div: any) =>
          div.addEventListener("mouseenter", function () {
            cursor ? cursor.classList.add("grow-small") : null;
          })
        )
      : null;

    scaleSmallCusor
      ? scaleSmallCusor.forEach((div: any) =>
          div.addEventListener("mouseleave", function () {
            cursor ? cursor.classList.remove("grow-small") : null;
          })
        )
      : null;
  }, []);
  return (
    <main className="bg-gray-900 cursor-none">
      <Cursor />
      <Nav />
      <Hero />
      <HowTo />
      <Cryptos />
      <AttractiveFeatures />
      <MostAdvanced />
      <Testimony />
      <Analysis />
      <Footer />
    </main>
  );
}
