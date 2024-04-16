import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";

export default function App() {
  // 2) TAB deyiskeninin deyeri default olaraq 'feedback'-dir.
  const [tab, setTab] = useState('feedback');
  
  return (
    <>
      <Header/>

      <main>
        <IntroSection/>

        {/* 
            1) Burda yazdigimiz 'onChange' parametri-i ozumuzun verdiyi addir. Bu parametr 'TabsSection.jsx' faylina ordan da 'Button.jsx' faylina addim-addim funksiya gonderir.
            Birinci novbe esas burda isi goren 'Button.jsx' faylinda olan 'onClick' event-idir. Hemin onCLICK EVENT-i 'App.jsx' faylindan 'TabsSection.jsx' faylina ordan da 'Button.jsx' faylina 
            gelen funksiyani isledir. 
            
            Bu funksiya isledikde 'TabsSection.jsx' faylinda 2 deyerden biri verilir. Kliklenen duymeden asili olaraq. Ya 'main' yaxud 'feedback'. Bu deyerler gonderilir 'App.jsx' faylinda olan
            asagida gorduyunuz CURRENT parametrine. Her ferqli duyme kliklendikde ferqli deyer gelir. 
            
            'setTab()' funksiyasi bu tez-tez deyisen deyerleri izleyir. Eger deyisiklik varsa avtomatik olaraq yuxarida gorduyunuz TAB deyiskenine hemin yeni deyer barede xeber gonderir. 
            Yəni, TAB deyiskeninin deyeri setTab() funksiyasinin komekliyi ile yenilenir.
        */}
        <TabsSection active={tab} onChange={ (current) => setTab(current) }/>

        {/* 3) TAB eger 'main' olarsa bu blokda olan kodlar gosterilecek */}
        { tab === 'main' && (
          <>
            <TeachingSection/>
            <DifferencesSection/>
          </>
        )}

        {/* 4) TAB eger 'feedback' olarsa bu blokda olan kodlar gosterilecek */}
        { tab === 'feedback' && <FeedbackSection/>}

      </main>
    </>
  )
}