import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
// 1
import { store } from './redux/app/store.js'


ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode>
        {/* 2 */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)