// 1) Header adli funksiya yaradiriq. Hemin funksiya saytin bir hissesine mexsus olan bloku return edir. Bu funksiya bizim componentimizdir. 
// Componentin adı funksiyanin adidir. Bas herfi ozumuz bilerek boyuk herf ile yaziriq ki, diger tag adlari ile sehf salmayaq.
function Header() {
  return (
    <header>
        <h3>CODEURIENT</h3>

        <span>We learn programming languages</span>
    </header>
  )
}

// 2) Header componentini cagirmaq ucun funksiyanin adını tag kimi yazmaq lazımdır: <Header></Header> yaxud qisaca <Header/>
export default function App() {
  return (
    <div>
      
      <Header/>

      <main>
        <h1>Hello React!</h1>
      </main>
    </div>
  )
}

// 3) Bu numunede struktura yoxdur cunki hele de eyni kodlari bir fay icinde yerlesir.