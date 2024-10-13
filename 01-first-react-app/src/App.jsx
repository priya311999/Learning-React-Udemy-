import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0)

  return (
    <>
    <header className='header'>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='heading'>
      <h1>React.js</h1>
      <h3>i.e., using the React library for rendering the UI</h3>        
      </div>
      </header>
      <div className="tabs">
        <menu>
          <button className={activeContentIndex === 0 ? "active" : ""}
            onClick={()=>
              setActiveContentIndex(0)
            }
          >Why React?</button>
          
          <button className={activeContentIndex === 1 ? "active" : ""}
            onClick={()=>
              setActiveContentIndex(1)
            }>Core Features</button>
          <button className={activeContentIndex === 2 ? "active" : ""}
            onClick={()=>
              setActiveContentIndex(2)
            }>Related Resources</button>          
          <button className={activeContentIndex === 3 ? "active" : ""}
            onClick={()=>
              setActiveContentIndex(3)
            }>React vs JS</button>          

        </menu>
        <div className="tab-content">
          <ul>
          {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

        </div>
      </div>
    </>
  )
}

export default App
