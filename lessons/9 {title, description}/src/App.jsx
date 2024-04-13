import Header from "./components/Header";
import { ways } from "./data";

// 1) Obyektleri qebul edecek PROPS evezine { } bezekli morterizeden istifade ederek hemin obyekt xasselerini bu bezekli morterize icinde qeyd ede bilerik.
// 2) NOT: { } bezekli morterizede yazdigimiz 'title' ve 'description' xasseleri mutleq ...ways[0] array-inda qeyd etdiyimiz xasse adlari ile eyni olmalidir.
function WayToTeach({title, description}) {
  return (
    <li>
      <p>
        {/* 3) Deyerleri elde etmek ucun artiq bir basa 'title' ve 'description' parametrlerini yaza bilerik */}
        <strong>{title}</strong>
        {description}
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
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
          </ul>

        </section>
      </main>
    </div>
  )
}