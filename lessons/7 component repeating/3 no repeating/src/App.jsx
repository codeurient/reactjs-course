import Header from "./components/Header";
// 1) ARRAY-i import edirik. 
import { ways } from "./data";

// 2) WayToTeach() funksiyasinin PROPS adli parametri asagida hemin funksiyani component kimi cagirdigimiz zaman yazdigimiz ATRIBUT adlarini arqument kimi qebul edir.
// Bu PROPS parametri istediyimiz adda ola biler. Mutleq PROPS yazmaq vacib deyil. PROPS yazmagimizda meqsed ise sadece ekser frameworklarda bir komponentden diger komponentde melumat 
// gonderdikde buna props deyirler, onun ucun bele mentiqe uygun ad yazmisiq.
function WayToTeach(props) {
  // 3) console.log(props);   
  // Bu PROPS parametrinin qebul etdiyi 'TITLE' ve 'DESCRIPTION' arqumentleri obyekt tiplidir:  {title: 'asdsad', description: 'asdasd'}
  // 'TITLE' ve 'DESCRIPTION' kimi gonderilen arqumentler eger Obyekt tiplidirse onda demeli, hemin arqumentler XASSELERDIR.
  return (
    <li>
      <p>
        {/* 5) PROPS eger obyektdirse ve 'TITLE' ile 'DESCRIPTION' xasselerdirse, obyektin xasselerini noqte simvolu ile cagiririq. */}
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
          {/* 
              4) Bu xasselere deyer olaraq IMPORT etdiyimiz WAYS arrayini terkibini veririk. 
              5) Burda xasse kimi birinci yazdigimiz 'TITLE' ve 'DESCRIPTION' evezine istenilen ad yaza bilerik. 
          */}
          <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description} />
            <WayToTeach title={ways[1].title} description={ways[1].description} />
            <WayToTeach title={ways[2].title} description={ways[2].description} />
          </ul>
        </section>
      </main>
    </div>
  )
}