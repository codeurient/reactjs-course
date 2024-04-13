import Header from "./components/Header";
import { ways } from "./data";

// console.log(ways);          // 3) ARRAY qayidir icinde obyektler ile.
// console.log(...ways);       // 4) Obyektler hamisi birlikde qayidir.

function WayToTeach(props) {

  // console.log(props);      // 5) PROPS, obyektleri tek-tek qebul edir. Cunki, array-in her indeksinde bir obyekt var.
  return (
    <li>
      <p>
        <strong>{props.title}</strong>
        {props.description}
      </p>
    </li>
  )
}

export default function App() {
  return (
    <div>
      <Header/>

      <main>
        <section>
          <h3>Lorem ipsum dolor sit.</h3>

          <ul>
            {/* 
              1) Bele yazdiqda yene de tekrarlanma movcuddur:      <WayToTeach title={ways[0].title} description={ways[0].description} />

              2) Hemin tekrarlanmani aradan qaldirmaq ucun separator ... simvolundan istifade edirik.
            */}
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
          </ul>

        </section>
      </main>
    </div>
  )
}