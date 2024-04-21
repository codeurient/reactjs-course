import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
// 1) Bezekli morterize olmadan cagirirq. STORE.JS -den EXPORT edilen REDUKTORU componentde istifade ede bilmek ucun, PROVIDER-dan istifade ederek REDUX ile REACT arasinda elaqe qururuq.
import store from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode>
        <Provider store={store}>  
            <App />
        </Provider>
    </React.StrictMode>
)