import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from 'react';
import { ways } from "./data";

export default function App() {
  // 1) Ferqli-ferqli deyiskenlere tek-tek deyer gondermekdense, js-in qramatikasindan istifade ederek tek setrde kvadrat morterizede deyiskenleri yaza
  // ve useState array-indan qayidan birinci deyeri 1ci deyiskene ikinci deyeri 2ci deyiskene yazdira bilerik. 
  const [content, setContent] = useState('here is something'); 

  console.log('without useState'); // 2) useState hook-u her cagrildiginda console penceresine 'with useState' adli string yazdirilacaqdir. 

  function handleClick(type) {
    console.log(type); 
    setContent(type);
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
          <p>{content}</p> {/* 3) */}
        </section>
      </main>
    </div>
  )
}