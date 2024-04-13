import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import { ways } from "./data";

// ways.map((way, index) => {
//   console.log(way);
//   console.log(index);
// });

export default function App() {
  return (
    <div>
      <Header/>

      <main>
        <section>
          <h3>Lorem ipsum dolor sit.</h3>

          <ul>
            {/* 
                1) WAYS - array-dir. MAP() matodunun 1ci parametri olan WAY hemin array-in deyerleri olan obyektlerdir, 2ci parametri olan INDEX ise hemin
                deyerlerin indeksleridir. Bu indeksler unikaldir ve REACT JS-in KEY parametrine veririk ki, REACT JS kitabxanasi daha tez tapa bilsin deyerleri.
            */}
            {ways.map((way, index) => (
              // 2) WAY parametri obyektdir ve ... separator simvollarindan istifade ederek hemin obyektlerin icindeki deyerleri elde edirik.
              // Hemin obyektin 'title' ve 'description' xasselerinin deyerleri WayToTeach() funksiyasinin parametri olan obyektin 'title' ve 'description' xasselerine oturulur. 
              <WayToTeach key={index} {...way} />
            ))}
          </ul>

        </section>
      </main>
    </div>
  )
}