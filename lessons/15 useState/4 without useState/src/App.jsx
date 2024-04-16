import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways } from "./data";

export default function App() {

  let content = 'Here is something'; // 1) Deyiskene deyer veririk. 

  console.log('without useState'); // 3) Hec bir deyisiklik olmadigi ucun 1 defe console penceresine 'without useState' stringi yazdirilir.

  function handleClick(type) {
    // 2) Button kliklendiyinde 'TYPE' parametrinin deyerini 'content' deyiskenine yazdir deyirik ve hecne bas vermeycek. Cunki deyisiklik bas verdikde isleyecek olan 'useState' hook-undan 
    // istifade etmemisik. Yəni, Button her kliklendiyinde 'TYPE' parametri ferqli deyerler qebul edir. (way easy program) Ancaq bu deyerler 'content' deyiskenine yazdirilmir. 
    // Bunun ucun deyisiklik bas verdikde hemin deyisikliyi izlemek ucun 'useState' hook-undan istifade edirik. 
    content = type;  
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
          <p>{content}</p> {/* 3) */}
        </section>
      </main>
    </div>
  )
}