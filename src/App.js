import React from "react"
import logo from "./assets/images/SELF.svg"
import "./assets/scss/index.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          width="400px"
          height="400px"
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1>Isaac Pak</h1>
        <p>
          I am a self taught web developer with more than 3+ years of experience
          coupled with a digital marketing background. I have professionally
          worked in the Graphic Design Industry for 5+ years. I have a variety
          of skills but I'm looking to continue my growth in web development.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
