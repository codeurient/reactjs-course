import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
// 4) State ile islemek ucun ilk once onu IMPORT etmek lazimdir. 'useState' react js-in hook funksiyasidir.
import { useState } from 'react';
import { ways } from "./data";

export default function App() {
  let content = "Click the button";  // 1) deyisken yaradiriq. 

  function handleClick(type) {
    console.log("button clicked", type);
    content = type;  // 2) Button kliklendikde 'TYPE' parametrinin deyerini 'content' deyiskenine gonderirik.
  }

  return (
    <div>
      <Header/>
      <main>
        <section>
          <h3>Lorem ipsum dolor sit.</h3>
          <ul>
            {ways.map((way, index) => (
              <WayToTeach key={index} {...way} />
            ))}
          </ul>
        </section>

        <section>
          <h3>Moved by Elara's selfless act of kindness</h3>
          <Button onClick={ () => handleClick('way') }>Home</Button>
          <Button onClick={ () => handleClick('easy') }>Blog</Button>
          <Button onClick={ () => handleClick('program') }>About</Button>
          {/* 
              3) Neticeni ekrana yazdiririq. Ancaq hec bir deyisiklik gormeyeceyik. Cunki REACT js de STATE deyilen bir qayda vardir.
              Bu STATE qaydasi ile biz ozumuz proqrama bildirmeliyik ki, hansi deyisiklikleri izlemek lazimdir hansilari yox. 
              Yəni, özümüz manual olaraq yazmalıyıq ki, nə STATE-dir.
          */}
          <p>{content}</p>
        </section>
      </main>
    </div>
  )
}