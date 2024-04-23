import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// 1) IMPORT etdik.
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode>
        {/* 2) STORE-dan global olaraq istenilen state-leri istenilen data-lari elde ederek componentler icinde istifade ede bilerik. */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)