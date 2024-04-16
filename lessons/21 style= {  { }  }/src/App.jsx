import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";

export default function App() {
  
  return (
    <>
      <Header/>

      <main>
        {/* 1) component-i IMPORT ederek istifade edirik */}
        <IntroSection/>

        <TeachingSection/>
        <DifferencesSection/>
      </main>
    </>
  )
}