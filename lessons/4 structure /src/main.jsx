// 1) ReactDOM bizim saytimizdir. Hal-hazirda localda islediyimiz ucun saytin adi beledir: http://localhost:5173/
import ReactDOM from 'react-dom/client'

// 2) APP.JSX faylini App adı ilə import edirik. App evezine istediyimiz sozu yazaraq o ad ile import ede bilerik. 
import App from './App.jsx'

// 3) CSS faylini import edirik.
import './index.css'

// 4) ID-si ROOT olan tag-i elde edirik. Bu tag INDEX.HTML faylindadir.
const el = document.getElementById('root');

// 5) http://localhost:5173   icinde createRoot() metodu ile ANA komponent yaradiriq. 
// 6) render()   metodu ile IMPORT etdiyimiz APP komponentini ANA komponente render edirik.
ReactDOM.createRoot(el).render( <App /> )