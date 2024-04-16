import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways, differences } from "./data"; // 1) data.js faylindan 'differences' obyektini qosuruq.
import { useState } from "react";

export default function App() {


  let [content, setcontent] = useState()

  // 2) Button kliklendikde handleClick() funksiyasi cagrilir. Bu funksiyanin type parametri 'way', 'easy', 'program' arqumentlerini qebul ederek
  // setcontent() komekliyi ile 'content' deyiskenine yerlesdirilir.
  function handleClick(type) {
    setcontent(type)
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
           {/* 3) 'content' deyiskeninin icinde olan 'way', 'easy', 'program' deyerleri ile 'differences' obyektine muraciet ederek hemin obyektin deyerlerini elde edirik */}
          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  )
}