// 1) Header component-ini ayri bir fayla qoyduq. Bu component-i App.jsx faylinda istifade etmek ucun ise IMPORT edirik. 
import Header from "./components/Header";

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