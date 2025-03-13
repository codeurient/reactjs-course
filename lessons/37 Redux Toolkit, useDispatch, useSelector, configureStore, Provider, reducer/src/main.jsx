import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// NOT: Mutleq App deye import etmek lazim deyil sadece bas herfi boyuk yazmaq vacibdir.. App.jsx faylindan export edilen component-i App deyerek import edirik ve ANA component olan ROOT-a (index.html) gonderirik.
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'

// 1) STATE - defaultState adinda oz obyektimizi yaradaraq ve CASH adli xassesine 0 deyerini veririk. Bu bizim STATE-imizdir. STATE - component icinde ilkin olaraq gosterilen data-lardir. Baslangic seviyye. 
// Yəni, sayta daxil olduqda 0 sıfır görürük ekranda yaxud her hansisa bir metn ve.s kimi baslangic da gosterilen melumatlara STATE deyilir. Meqsed bu STATE-leri deyisdirmekdir.
const defaultState = {
    cash: 0,
}

// 2) STATE-leri deyisdirmek ucun REDUCER-lardan istifade edilir. ACTION-lar ile deye bilerik ki, ne bas verdikde STATE deyissin. ACTION-lari REDUCER-lara gondermek ucun DISPATCH-lardan istifade edilir.
const reducer = (state = defaultState, action) => {

    
// 3) REDUCER-lar ise bildiyimiz normal funksiyalardir. 2 parametr qebul edir. 1ci parametr STATE component-de olan baslangic seviyyeni gosterir. 2ci parametr ACTION ise ACTION obyekti ile gonderdiyimiz 
// obyektdir. Bu obyekt icinde TYPE xassesi qeyd edilir. Bu xassenin deyerinden asili olaraq REDUCER funksiyasi STATE-i deyisdirecekdir. 
    switch (action.type) {

        case "ADD_CASH":
            // 4) 
            return {...state, cash: state.cash + action.payload}

        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}

// 5) REDUCER funksiyasini COMPONENT icinde istifade ede bilmeyimiz ucun, configureStore() funksiyasi ile component-e gondermek lazimdir. configureStore hemin global store-u yaradir.
const store = configureStore({
    reducer: reducer,
     // NOT: devTools: true       - bunun ucun extension yukleyerek tool penceresinde deyisiklikleri izlemek mumkundur. Bu dersde bunu etmeyeceyik. Coxda gerekli deyil.
});

ReactDOM.createRoot(document.getElementById('root')).render( 
    // 1) REACT component ile REDUX-u elaqelendirmek ucun ise 'Provider' component-inden istifade edirik. Yəni, global olaraq component-lere STATE gondere bileceyik.
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)



// NOT: React.StrictMode - Higher Order Component demekdir. Bu bir moddur ve proqramda bas vere bilecek maksimum xetalari gormek ve proqrami qorumaq ucun istifade edilir. Eger kohnelmis
// hook-lar olarsa bu haqqda info verir. Meselen: componentWillMount, componentWillUpdate, componentWillReceiveProps ve.s artiq kohnelmisdir ve istifadesi meslehet deyildir. 
// StrictMode hansi hook-un ve.s istifadeye yararsiz oldugunu gosterir ve.s