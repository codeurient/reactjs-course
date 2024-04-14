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
          {/* 
              1) TAG-e ad vermek ucun en dogru qayda bu olacaqdir. Yalniz, sadece bele yazmaq kifayet deyildir. Button.jsx faylinda hemin 
              parametleri qebul etmek ucun CHILDREN props-undan istifade etmek lazimdir.
          */}
          <Button>Home</Button>
          <Button>Blog</Button>
          <Button>About</Button>


          {/* 2) Parametr olaraq tekce metn yox TAG-de gondermek olar */}
          <Button>
            <span>
              <h3>11111</h3>
              <h4>22222</h4>
            </span>
          </Button>


        </section>
      </main>
    </div>
  )
}