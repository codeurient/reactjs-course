import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways } from "./data";

export default function App() {

  // 1) handleClick() funksiyasina TYPE adli ozumuzden parametr verdik. Bu parametr arqument olaraq asagida gonderdiyimiz deyerleri alacaqdir.
  function handleClick(type) {
    // 3) Hemin deyerleri 'console' penceresine yazdiririq.
    console.log("button clicked", type);
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
          {/* 
          2) Button.jsx faylinda olan onClick event-i isledikde App.jsx faylinda olan 'onClick' parametri isleyir. Hemin parametrin icinde callback funksiya yaratmisiq.
             onClick event-i bu finksiyani cagirir, hemin funksiya ise oz novbesinde handleClick() funksiyasini cagirir ve arqument olaraq handleClick() funksiyasi 
             'way', 'easy', 'program' deyerlerini TYPE parametrine gonderir. 
          */}
          <h3>Moved by Elara's selfless act of kindness</h3>
          <Button onClick={ () => handleClick('way') }>Home</Button>
          <Button onClick={ () => handleClick('easy') }>Blog</Button>
          <Button onClick={ () => handleClick('program') }>About</Button>
        </section>
      </main>
    </div>
  )
}