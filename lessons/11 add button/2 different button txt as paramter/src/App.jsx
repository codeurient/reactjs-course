import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button";
import { ways } from "./data";

export default function App() {
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
          {/* 1) Ferqli duyme adlari vermek ucun TEXT adinda parametr hemin parametre deyer teyin edirik. Bu deyer duymenin adidir. */}
          <Button text="Click 1"/>
          <Button text="Click 2"/>
          <Button text="Click 3"/>
        </section>
      </main>
    </div>
  )
}