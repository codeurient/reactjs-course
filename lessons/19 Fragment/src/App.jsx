import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import { Fragment } from "react";

export default function App() {
  

  return (

    // 1) Burda DIV tag-lerinin ana element kimi istifade edilmemesi xetaya sebeb olar. Ancaq REACT js-de bir qayda var, bize icaze verir ki, 
    // necese edek ve hemin TAG-ler artiq istifade edilmeden de proqram xetasiz islesin.
    <Fragment>
      <Header/>

      <main>
        <TeachingSection/>
        <DifferencesSection/>
      </main>
    </Fragment>

    // 2) Bunun ucun FRAGMENT adinda daxili komponent import etmeliyik ve DIV tag-lerine evezine FRAGMENT yaziriq. 

    // 3) Ferq ondadir ki, DIV tag-leri olduqda DOM agacinda hemin div tag-lerini goruruk ve bu elave yük kimi hesab olunur proqram ucun
    // Ancaq FRAGMENT adinda daxili komponentden istifade etdikde DIV tag-lerini gormeyeceyik DOM agacinda.
  )
}