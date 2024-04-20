import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";
import { useState } from "react";

export default function App() {
  // 1) Test meqsedli headeri gizledek. 
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState('effect');

  // 2) 3 saniye sonra gizlenecek header
  setTimeout(() => {
    setVisible(false);
  }, 3000)
  
  return (
    <>
    {/* 3) Header gizlendikde bir EFFECT bas verir. Yeni bir hereket bas verir. Bu hereketi, effect-i alqilamaq ucun 'useEffect' hook-undan istifade edirik. */}
      {visible && <Header/>}

      <main>
        <IntroSection/>

        <TabsSection active={tab} onChange={ (current) => setTab(current) }/>

        { tab === 'main' && (
          <>
            <TeachingSection/>
            <DifferencesSection/>
          </>
        )}

        { tab === 'feedback' && <FeedbackSection/>}

        { tab === 'effect' && <EffectSection/>}

      </main>
    </>
  )
}