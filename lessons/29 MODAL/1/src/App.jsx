import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
// 1
import EffectSection from "./components/EffectSection";
import { useState } from "react";

export default function App() {
  // 2
  const [tab, setTab] = useState('effect');
  
  return (
    <>
      <Header/>

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

        {/* 3 */}
        { tab === 'effect' && <EffectSection/>}

      </main>
    </>
  )
}