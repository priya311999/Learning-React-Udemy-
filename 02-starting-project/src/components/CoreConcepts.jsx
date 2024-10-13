import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return(
  <section id="core-concepts">
    <h2>Time to get started!</h2>

    <h3>Core Concepts</h3>
    <ul>
      {/* <CoreConcept
    title ={CORE_CONCEPTS[0].title}
    description = {CORE_CONCEPTS[0].description}
    image = {CORE_CONCEPTS[0].image} 
    ></CoreConcept>
    <CoreConcept
    title ={CORE_CONCEPTS[1].title}
    description = {CORE_CONCEPTS[1].description}
    image = {CORE_CONCEPTS[1].image} 
    ></CoreConcept>
    <CoreConcept
    title ={CORE_CONCEPTS[2].title}
    description = {CORE_CONCEPTS[2].description}
    image = {CORE_CONCEPTS[2].image} 
    ></CoreConcept>
    <CoreConcept
    title ={CORE_CONCEPTS[3].title}
    description = {CORE_CONCEPTS[3].description}
    image = {CORE_CONCEPTS[3].image} 
    ></CoreConcept> */}

      {/* //Second Method
    <CoreConcept {...CORE_CONCEPTS[0]}/>
    <CoreConcept {...CORE_CONCEPTS[1]}/>
    <CoreConcept {...CORE_CONCEPTS[2]}/>
    <CoreConcept {...CORE_CONCEPTS[3]}/> */}

      {CORE_CONCEPTS.map((conceptItems) => (
        <CoreConcept key={conceptItems.title} {...conceptItems} />
      ))}
    </ul>
  </section>
    );
}
