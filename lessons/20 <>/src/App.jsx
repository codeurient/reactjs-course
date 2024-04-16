import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";

export default function App() {
  
  return (
    // Fragment-i bu cur Fragment import etmeden bos simvollar ile de yaratmaq olar. <> </>
    <>
      <Header/>

      <main>
        <TeachingSection/>
        <DifferencesSection/>
      </main>
    </>
  )
}