import { useState } from "react";
import { EXAMPLES } from "../data"; 
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";


export default function Examples(){
   const [selectedTopic, setSelectedTopic] = useState('components')
  function handleSelect(selectedOption){
    //selectedOption - component, jsx, props, state
    setSelectedTopic(selectedOption);
    console.log(selectedTopic);
}
    return(
    <Section title="Examples" id="examples">
      <Tabs buttons={
      <>
      <TabButton isSelected={selectedTopic=== 'components'} onClick={()=>handleSelect('components')}>Components</TabButton>
      <TabButton isSelected={selectedTopic=== 'jsx'}  onClick={()=>handleSelect('jsx')}>Jsx</TabButton>
      <TabButton isSelected={selectedTopic=== 'props'} onClick={()=>handleSelect('props')}>Props</TabButton>
      <TabButton isSelected={selectedTopic=== 'state'} onClick={()=>handleSelect('state')}>State</TabButton>
      </>}>

      </Tabs>
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}

          </code>
        </pre>
      </div>
  </Section>
)
}