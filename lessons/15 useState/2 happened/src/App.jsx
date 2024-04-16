import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from 'react';
import { ways } from "./data";
// const stateArray = useState();   //! 1) useState hook-unu component xaricinde yazmaq olmaz. Ya component icinde yaxud basqa hook icinde olar.

export default function App() {
  const stateArray = useState('here is something'); // 2) useState hook-unu component icinde istifade edirik ve hemise en yuxarida yazmaq lazimdir.
  // 3) console.log(stateArray);  - console-da, useState hookunun ne qaytardigina baxsaq gorerik ki, Array qaytarir. 0ci indeksde string, 1ci indeksde funksiya var.

  // 1ci indeksde olan funksiya 0ci indeksde olan veziyyeti idare etmek yəni dəyişdirmək yaxud bas veren deyisikliyi izlemek üçündür...
  const content = stateArray[0];  // 5) Bunu helelki istifade etmirik. 
  const setContent = stateArray[1];
  // 4) Button her kliklendiyinde handleClick() funksiyasi cagrilacaqdir. 'setContent' deyiskeni useState hook-unun 1ci indeksinde olan funksiyadir. Bu funksiya kodda bas veren deyisikliyi izleyir.
  // Eger her hansisa bir yenilik, deyisiklik varsa tekrar-tekrar cagrilir. Bas veren deyisiklik ise ferqli button-larin kliklenerek ferqli deyerler elde etmesidir. ('way', 'easy', 'program')
  function handleClick(type) {
    console.log("button clicked", type);
    setContent(type); // 6) setContent-e 'TYPE' parametrini veririk, Cunki hemin deyisikliyi izlemek isteyirik. Eger TYPE deyiserse setContent funksiyasi cagrilacaqdir. 
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
          <p>{content}</p>
        </section>
      </main>
    </div>
  )
}