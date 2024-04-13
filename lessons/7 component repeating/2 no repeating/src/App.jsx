import Header from "./components/Header";

// 1) funksiya yaradiriq hansi ki, LI tag-lerini RETURN edir. Bu funksiyani component kimi asagida istifade edirik. Sadece terkibi eynidir. 
function WayToTeach() {
  return (
    <li>
      <p>
        <strong>Lorem ipsum dolor sit.</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit at unde pariatur placeat repellendus officiis illo consequatur, deleniti optio quam totam doloremque recusandae quasi voluptas nihil minus, consectetur velit obcaecati animi corrupti molestiae minima. Numquam voluptate labore incidunt doloremque repellendus perferendis culpa iure ex? Facere ipsa inventore officia aspernatur!
      </p>
    </li>
  )
}

export default function App() {
  return (
    <div>
      <Header/>

      <main>
        <section>
          <h3>Lorem ipsum dolor sit.</h3>

          <ul>
            <WayToTeach/>
            <WayToTeach/>
            <WayToTeach/>
          </ul>

        </section>
      </main>
    </div>
  )
}