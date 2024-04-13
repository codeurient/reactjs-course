// 1) App() adinda funksiya yaradiriq bu funksiya HTML tag-lerimizi RETURN edir.
function App() {
  return (

    <div>
      <h1>Hello React!</h1>
    </div>

  )
}

// 2) App() funksiyasini istifade ede bilmeyimiz ucun EXPORT etmeliyik. APP() evezine istediyimiz adi yazmaq olar.
export default App

// 3) Burdan hansi ad ile export etmeyimizin bir onemi yoxdur. Cunki MAIN.JSX faylinin icine APP.JSX faylini IMPORT 
// edeceyik. IMPORT etdikde yazdigimiz ad APP.JSX -dan export etdiyimiz kodlari hansi ad ile elde edeceyimizi bildirir.

// Meselen: import App from './App.jsx' 

// Demeli APP adı ilə İMPORT edirik. Burda da App əvəzinə istədiyimiz ad ilə İMPORT etmək olar.