import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways } from "./data";

export default function App() {

  // 1) Button.jsx faylinda olan funksiyani App.jsx faylina kocurduk. Indi ise Ana elementde Alt elemente parametr kimi hemin funksiyani gondermek 
  // lazimdir. 
  function handleClick() {
    console.log("button clicked");
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
          {/* 1) Burda yazdigimiz onClick parametri Button.jsx faylinda yazdigimiz addir. Bu parametri istediyimiz adda yaza bilerikş */}
          <Button onClick={handleClick}>Home</Button>
          <Button>Blog</Button>
          <Button>About</Button>
        </section>
      </main>
    </div>
  )
}