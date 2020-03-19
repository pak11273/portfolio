import React from "react"
import portrait from "./assets/images/SELF.svg"
import git from "./assets/images/github-logo.png"
import linkedIn from "./assets/images/pngwave.png"
import stacked from "./assets/images/stacked-logo.png"
import "./assets/scss/index.scss"

function App() {
  return (
    <div>
      <nav>
        <div className="nav row center-xs">
          <div className="main__menu col-xs-10">
            <div className="main__menu__item main__menu__item--padding scale-in-center main__menu__item--hover delay-3">
              <img width="30px" height="30px" src={git} alt="git icon" />
            </div>
            <div className="main__menu__item main__menu__item--padding scale-in-center main__menu__item--hover delay-3">
              <img
                width="30px"
                height="30px"
                src={linkedIn}
                alt="linkedIn icon"
              />
            </div>
            <div className="main__menu__item main__menu__item--padding scale-in-center main__menu__item--hover delay-3">
              <img width="37px" height="37px" src={stacked} alt="SO icon" />
            </div>
            <div className="main__menu__item--padding scale-in-center main__menu__item--hover delay-4">
              <p>cv</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="wrapper">
        <div className="row center-xs ">
          <section className="masthead">
            <img src={portrait} className="vibrate-1" alt="self portrait" />
            <div className="puff-in-center-rider masthead__rider">
              <h5>fullStack</h5>
            </div>
            <div>
              <h2>Isaac Pak</h2>
              <h4>Web Developer</h4>
            </div>
            <div>
              <p>built with</p>
              <p>
                <span className="masthead__text--hightlight">
                  create-react-app
                </span>
                <span> & </span>
                <span className="masthead__text--hightlight">sass</span>
              </p>
              <p>See the source code</p>
            </div>
          </section>
        </div>
        <section className="row center-xs"></section>
      </div>
    </div>
  )
}

export default App
