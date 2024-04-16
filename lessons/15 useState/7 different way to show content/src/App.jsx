import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways, differences } from "./data"; 
import { useState } from "react";

export default function App() {
  // 1) default olaraq NULL vermek praktika cehedden lazimdir. contentType-in deyeri NULL olduqda sorgu ile yoxlaya bilerik ki, meselen eger NULL olarsa onda hansisa emri icra et. 
  let [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  // 5-2) En son qayda
  let tabContent = null
  if(contentType) {  tabContent = <p>{differences[contentType]}</p>  } 
  else { tabContent = <p>Click the button!</p> }

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

        {/*  2) Meselen, ternar operator icinde sorgu yaradiriq. Eger contentType icinde nese varsa hemin olan şeyi göstər, eks halda 'Click the button' stringini goster. */}
        { contentType ?  (<p>{differences[contentType]}</p>)  :  (<p>Click the button!</p>) }

        {/*  3) Basqa bir yazilis qaydasi beledir. NULL false kimi qebul edilerse ! nida da false olarsa 2 false 1 true verir */}
        { !contentType ? <p>Click the button!</p> : null }
        { contentType ? <p>{differences[contentType]}</p> : null }

        {/* 4) Belede yazmaq olar. NULL false kimi qebul edilerse ! nida da false olarsa 2 false 1 true verir. */}
        { !contentType && <p>Click the button!</p> }
        { contentType && <p>{differences[contentType]}</p> }

        {/* 5) Deyisken yaradaraq p tag-lerini hemin deyiskene sorgu ile vermek de olar: */}
        { tabContent }
        </section>
      </main>
    </div>
  )
}