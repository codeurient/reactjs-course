import WayToTeach from './WayToTeach';
import { ways } from '../data'; 

export default function TeachingSection() {
    return (
        <section>
            <h3>Lorem ipsum dolor sit.</h3>
            <ul>
                {     ways.map((way, index) => ( <WayToTeach key={index} {...way} /> ))      }
            </ul>
        </section>
    )
}