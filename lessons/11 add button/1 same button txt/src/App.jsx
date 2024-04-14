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
          {/* 1) Duymenin adina CLICK demisik ve her defe eyni componenti cagirdiqda duymenin adı CLICK olacaqdir. */}
          <Button/>
          <Button/>
          <Button/>
        </section>
      </main>
    </div>
  )
}