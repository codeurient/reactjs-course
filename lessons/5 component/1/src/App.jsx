// 1) Daha qisa olmasi ucun EXPORT sozunu asagida yox, bilavasite funksiyanin onunde de yazmaq olar.
export default function App() {
  return (
    // 2) Koda header hisse elave ede bilerik. Header kimi section, main, ve.s bloklarda elave etmek olar. Ancaq react js-in mahiyyeti odur ki, 
    // her blok bir fayl icinde yazilmasin. Ayri-ayri componentlere ayrilsin. Component yaratmaq ucun ise react js-de burda gorduyumuz kimi funksiya yaradaraq
    // neticeni RETURN etmek lazimdir. Component-ler ise tag kimi yazilir. Meselen, bu funksiyamizin adı APP-dirse onda component <app /> olacaq.
    <div>
      <header>
        <h3>CODEURIENT</h3>

        <span>We learn programming languages</span>
      </header>


      <main>
        <h1>Hello React!</h1>
      </main>
    </div>
  )
}